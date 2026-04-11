import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchPortfolioBySlug, fetchPortfolioList } from '@/lib/portfolioApi';

export async function generateStaticParams() {
    const list = await fetchPortfolioList();
    const pairs = await Promise.all(
        list.map(async (p) => {
            const detail = await fetchPortfolioBySlug(p.slug);
            const steps = Array.isArray(detail?.processSteps) ? detail.processSteps : [];
            return steps.map((step) => ({ slug: p.slug, section: step.slug }));
        })
    );
    return pairs.flat();
}

export async function generateMetadata({ params }) {
    const { slug, section } = await params;
    const item = await fetchPortfolioBySlug(slug);
    const processSteps = Array.isArray(item?.processSteps) ? item.processSteps : [];
    const step = processSteps.find((s) => s.slug === section);
    if (!item || !step) return {};
    return { title: `${item.title} - ${step.name}` };
}

function phaseLeadCopy(stepSlug, item, stepName) {
    const lines = {
        'ui-screens': `For ${item.title}, we refined visual hierarchy, spacing, and component states so the experience stays consistent across every screen.`,
        wireframes: `Before visual polish, we structured flows and layout for ${item.title}—wireframes aligned the team on intent and cut rework later.`,
        prototype: `Interactive prototypes let us validate ${item.title} with stakeholders early, so build cycles focused on the right details.`,
    };
    return (
        lines[stepSlug] ||
        `Design and delivery notes for the ${stepName} phase of ${item.title}.`
    );
}

export default async function PortfolioProcessSectionPage({ params }) {
    const { slug, section } = await params;
    const item = await fetchPortfolioBySlug(slug);
    if (!item) notFound();

    const processSteps = Array.isArray(item.processSteps) ? item.processSteps : [];
    const stepIndex = processSteps.findIndex((s) => s.slug === section);
    if (stepIndex < 0) notFound();

    const step = processSteps[stepIndex];

    const heroSrc =
        item.processImages?.[stepIndex] ||
        step.image ||
        item.images?.[0] ||
        item.image ||
        '/ImagePlaceholder.png';

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mt-40 mb-24">
                    <SectionHeader
                        title={step.name}
                        subtitle={item.subtitle || item.description}
                        centered
                    />
                    <Button href={`/portfolio/${item.slug}`} variant="primary">
                        View all
                    </Button>
                </div>

                <div className="gradient-border-shell gradient-border-shell--glow rounded-[20px] w-full max-w-5xl mx-auto mb-14">
                    <div className="relative w-full aspect-video min-h-[240px] md:min-h-[360px] rounded-[16px] overflow-hidden bg-white">
                        <Image
                            src={heroSrc}
                            alt={`${item.title} — ${step.name}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 896px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-6 mb-16">
                    <p className="type-prose opacity-90">
                        {phaseLeadCopy(section, item, step.name)}
                    </p>
                    {item.description && (
                        <p className="type-prose opacity-70">
                            {item.description}
                        </p>
                    )}
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button href={`/portfolio/${item.slug}`} variant="outline">
                        ← All process
                    </Button>
                </div>
            </div>
        </div>
    );
}
