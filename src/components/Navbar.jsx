import React, { useState, useEffect, useCallback } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

const navItems = ['home', 'about', 'experience', 'skills', 'certificates', 'projects', 'contact'];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { lang, toggleLang } = useLanguage();
    const t = locales[lang];

    /* ─── Scroll spy: track which section is in view ─── */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 120;
            for (let i = navItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(navItems[i]);
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(navItems[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ─── Native smooth scroll ─── */
    const scrollTo = useCallback((id) => {
        const el = document.getElementById(id);
        if (el) {
            const top = el.offsetTop - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        setIsOpen(false);
    }, []);

    return (
        <header className="fixed top-0 w-full bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/5 z-50">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <button
                    onClick={() => scrollTo('home')}
                    className="cursor-pointer bg-transparent border-none flex items-center"
                >
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-12 h-12 object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                </button>

                {/* Desktop Nav + Lang Toggle */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((sec) => (
                        <button
                            key={sec}
                            onClick={() => scrollTo(sec)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 bg-transparent border-none ${activeSection === sec
                                ? 'text-blue-400 bg-blue-500/10'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {t.navLabels[sec]}
                        </button>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLang}
                        className="ml-2 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all duration-300 bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-blue-500/10 text-slate-300 hover:text-white"
                        aria-label="Toggle language"
                    >
                        {lang === 'id' ? 'EN' : 'ID'}
                    </button>
                </div>

                {/* Mobile: Lang Toggle + Menu */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleLang}
                        className="px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all duration-300 bg-white/5 border border-white/10 text-slate-300"
                        aria-label="Toggle language"
                    >
                        {lang === 'id' ? 'EN' : 'ID'}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white/80 hover:text-white transition-colors p-2 bg-transparent border-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pb-4 space-y-1 bg-[#0a0f1c]/95 backdrop-blur-xl">
                    {navItems.map((sec) => (
                        <button
                            key={sec}
                            onClick={() => scrollTo(sec)}
                            className={`block w-full text-left px-4 py-3 rounded-lg cursor-pointer transition-all bg-transparent border-none ${activeSection === sec
                                ? 'text-blue-400 bg-blue-500/10'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {t.navLabels[sec]}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
