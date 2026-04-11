import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioCardSkeleton from '@/components/skeletons/PortfolioCardSkeleton';

export default function PortfolioLoading() {
    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mt-24 mx-auto">
                <SectionHeader
                    title="What We've Built"
                    subtitle="Real projects. Real impact. Built for people who think bigger."
                    centered
                />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <PortfolioCardSkeleton key={i} variant="portfolio" />
                    ))}
                </div>
            </div>
        </div>
    );
}
