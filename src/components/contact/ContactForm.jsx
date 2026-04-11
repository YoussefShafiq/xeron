'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { BASE_URL } from '@/lib/constants';

const serviceTypes = [
    { label: 'Web', value: 'web-development' },
    { label: 'Mobile', value: 'mobile-app-development' },
    { label: 'Design', value: 'design' },
    { label: 'Others', value: 'others' },
];

// ─── Gradient-border input wrapper ───────────────────────────────────────────
function GradientField({ children, focused }) {
    return (
        <div
            className={`gradient-border-shell gradient-border-shell--bl rounded-lg transition-opacity duration-200
                ${focused ? 'opacity-100' : 'opacity-60'}`}
        >
            {children}
        </div>
    );
}

function GradientInput({ className = '', ...props }) {
    const [focused, setFocused] = useState(false);
    return (
        <GradientField focused={focused}>
            <input
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`type-ui w-full bg-purple-975 rounded-[7px] px-4 py-3
                    text-content-primary placeholder:text-content-muted
                    outline-none transition-colors duration-200 ${className}`}
            />
        </GradientField>
    );
}

function GradientTextarea({ className = '', ...props }) {
    const [focused, setFocused] = useState(false);
    return (
        <GradientField focused={focused}>
            <textarea
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`type-ui w-full bg-purple-975 rounded-[8px] px-4 py-4
                    text-content-primary placeholder:text-content-muted
                    outline-none resize-y transition-colors duration-200 ${className}`}
            />
        </GradientField>
    );
}

function RadioButton({ label, checked, onChange }) {
    return (
        <label className="type-ui flex cursor-pointer items-center gap-2 text-content-secondary">
            <input
                type="radio"
                name="serviceType"
                value={label}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            <span
                className={`relative w-6 h-6 rounded-full shrink-0 gradient-border-shell gradient-border-shell--bl
                    transition-opacity duration-200
                    ${checked ? 'opacity-100' : 'opacity-40'}`}
            >
                <span className="w-full h-full rounded-full bg-purple-975 flex items-center justify-center">
                    {checked && (
                        <span className="w-2.5 h-2.5 rounded-full bg-linear-to-bl from-purple-200 via-purple-50 to-purple-500" />
                    )}
                </span>
            </span>

            {label}
        </label>
    );
}

function buildPhone(prefix, number) {
    const p = prefix?.trim() ?? '';
    const n = number?.trim() ?? '';
    if (!p && !n) return '';
    if (!p) return n;
    if (!n) return p;
    return `${p} ${n}`;
}

export default function ContactForm() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phonePrefix, setPhonePrefix] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [serviceType, setServiceType] = useState(serviceTypes[0].value);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle');
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setFeedback(null);

        const body = {
            name: name.trim(),
            company: company.trim(),
            email: email.trim(),
            phone: buildPhone(phonePrefix, phoneNumber),
            serviceType,
            message: message.trim(),
        };

        try {
            const res = await fetch(`${BASE_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                const text = await res.text();
                let detail = `Request failed (${res.status})`;
                try {
                    const json = JSON.parse(text);
                    detail = json.message ?? json.error ?? detail;
                } catch {
                    if (text) detail = text.slice(0, 200);
                }
                throw new Error(detail);
            }

            setStatus('success');
            setFeedback('Thanks — we received your message and will get back to you soon.');
            setName('');
            setCompany('');
            setEmail('');
            setPhonePrefix('');
            setPhoneNumber('');
            setServiceType(serviceTypes[0].value);
            setMessage('');
        } catch (err) {
            setStatus('error');
            setFeedback('Something went wrong. Please try again.');
        }
    };

    const submitting = status === 'submitting';

    return (
        <form className="flex flex-col gap-4 md:gap-8" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-6 md:mb-12 mt-0 md:mt-4">
                <img src="/Logo.svg" alt="Xeron" className="h-6 md:h-9 w-auto" />
            </div>

            <div className="flex gap-6">
                <div className="flex flex-col gap-4 flex-1">
                    <label htmlFor="contact-name" className="type-form-label">
                        Name
                    </label>
                    <GradientInput
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Youssef"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <label htmlFor="contact-company" className="type-form-label">
                        Company
                    </label>
                    <GradientInput
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Xeron"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <label htmlFor="contact-email" className="type-form-label">
                    Email
                </label>
                <GradientInput
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-4">
                <label className="type-form-label">Phone number</label>
                <div className="flex gap-6">
                    <div className="flex flex-col gap-4 w-15">
                        <GradientInput
                            type="text"
                            name="phonePrefix"
                            autoComplete="tel-country-code"
                            placeholder="+20"
                            value={phonePrefix}
                            onChange={(e) => setPhonePrefix(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                        <GradientInput
                            type="tel"
                            name="phoneNumber"
                            autoComplete="tel-national"
                            placeholder="1063361951"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <label className="type-form-label">Service Type</label>
                <div className="flex flex-wrap gap-5">
                    {serviceTypes.map(({ label, value }) => (
                        <RadioButton
                            key={value}
                            label={label}
                            checked={serviceType === value}
                            onChange={() => setServiceType(value)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <label htmlFor="contact-message" className="type-form-label">
                    Project brief
                </label>
                <GradientTextarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Type your message here..."
                    rows={4}
                    className="min-h-[100px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            {feedback && (
                <p
                    role="status"
                    className={`type-body ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
                >
                    {feedback}
                </p>
            )}

            <div>
                <Button type="submit" variant="primary" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send message →'}
                </Button>
            </div>
        </form>
    );
}
