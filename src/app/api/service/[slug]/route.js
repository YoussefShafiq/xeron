import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/constants';

export async function GET(_req, { params }) {
    const slug = params?.slug;
    if (!slug) {
        return NextResponse.json({ error: 'Missing slug.' }, { status: 400 });
    }

    try {
        const res = await fetch(`${BASE_URL}/service/${encodeURIComponent(slug)}`, {
            cache: 'no-store',
        });
        const text = await res.text();

        return new NextResponse(text, {
            status: res.status,
            headers: {
                'content-type': res.headers.get('content-type') ?? 'application/json',
            },
        });
    } catch (e) {
        return NextResponse.json(
            { error: 'Failed to fetch service.' },
            { status: 502 }
        );
    }
}
