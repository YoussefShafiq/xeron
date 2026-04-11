import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { fetchPortfolioList } from '@/lib/portfolioApi';

export const metadata = {
    title: 'XERON -Portfolio',
    description: 'Real projects. Real impact. Built for people who think bigger.',
};

export default async function PortfolioPage() {
    const portfolio = await fetchPortfolioList();

    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mt-24 mx-auto">
                <SectionHeader
                    title="What We've Built"
                    subtitle="Real projects. Real impact. Built for people who think bigger."
                    centered
                />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {portfolio.map((item) => (
                        <PortfolioCard key={item.slug} item={item} variant="portfolio" />
                    ))}
                </div>
            </div>
        </div>
    );
}
