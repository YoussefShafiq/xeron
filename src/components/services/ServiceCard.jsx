import Link from 'next/link';
import { Icon } from '@iconify/react';


const truncateWords = (text, limit) => {
    const s = text == null ? '' : String(text);
    const words = s.split(/\s+/).filter(Boolean);
    if (!words.length) return '';
    return words.length > limit
        ? words.slice(0, limit).join(' ') + '...'
        : s.trim();
};

export default function ServiceCard({ service }) {
    return (
        <article
            className="
            gradient-border-shell rounded-2xl
            group relative
            transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
        "
        >
            {/* Inner Card */}
            <div
                className="
                flex h-full flex-col rounded-2xl p-6
                bg-purple-950
            "
            >
                {/* Icon */}
                <div
                    className="
                    flex h-12 w-12 items-center justify-center rounded-xl
                    bg-purple-500/10 border border-purple-400/20
                "
                >
                    <Icon icon={service.icon} className="h-8 w-8 text-purple-300" />
                </div>

                {/* Content */}
                <div className="mt-6 flex flex-1 flex-col">

                    {/* Text + Subtext */}
                    <div className="flex flex-col gap-6">
                        <h3 className="type-card-title text-purple-50">
                            {service.title}
                        </h3>

                        <p className="type-caption leading-relaxed text-purple-50/80">
                            {truncateWords(service.shortDesc ?? service.shortDescription, 25)}
                        </p>
                    </div>

                    {/* Button */}
                    <Link
                        href={`/services/${service.slug}`}
                        className="
                        mt-8 type-caption font-medium
                        text-purple-50 transition-colors duration-200
                        hover:text-white
                    "
                    >
                        Explore {service.title} →
                    </Link>
                </div>
            </div>
        </article>
    );
}