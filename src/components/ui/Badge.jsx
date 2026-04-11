export default function Badge({ children }) {
    return (
        <span className="type-badge inline-block px-2.5 py-0.5 rounded-full bg-accent/10 text-accent-light border border-accent/25 tracking-wide">
            {children}
        </span>
    );
}