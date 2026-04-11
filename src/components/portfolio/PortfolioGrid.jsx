import PortfolioCard from './PortfolioCard';

/**
 * PortfolioGrid — pass `items` from fetchPortfolioList() (or a slice).
 * Pass `preview={true}` to render only the first 4.
 * Pass `variant="portfolio"` for card sizing used on the portfolio page.
 */
export default function PortfolioGrid({ items = [], preview = false, variant = 'default' }) {
    const list = preview ? items.slice(0, 4) : items;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {list.map((item) => (
                <PortfolioCard key={item.slug} item={item} variant={variant} />
            ))}
        </div>
    );
}
