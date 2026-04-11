import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const borderShellClass =
    'relative flex-[1.4] gradient-border-shell gradient-border-shell--bl rounded-2xl';
const innerCardClass = 'rounded-2xl bg-gradient-to-br from-purple-950 to-purple-1000 px-[40px] py-[56px]';

export default function ContactSection() {
    return (
        <section className="py-24 px-6" id="contact">
            <div className="max-w-7xl mx-auto overflow-hidden">

                <SectionHeader
                    title="Contact Us"
                    subtitle="We Here To Help You Creating Your Idea"
                    centered
                />

                <div className="mt-16 flex flex-col md:flex-row items-start gap-10">

                    {/* Left — form card */}
                    <div className={borderShellClass}>
                        <div className={innerCardClass}>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Right — contact info */}
                    <div className="flex-1 pt-2">
                        <ContactInfo />
                    </div>

                </div>
            </div>
        </section>
    );
}