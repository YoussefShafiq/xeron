/** Base block for skeleton UIs — pulse + subtle fill on dark backgrounds */
export function SkeletonPulse({ className = '', ...props }) {
    return (
        <div
            className={`animate-pulse rounded-lg bg-white/10 ${className}`}
            {...props}
        />
    );
}
