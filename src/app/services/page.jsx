'use client';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceCardSkeleton from '@/components/skeletons/ServiceCardSkeleton';
import { useState, useEffect } from 'react';
import { normalizeServiceList } from '@/lib/serviceApi';

const SKELETON_COUNT = 6;

export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetch(`/api/service`)
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then((data) => {
                if (!cancelled) setServices(normalizeServiceList(data));
            })
            .catch((error) => {
                console.error('Error fetching services:', error);
                if (!cancelled) setServices([]);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mt-24 mx-auto">
                <SectionHeader
                    title="Our Services"
                    subtitle="Everything your startup needs to build, launch, and grow — under one roof."
                    centered
                />
                <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {loading
                        ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                              <ServiceCardSkeleton key={i} />
                          ))
                        : services.map((s) => <ServiceCard key={s.slug} service={s} />)}
                </div>
            </div>
        </div>
    );
}
