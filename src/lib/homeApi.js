import { BASE_URL } from '@/lib/constants';

const homeFetchInit = { cache: 'no-store' };

/**
 * GET /home → { success, message, data: { portfolios: [], services: [] } }
 */
export async function fetchHome() {
    try {
        const res = await fetch(`${BASE_URL}/home`, homeFetchInit);
        if (!res.ok) return null;
        const json = await res.json();
        const data = json?.data;
        if (!data || typeof data !== 'object') return null;
        return {
            portfolios: Array.isArray(data.portfolios) ? data.portfolios : [],
            services: Array.isArray(data.services) ? data.services : [],
        };
    } catch (e) {
        console.error('fetchHome:', e);
        return null;
    }
}
