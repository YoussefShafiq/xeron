/**
 * Loading spinner — used in loading.jsx and anywhere async content is pending.
 *
 * Props:
 *  - size  — 'sm' | 'md' | 'lg'  (default 'md')
 */
const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-[3px]',
};

export default function Spinner({ size = 'md' }) {
    return (
        <div
            className={`
          ${sizes[size]}
          rounded-full
          border-bg-border border-t-accent
          animate-spin
        `}
            role="status"
            aria-label="Loading"
        />
    );
}