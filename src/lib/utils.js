/**
 * Merge class names (lightweight clsx alternative)
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'month',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Truncate a string to a given length
 */
export function truncate(str, length = 120) {
    if (str.length <= length) return str;
    return str.slice(0, length).trimEnd() + '…';
}