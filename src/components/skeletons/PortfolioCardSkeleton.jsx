import { SkeletonPulse } from './SkeletonPulse';

export default function PortfolioCardSkeleton({ variant = 'portfolio' }) {
    const sizeClass =
        variant === 'portfolio'
            ? 'w-full aspect-3/2 sm:aspect-square'
            : 'aspect-3/2';

    return (
        <div
            className={`block rounded-2xl gradient-border-shell gradient-border-shell--bl ${sizeClass}`}
        >
            <div className="relative h-full w-full min-h-0 overflow-hidden rounded-[14px]">
                <SkeletonPulse className="absolute inset-0 h-full w-full rounded-[14px] bg-white/5" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-6">
                    <SkeletonPulse className="h-5 w-3/4" />
                    <SkeletonPulse className="h-3 w-full" />
                    <div className="mt-1 flex flex-wrap gap-2">
                        <SkeletonPulse className="h-5 w-14 rounded-full" />
                        <SkeletonPulse className="h-5 w-16 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
