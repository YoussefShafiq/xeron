/**
 * Generic Card wrapper — use for any content block that needs
 * the standard dark card treatment (bg, border, radius, hover lift).
 *
 * Props:
 *  - className   — extra Tailwind classes
 *  - hover       — whether to apply hover lift + glow (default true)
 *  - children
 */
export default function Card({ children, className = '', hover = true }) {
    return (
        <div
            className={`
          bg-bg-card border border-bg-border rounded-2xl
          ${hover ? 'transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-card' : ''}
          ${className}
        `}
        >
            {children}
        </div>
    );
}