import { SkeletonPulse } from './SkeletonPulse';

export default function ServiceDetailSkeleton() {
    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto mt-16 md:mt-32 lg:mt-24">
                <div className="mb-12 text-center md:mb-20">
                    <SkeletonPulse className="mx-auto mb-4 h-10 w-64 md:h-12 md:w-96" />
                    <div className="mx-auto flex max-w-2xl flex-col gap-2 px-2">
                        <SkeletonPulse className="h-4 w-full" />
                        <SkeletonPulse className="mx-auto h-4 w-4/5" />
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <SkeletonPulse className="h-6 w-20 rounded-full" />
                        <SkeletonPulse className="h-6 w-24 rounded-full" />
                        <SkeletonPulse className="h-6 w-16 rounded-full" />
                    </div>
                </div>

                <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
                    <aside className="hidden w-[280px] shrink-0 flex-col gap-6 rounded-2xl border border-white/[0.07] bg-white/3 p-6 lg:flex">
                        <SkeletonPulse className="h-8 w-24" />
                        <div className="flex flex-col gap-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <SkeletonPulse key={i} className="h-10 w-full rounded-lg" />
                            ))}
                        </div>
                        <SkeletonPulse className="mt-auto h-11 w-full rounded-lg" />
                    </aside>

                    <div className="relative w-full min-w-0 flex-1">
                        <div className="rounded-2xl border border-white/7 bg-white/2">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`space-y-4 px-6 py-8 md:px-10 md:py-12 ${i < 2 ? 'border-b border-purple-50/20' : ''}`}
                                >
                                    <SkeletonPulse className="h-8 w-2/3" />
                                    <SkeletonPulse className="h-4 w-full" />
                                    <SkeletonPulse className="h-4 w-full" />
                                    <SkeletonPulse className="h-4 w-5/6" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
