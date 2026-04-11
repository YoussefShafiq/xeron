import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export default function JobCard({ job }) {
    return (
        <Link
            href={`/jobs/${job.slug}`}
            className="block bg-bg-card border border-bg-border rounded-2xl p-7
        hover:border-accent hover:-translate-y-1 hover:shadow-card
        transition-all duration-200 group"
        >
            <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="type-card-title leading-snug">
                    {job.title}
                </h3>
                <span className="type-caption font-medium text-accent-light bg-accent/10
          border border-accent/25 rounded-full px-3 py-1 shrink-0">
                    {job.type}
                </span>
            </div>

            <p className="type-body mb-5 leading-[1.7]">
                {job.shortDesc}
            </p>

            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <Badge>{job.department}</Badge>
                    <Badge>{job.location}</Badge>
                </div>
                <span className="type-caption text-accent-light opacity-0 group-hover:opacity-100
          transition-opacity duration-200">
                    View role →
                </span>
            </div>
        </Link>
    );
}