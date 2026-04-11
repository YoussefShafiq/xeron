import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

export default function PortfolioCard({ item, variant = 'default' }) {
    const sizeClass =
        variant === 'portfolio'
            ? 'w-full aspect-3/2 sm:aspect-square'
            : 'aspect-3/2';
    const badgeClass =
        variant === 'portfolio'
            ? 'hidden lg:flex flex-wrap gap-2 mt-1 opacity-70'
            : 'flex flex-wrap gap-2 mt-1 opacity-70';

    return (
        <Link
            href={`/portfolio/${item.slug}`}
            className={`block rounded-2xl gradient-border-shell gradient-border-shell--bl  ${sizeClass}
                transition-all duration-200 hover:-translate-y-1 hover:shadow-card group`}
        >
            <div className="relative h-full w-full min-h-0 overflow-hidden rounded-[14px]">
                {/* Image fills the inner card (2px inset shows the gradient “border”) */}
                <Image
                    src={'/ImagePlaceholder.png'}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Gradient overlay — transparent at top, dark at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                {/* Text content pinned to the bottom over the image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                    <h3 className="type-card-overlay-title">
                        {item.title}
                    </h3>
                    <p className="type-card-overlay-desc">
                        {item.description}
                    </p>
                    <div className={badgeClass}>
                        {(item.tags ?? []).map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

