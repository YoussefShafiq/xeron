import ServiceCard from './ServiceCard';
import { services } from '@/data/services';

/**
 * ServicesList — renders all services in a responsive grid.
 * Pass `preview={true}` to render only the first 3 (for homepage).
 */
export default function ServicesList({ preview = false }) {
    const items = preview ? services.slice(0, 3) : services;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((service) => (
                <ServiceCard key={service.slug} service={service} />
            ))}
        </div>
    );
}