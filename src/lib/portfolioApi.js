import { BASE_URL } from '@/lib/constants';

/**
 * Next.js extends fetch() and caches GETs by default, so reloads can skip your API.
 * `cache: 'no-store'` opts out so each server render hits the backend.
 * (Use `next: { revalidate: 60 }` instead if you want cached responses for up to 60s.)
 */
const portfolioFetchInit = { cache: 'no-store' };

/**
 * GET /portfolio/get-all → { success, message, data: Portfolio[] }
 */
export async function fetchPortfolioList() {
    try {
        const res = await fetch(`${BASE_URL}/portfolio/get-all`, portfolioFetchInit);
        if (!res.ok) return [];
        const json = await res.json();
        const data = json?.data;
        return Array.isArray(data) ? data : [];
    } catch (e) {
        console.error('fetchPortfolioList:', e);
        return [];
    }
}

/**
 * GET /portfolio/get/:slug → { success, message, data: Portfolio }
 */
export async function fetchPortfolioBySlug(slug) {
    if (!slug) return null;
    try {
        const res = await fetch(
            `${BASE_URL}/portfolio/get/${encodeURIComponent(slug)}`,
            portfolioFetchInit
        );
        if (res.status === 404) return null;
        if (!res.ok) return null;
        const json = await res.json();
        const data = json?.data;
        if (data && typeof data === 'object' && !Array.isArray(data) && data.slug) {
            return data;
        }
        return null;
    } catch (e) {
        console.error('fetchPortfolioBySlug:', e);
        return null;
    }
}
