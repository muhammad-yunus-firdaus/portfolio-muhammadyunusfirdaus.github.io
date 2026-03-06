import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

export default function About() {
    const { lang } = useLanguage();
    const t = locales[lang];

    return (
        <section id="about" className="py-24 px-4 relative">
            {/* Section divider gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-4xl mx-auto">
                <h2 className="section-title" data-aos="fade-right">
                    {t.aboutTitle}
                </h2>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white" data-aos="fade-right">
                        {t.aboutSubtitle}{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {t.aboutHighlight}
                        </span>{' '}
                        {t.aboutSuffix}
                    </h3>

                    <p className="text-slate-300 leading-relaxed" data-aos="fade-left">
                        {t.bioShort}
                    </p>
                    <p className="text-slate-400 leading-relaxed" data-aos="fade-right">
                        {t.bioLong}
                    </p>

                    {/* Personal Info */}
                    <div className="glass-card rounded-xl p-6 mt-6" data-aos="fade-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { key: 'name', value: personalInfo.name },
                                { key: 'faculty', value: personalInfo.faculty },
                                { key: 'university', value: personalInfo.university },
                                { key: 'major', value: personalInfo.major },
                            ].map(({ key, value }) => (
                                <div key={key} className="flex items-center gap-3">
                                    <span className="text-slate-500 text-sm w-24 shrink-0">
                                        {t.aboutLabels[key]}
                                    </span>
                                    <span className="text-white text-sm">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
