import { SkeletonPulse } from './SkeletonPulse';

export default function ServiceCardSkeleton() {
    return (
        <article className="gradient-border-shell rounded-2xl">
            <div className="flex h-full min-h-[220px] flex-col rounded-2xl bg-purple-950 p-6 sm:min-h-[240px]">
                <SkeletonPulse className="h-12 w-12 rounded-xl" />
                <div className="mt-6 flex flex-1 flex-col gap-6">
                    <SkeletonPulse className="h-7 w-4/5" />
                    <div className="flex flex-col gap-2">
                        <SkeletonPulse className="h-3 w-full" />
                        <SkeletonPulse className="h-3 w-full" />
                        <SkeletonPulse className="h-3 w-2/3" />
                    </div>
                </div>
                <SkeletonPulse className="mt-8 h-4 w-32" />
            </div>
        </article>
    );
}
