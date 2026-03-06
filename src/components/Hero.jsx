import React, { useRef, useCallback } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

export default function Hero() {
    const cardRef = useRef(null);
    const { lang } = useLanguage();
    const t = locales[lang];

    /* ─── 3D Tilt on mouse move ─── */
    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current;
        if (card) {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
                {/* Text Area */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <div className="space-y-3">
                        <p className="text-blue-400 font-medium tracking-wider uppercase text-sm" data-aos="fade-right" data-aos-delay="0">
                            {t.heroWelcome}
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight" data-aos="fade-right" data-aos-delay="100">
                            <span className="text-white">{t.heroGreeting}</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Muhammad Yunus Firdaus
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 font-medium" data-aos="fade-right" data-aos-delay="200">
                            {personalInfo.role}
                        </p>
                    </div>

                    <p className="text-slate-400 max-w-lg leading-relaxed text-base" data-aos="fade-right" data-aos-delay="300">
                        {t.bioShort}
                    </p>
                </div>

                {/* Profile Image — 3D Tilt, gradient bg behind */}
                <div className="flex-1 flex justify-center" data-aos="fade-left" data-aos-delay="100">
                    <div className="relative">
                        {/* Animated gradient background */}
                        <div className="absolute -inset-8 rounded-3xl overflow-hidden pointer-events-none">
                            <div className="absolute inset-0 animate-spin-slow">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/40 via-transparent to-cyan-500/40 rounded-full blur-2xl" />
                            </div>
                            <div className="absolute inset-0 animate-spin-reverse">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500/30 via-transparent to-blue-400/30 rounded-full blur-2xl" />
                            </div>
                        </div>

                        {/* Tilt container */}
                        <div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <img
                                ref={cardRef}
                                src={`${process.env.PUBLIC_URL}/profile.JPG`}
                                alt="Muhammad Yunus Firdaus"
                                className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl object-cover shadow-xl transition-transform duration-200 ease-out will-change-transform"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
