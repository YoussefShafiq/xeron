import { SkeletonPulse } from './SkeletonPulse';

export default function SectionHeaderSkeleton({ centered = false }) {
    return (
        <div className={`mb-10 md:mb-14 ${centered ? 'mx-auto max-w-3xl text-center' : ''}`}>
            <SkeletonPulse className={`mb-3 h-10 md:h-14 ${centered ? 'mx-auto w-64 md:w-96' : 'w-56 md:w-80'}`} />
            <SkeletonPulse className={`h-4 md:h-5 ${centered ? 'mx-auto w-full max-w-xl' : 'w-full max-w-2xl'}`} />
            <SkeletonPulse className={`mt-2 h-4 md:h-5 ${centered ? 'mx-auto w-4/5 max-w-lg' : 'max-w-xl'}`} />
        </div>
    );
}
