import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchPortfolioBySlug, fetchPortfolioList } from '@/lib/portfolioApi';

export async function generateStaticParams() {
    const list = await fetchPortfolioList();
    return list.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = await fetchPortfolioBySlug(slug);
    if (!item) return {};
    return { title: `Portfolio - ${item.title}` };
}

export default async function PortfolioDetailPage({ params }) {
    const { slug } = await params;
    const item = await fetchPortfolioBySlug(slug);
    if (!item) notFound();

    const processSteps = Array.isArray(item.processSteps) ? item.processSteps : [];

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center my-24">
                    <SectionHeader
                        title={item.title}
                        subtitle={item.subtitle || item.description}
                        tags={Array.isArray(item.tags) ? item.tags : []}
                        centered
                        href={item.demoUrl}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch mb-20">

                    <div className="col-span-1 order-1 lg:order-0 gradient-border-shell gradient-border-shell--glow rounded-[20px] w-full max-w-full mx-auto lg:max-w-none">
                        <div className="relative w-full h-full aspect-16/10 md:aspect-video min-h-[220px] md:min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                            <Image
                                src={item.images?.[0] || item.image || '/ImagePlaceholder.png'}
                                alt={`${item.title} — problem`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-2 order-2 lg:order-0 flex flex-col gap-[28px] md:gap-[32px]">
                        <h2 className="type-heading">
                            The Problem Statement
                        </h2>
                        {(item.problem ?? []).map((para, i) => (
                            <p key={i} className="type-prose opacity-70">
                                {para}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch mb-24">

                    <div className="col-span-1 lg:col-span-2 order-2 lg:order-0 flex flex-col gap-[28px] md:gap-[32px]">
                        <h2 className="type-heading">
                            The Solution
                        </h2>
                        {(item.solution ?? []).map((para, i) => (
                            <p key={i} className="type-prose opacity-70">
                                {para}
                            </p>
                        ))}
                    </div>

                    <div className="col-span-1 order-1 lg:order-0 gradient-border-shell gradient-border-shell--glow rounded-[20px] w-full max-w-full mx-auto lg:max-w-none">
                        <div className="relative w-full h-full aspect-16/10 md:aspect-video min-h-[220px] md:min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                            <Image
                                src={item.images?.[1] || item.image || '/ImagePlaceholder.png'}
                                alt={`${item.title} — solution`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-center mb-12">
                        <h2 className="type-process-banner">
                            Gallery
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-20">
                        {processSteps.map((step, i) => (
                            <div
                                key={`${step.slug}-${i}`}
                                className="group"
                            >
                                <div className="relative gradient-border-shell gradient-border-shell--glow rounded-[20px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                    <div className="relative w-full aspect-4/3 rounded-[16px] overflow-hidden bg-white">

                                        <Image
                                            src={step.image || item.image || '/ImagePlaceholder.png'}
                                            alt={`${item.title} — ${step.name}`}
                                            fill
                                            sizes="33vw"
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-purple-1000/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-end p-1.5 sm:p-2 md:p-4">
                                            <div className="w-full text-purple-50">
                                                <h3 className="type-process-step-thumb text-purple-50">
                                                    {step.name}
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Button href="/portfolio" variant="outline">
                    ← Back to Portfolio
                </Button>

            </div>
        </div>
    );
}
