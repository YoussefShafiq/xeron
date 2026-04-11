import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import HomeDataSections from '@/components/home/HomeDataSections';
import ContactSection from '@/components/home/ContactSection';
import HomeCardsSkeleton from '@/components/skeletons/HomeCardsSkeleton';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WhoWeAreSection />
            <Suspense fallback={<HomeCardsSkeleton />}>
                <HomeDataSections />
            </Suspense>
            <ContactSection />
        </>
    );
}
