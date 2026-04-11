import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export async function generateStaticParams() {
    return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }) {
    const job = jobs.find((j) => j.slug === params.slug);
    if (!job) return {};
    return { title: `${job.title} — XERON Jobs` };
}

export default function JobDetailPage({ params }) {
    const job = jobs.find((j) => j.slug === params.slug);
    if (!job) notFound();

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-5">
                        <Badge>{job.department}</Badge>
                        <Badge>{job.location}</Badge>
                        <Badge>{job.type}</Badge>
                    </div>

                    <h1 className="type-page-title mb-4">
                        {job.title}
                    </h1>

                    <p className="type-body leading-[1.8]">
                        {job.description}
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-bg-border mb-10" />

                {/* Requirements */}
                <div className="mb-10">
                    <h2 className="type-subheading mb-5">
                        Requirements
                    </h2>
                    <ul className="flex flex-col gap-3">
                        {job.requirements.map((req) => (
                            <li key={req} className="type-body flex items-start gap-3">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                                {req}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Nice to have */}
                {job.nice?.length > 0 && (
                    <div className="mb-12">
                        <h2 className="type-subheading mb-5">
                            Nice to Have
                        </h2>
                        <ul className="flex flex-col gap-3">
                            {job.nice.map((n) => (
                                <li key={n} className="type-body flex items-start gap-3">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-bg-border shrink-0" />
                                    {n}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* CTA */}
                <div className="bg-bg-card border border-bg-border rounded-2xl p-8 flex flex-col
          sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="type-h3 mb-1">
                            Interested?
                        </h3>
                        <p className="type-body">
                            Send your portfolio and a short intro to{' '}
                            <a href="mailto:jobs@xeron.link" className="text-accent-light hover:underline">
                                jobs@xeron.link
                            </a>
                        </p>
                    </div>
                    <Button href={`mailto:jobs@xeron.link?subject=Application — ${job.title}`} variant="primary">
                        Apply Now →
                    </Button>
                </div>

                <div className="mt-8">
                    <Button href="/jobs" variant="outline">← All Positions</Button>
                </div>
            </div>
        </div>
    );
}

