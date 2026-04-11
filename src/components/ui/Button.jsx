import Link from 'next/link';

const variants = {
    primary: 'bg-purple-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-b hover:from-purple-600 hover:to-purple-900 hover:shadow-[0_1px_0_0_#faf5ff,0_5px_10px_rgba(250,245,255,0.5)]',
    outline: 'bg-transparent border border-bg-border hover:border-accent hover:text-accent-light text-content-primary',
    ghost: 'bg-transparent text-accent-light hover:text-content-primary',
};

export default function Button({ children, href, variant = 'primary', arrow = false, fullWidth = false, onClick, type = 'button', className = '', disabled = false }) {
    const base = `inline-flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-lg text-sm font-medium md:text-base transition-all duration-200 hover:-translate-y-px cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
        return (
            <Link href={href} className={base}>
                {children}
                {arrow && <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>}
            </Link>
        );
    }

    return (
        <button type={type} className={base} onClick={onClick} disabled={disabled}>
            {children}
            {arrow && <span className="transition-transform duration-200">→</span>}
        </button>
    );
}