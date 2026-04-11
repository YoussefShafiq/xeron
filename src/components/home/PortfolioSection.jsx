import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import Button from '@/components/ui/Button';

export default function PortfolioSection({ portfolios = [] }) {
    const preview = portfolios.slice(0, 3);

    return (
        <section className="py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="What We've Built"
                    subtitle="Real projects. Real Impact. Built for people who think bigger."
                    centered
                />

                <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {preview.map((item) => (
                        <PortfolioCard key={item.slug} item={item} variant="portfolio" />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button href="/portfolio" variant="primary">See more</Button>
                </div>
            </div>
        </section>
    );
}
