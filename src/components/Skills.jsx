import React from 'react';
import { FaPython } from 'react-icons/fa';
import { skills, iconMap } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

function PythonIcon() {
    return (
        <div className="text-4xl relative">
            <FaPython className="text-[#306998]" />
            <div className="absolute inset-0 top-1/2 overflow-hidden">
                <FaPython className="text-[#FFD43B] transform -translate-y-1/2" />
            </div>
        </div>
    );
}

export default function Skills() {
    const { lang } = useLanguage();
    const t = locales[lang];

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <h2 className="section-title" data-aos="fade-left">
                    {t.skillsTitle}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {skills.map((skill, i) => {
                        const IconComp = iconMap[skill.iconName];
                        return (
                            <div
                                key={skill.name}
                                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                                data-aos-delay={i * 60}
                                className="glass-card rounded-xl p-6 text-center group hover:border-blue-500/30 cursor-default transition-all duration-300"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    {skill.isPython ? (
                                        <PythonIcon />
                                    ) : (
                                        <div
                                            className="text-4xl transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: skill.color }}
                                        >
                                            {IconComp && <IconComp />}
                                        </div>
                                    )}
                                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
