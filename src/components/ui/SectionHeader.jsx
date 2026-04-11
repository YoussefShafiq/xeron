import Badge from '@/components/ui/Badge';

export default function SectionHeader({
    title,
    subtitle,
    tags,
    centered = false
}) {
    const tagList = Array.isArray(tags) ? tags : [];
    return (
        <div
            className={`max-w-7xl mb-[40px] md:mb-[56px] ${centered ? 'text-center mx-auto' : ''
                }`}
        >
            <h2 className="type-section-title leading-tight mb-3">
                {title}
            </h2>

            {subtitle && (
                <p className="type-section-subtitle">
                    {subtitle}
                </p>
            )}

            {tagList.length > 0 && (
                <div
                    className={`flex flex-wrap gap-2 mt-6 ${centered ? 'justify-center' : ''
                        }`}
                >
                    {tagList.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            )}
        </div>
    );
}