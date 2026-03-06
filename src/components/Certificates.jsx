import React, { useState, useEffect } from 'react';
import { certificates } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

/* ─── Lightbox Modal ─── */
function Lightbox({ image, title, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="relative max-w-3xl w-[90%] max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white/70 hover:text-white text-xl cursor-pointer bg-transparent border-none"
                    aria-label="Close"
                >
                    ✕
                </button>
                <img
                    src={`/certificates/${image}`}
                    alt={title}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                />
                <p className="text-center text-white/60 text-sm mt-3">{title}</p>
            </div>
        </div>
    );
}

/* ─── Certificate Card ─── */
function CertificateCard({ image, title, year, issuer, onView, viewText }) {
    return (
        <div
            className="glass-card rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full cursor-pointer"
            onClick={() => onView(image, title)}
        >
            <div className="relative pt-[56.25%] w-full overflow-hidden">
                <img
                    src={`/certificates/${image}`}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/300/200';
                    }}
                />
                {/* View overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium bg-blue-500/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                        {viewText}
                    </span>
                </div>
            </div>
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-sm font-semibold mb-1.5 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                </h3>
                <div className="mt-auto flex items-center justify-between text-xs">
                    <span className="text-slate-400">{issuer}</span>
                    <span className="text-blue-400/70 font-medium">{year}</span>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Section ─── */
export default function Certificates() {
    const [lightbox, setLightbox] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const { lang } = useLanguage();
    const t = locales[lang];

    const openLightbox = (image, title) => setLightbox({ image, title });
    const closeLightbox = () => setLightbox(null);

    const filters = [
        { key: 'all', label: t.certFilterAll },
        { key: 'bootcamp', label: t.certFilterBootcamp },
        { key: 'kursus', label: t.certFilterKursus },
        { key: 'seminar', label: t.certFilterSeminar },
        { key: 'kepanitiaan', label: t.certFilterKepanitiaan },
    ];

    const filteredCertificates = activeFilter === 'all'
        ? certificates
        : certificates.filter(cert => cert.category === activeFilter);

    return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <h2 className="section-title" data-aos="fade-right">
                    {t.certificatesTitle}
                </h2>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${
                                activeFilter === filter.key
                                    ? 'bg-blue-500 text-white border-blue-500'
                                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredCertificates.map((cert, i) => (
                        <div
                            key={cert.title}
                            data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                            data-aos-delay={i * 80}
                            className="h-full"
                        >
                            <CertificateCard
                                {...cert}
                                onView={openLightbox}
                                viewText={t.viewCertificate}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <Lightbox
                    image={lightbox.image}
                    title={lightbox.title}
                    onClose={closeLightbox}
                />
            )}
        </section>
    );
}
