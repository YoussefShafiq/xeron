import SectionHeader from '@/components/ui/SectionHeader';
import JobCard from '@/components/jobs/JobCard';
import { jobs } from '@/data/jobs';

export const metadata = {
    title: 'Jobs — XERON',
    description: 'Join the XERON team. We\'re always looking for people who care about craft.',
};

export default function JobsPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mt-24 mx-auto">
                <SectionHeader
                    title="Join the Team"
                    subtitle="We're always looking for people who care about craft, move fast, and want their work to matter."
                    centered
                />

                {jobs.length > 0 ? (
                    <div className="mt-16 flex flex-col gap-5">
                        {jobs.map((job) => (
                            <JobCard key={job.slug} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-16 text-center py-20 bg-bg-card border border-bg-border rounded-2xl">
                        <p className="type-body text-center">
                            No open positions right now — check back soon.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}