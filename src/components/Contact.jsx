import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { socialLinks, personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

const contactChannels = [
    {
        icon: FaEnvelope,
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        iconColor: '#EA4335',
        hoverBg: 'hover:bg-red-500/10 hover:border-red-500/30',
        hoverText: 'group-hover:text-red-400',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: 'muhammad-yunus-firdaus',
        href: socialLinks.github,
        iconColor: '#f0f0f0',
        hoverBg: 'hover:bg-gray-500/10 hover:border-gray-400/30',
        hoverText: 'group-hover:text-gray-200',
    },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        value: 'Muhammad Yunus Firdaus',
        href: socialLinks.linkedin,
        iconColor: '#0A66C2',
        hoverBg: 'hover:bg-blue-600/10 hover:border-blue-500/30',
        hoverText: 'group-hover:text-[#0A66C2]',
    },
    {
        icon: FaInstagram,
        label: 'Instagram',
        value: '@mhmmadynss',
        href: socialLinks.instagram,
        iconColor: '#E4405F',
        hoverBg: 'hover:bg-pink-500/10 hover:border-pink-500/30',
        hoverText: 'group-hover:text-pink-400',
    },
];

export default function Contact() {
    const { lang } = useLanguage();
    const t = locales[lang];

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-4xl mx-auto text-center">
                <h2 className="section-title" data-aos="fade-right">
                    {t.contactTitle}
                </h2>

                <p
                    className="text-slate-400 max-w-lg mx-auto mb-12 leading-relaxed"
                    data-aos="fade-left"
                    data-aos-delay="100"
                >
                    {t.contactDescription}
                </p>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {contactChannels.map(({ icon: Icon, label, value, href, iconColor, hoverBg, hoverText }, i) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto:') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={`glass-card rounded-xl p-4 sm:p-6 group transition-all duration-300 text-left ${hoverBg}`}
                            data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                            data-aos-delay={i * 100}
                        >
                            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-transparent group-hover:scale-110 transition-all duration-300 shrink-0">
                                    <Icon
                                        size={20}
                                        className="transition-colors duration-300 sm:text-[24px]"
                                        style={{ color: iconColor }}
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
                                    <p className={`text-white transition-colors duration-300 font-medium mt-0.5 text-sm sm:text-base truncate ${hoverText}`}>
                                        {value}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
