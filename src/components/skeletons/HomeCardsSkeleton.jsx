import SectionHeaderSkeleton from './SectionHeaderSkeleton';
import ServiceCardSkeleton from './ServiceCardSkeleton';
import PortfolioCardSkeleton from './PortfolioCardSkeleton';

export default function HomeCardsSkeleton() {
    return (
        <>
            <section className="overflow-hidden px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <SectionHeaderSkeleton centered />
                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <ServiceCardSkeleton key={i} />
                        ))}
                    </div>
                    <div className="mt-20 flex justify-center">
                        <div className="h-11 w-40 rounded-lg bg-white/10 animate-pulse" />
                    </div>
                </div>
            </section>

            <section className="overflow-hidden px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <SectionHeaderSkeleton centered />
                    <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <PortfolioCardSkeleton key={i} variant="portfolio" />
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <div className="h-11 w-36 rounded-lg bg-white/10 animate-pulse" />
                    </div>
                </div>
            </section>
        </>
    );
}
