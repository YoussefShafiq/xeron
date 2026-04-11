import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';

export default function WhoWeAreSection() {
    return (
        <section className="py-[48px] px-[20px] md:py-[64px] md:px-[32px] lg:py-[80px] lg:px-[48px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
                <SectionHeader title="Who We Are" centered />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch">

                    {/* Image — 1/3 */}
                    <div className="col-span-1 gradient-border-shell gradient-border-shell--glow rounded-[20px] w-full mx-auto lg:max-w-none">
                        <div className="relative w-full h-full aspect-16/10 md:aspect-video min-h-[220px] md:min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                            <Image
                                src="/ImagePlaceholder.png"
                                alt="Who We Are"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content — 2/3 */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-[28px] md:gap-[40px] lg:gap-[64px]">
                        <h3 className="type-emphasis-title">
                            The Minds Behind XERON
                        </h3>
                        <p className="type-prose">
                            XERON is a full-service digital agency built for startups and entrepreneurs.
                            We design, develop, and brand — websites, mobile apps, and visual identities
                            that make growing businesses impossible to ignore.
                        </p>
                        <p className="type-prose">
                            Born from a college idea in 2022, we turned a friendship and a passion for
                            technology into something real. Today, every project we take on carries that
                            same energy — focused, intentional, and always built to last.
                        </p>
                        <div className="mt-[8px] md:mt-[16px] lg:mt-[24px]">
                            <Button href="/about" variant="primary" arrow>Who We Are</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}