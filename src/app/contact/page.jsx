import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
    title: 'XERON -Contact Us',
    description: 'Let\'s build something great together. Reach out to the XERON team.',
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mt-24 mx-auto">

                <SectionHeader
                    title="Contact Us"
                    subtitle="We Here To Help You Creating Your Idea"
                    centered
                />

                <div className="mt-16 flex flex-col md:flex-row items-start gap-10">

                    {/* Form card — gradient border shell */}
                    <div className="relative flex-[1.4] gradient-border-shell gradient-border-shell--bl rounded-2xl">
                        <div
                            className="rounded-2xl bg-linear-to-br from-purple-950 to-purple-1000"
                            style={{ padding: '40px 56px' }}
                        >
                            <ContactForm />
                        </div>
                    </div>

                    {/* Contact info — no card */}
                    <div className="flex-1 pt-2">
                        <ContactInfo />
                    </div>

                </div>
            </div>
        </div>
    );
}