'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants.js';

const navLinks = NAV_LINKS;

const socials = [
    { icon: 'mynaui:facebook', href: '#', label: 'Facebook' },
    { icon: 'mynaui:instagram', href: '#', label: 'Instagram' },
    { icon: 'mynaui:x-twitter', href: '#', label: 'X' },
    { icon: 'mynaui:linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'mynaui:github', href: '#', label: 'Github' },
];

// ─── Gradient Icon ─────────────────────────────
function GradientBorderIcon({ icon, href, label }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="opacity-50 relative inline-flex rounded-full p-[1.5px] bg-linear-to-br from-purple-200/50 via-purple-50/50 to-purple-500/50 hover:opacity-100 transition-all duration-200 hover:-translate-y-0.5"
        >
            <span className="w-6 h-6 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-purple-1000 relative">
                <span className="absolute inset-0 rounded-full bg-purple-50/10" />
                <Icon icon={icon} className="w-3 h-3 md:w-5 md:h-5 text-content-primary relative z-10" aria-hidden />
            </span>
        </a>
    );
}

// ─── Footer ─────────────────────────────
export default function Footer() {
    return (
        <footer className="pt-12 md:pt-16 pb-6 md:pb-8">
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center mb-8 md:mb-10 opacity-80">
                    <Image src="/Logo.svg" alt="Xeron Logo" width={80} height={60} className="md:w-[120px] md:h-auto" />
                </Link>

                {/* Nav */}
                <nav className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="type-footer-link hover:text-white hover:font-semibold transition-all duration-200 hover:-translate-y-0.5"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Socials */}
                <div className="flex gap-3 md:gap-4 mb-8 md:mb-10">
                    {socials.map((s) => (
                        <GradientBorderIcon key={s.label} {...s} />
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full max-w-md md:max-w-none h-[0.5px] bg-purple-50/40 mb-4 md:mb-5" />

                {/* Copyright */}
                <p className="type-footer-legal text-center leading-relaxed">
                    © 2026 XERON. All rights reserved. Built with passion for the brands that dare to grow.
                </p>

            </div>
        </footer>
    );
}