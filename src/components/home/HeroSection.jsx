import Button from '@/components/ui/Button';

export default function HeroSection() {
    return (
        <section className="relative h-[800px] md:min-h-screen flex items-center justify-center text-center px-[24px] pt-[40px] md:pt-[112px] pb-[40px] md:pb-[80px] overflow-hidden">

            {/* Fallback ambient glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/20 blur-[80px] -z-10 pointer-events-none" />

            <div className="relative z-10 max-w-[1200px] mx-auto">
                <h1 className="type-hero leading-tight mb-[32px] md:mb-[80px] animate-fade-up">
                    We Build Digital Solutions That Drive Business Growth
                </h1>

                <p className="type-lead max-w-[1200px] mx-auto mb-[40px] md:mb-[80px] animate-fade-up-2">
                    XERON specializes in custom websites, mobile apps, complex systems, and stunning designs.
                </p>

                <div className="flex items-center justify-center gap-[24px] md:gap-[40px] flex-wrap animate-fade-up-3">
                    <Button href="/contact" variant="primary">Start Your Project</Button>
                    <Button href="/portfolio" variant="outline">View Our Work</Button>
                </div>
            </div>
        </section>
    );
}