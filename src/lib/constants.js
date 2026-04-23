export const SITE_NAME = 'XERON';
export const SITE_URL = 'https://xeron.link';

export const CONTACT_EMAIL = 'hello@xeron.link';
export const JOBS_EMAIL = 'jobs@xeron.link';

export const SOCIAL_LINKS = {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    x: '#',
    behance: '#',
};

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact us', href: '/contact' },
    // { label: 'Jobs', href: '/jobs' },
];

/**
 * Backend base URL.
 * On Windows, `localhost` can resolve to IPv6 (`::1`) and cause ECONNREFUSED if
 * your backend only listens on IPv4. `127.0.0.1` is more reliable.
 */
export const BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.API_BASE_URL ||
    // 'https://xeronapi.xeron.tech';
    'http://localhost:3300';