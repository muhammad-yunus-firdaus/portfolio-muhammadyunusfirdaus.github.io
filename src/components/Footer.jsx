import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

const footerSocials = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
];

export default function Footer() {
    const { lang } = useLanguage();
    const t = locales[lang];

    return (
        <footer className="relative border-t border-white/5 bg-[#060a14]">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col items-center gap-6">
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {footerSocials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300"
                            >
                                <Icon
                                    size={18}
                                    className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-slate-600">
                        &copy; {new Date().getFullYear()} {t.footerCopyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
