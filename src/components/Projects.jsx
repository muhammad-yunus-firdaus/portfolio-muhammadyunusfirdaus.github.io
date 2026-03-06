import React, { useState, useEffect, useCallback } from 'react';
import { FaGithub, FaImages, FaChevronLeft, FaChevronRight, FaInfoCircle, FaCalendarAlt, FaBookOpen, FaUsers } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

/* ─── Preview Modal (Lightbox with carousel) ─── */
function PreviewModal({ images, previewSets, title, onClose, lang }) {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');
    const [activeRole, setActiveRole] = useState(0);

    // Determine which images to show
    const hasMultipleRoles = previewSets && previewSets.length > 0;
    const currentImages = hasMultipleRoles ? previewSets[activeRole].images : images;

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setSlideDirection('slide-left');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent((p) => (p + 1) % currentImages.length);
            setSlideDirection('slide-in-right');
            setTimeout(() => {
                setIsAnimating(false);
                setSlideDirection('');
            }, 200);
        }, 150);
    }, [isAnimating, currentImages.length]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setSlideDirection('slide-right');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent((p) => (p - 1 + currentImages.length) % currentImages.length);
            setSlideDirection('slide-in-left');
            setTimeout(() => {
                setIsAnimating(false);
                setSlideDirection('');
            }, 200);
        }, 150);
    }, [isAnimating, currentImages.length]);

    useEffect(() => {
        const handleKey = (e) => {
            if (isAnimating) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, isAnimating, handleNext, handlePrev]);

    // Reset to first image when switching roles
    const handleRoleSwitch = (index) => {
        if (index !== activeRole) {
            setActiveRole(index);
            setCurrent(0);
        }
    };

    const getSlideClass = () => {
        switch (slideDirection) {
            case 'slide-left': return 'translate-x-[-30px] opacity-0';
            case 'slide-right': return 'translate-x-[30px] opacity-0';
            case 'slide-in-right': return 'translate-x-0 opacity-100';
            case 'slide-in-left': return 'translate-x-0 opacity-100';
            default: return 'translate-x-0 opacity-100';
        }
    };

    return (
        <div
            className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/90"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-[90%] max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white/70 hover:text-white text-xl cursor-pointer bg-transparent border-none"
                    aria-label="Close"
                >
                    ✕
                </button>

                {/* Role Tabs */}
                {hasMultipleRoles && (
                    <div className="flex justify-center gap-2 mb-3 -mt-2">
                        {previewSets.map((set, index) => {
                            const roleName = lang === 'id' ? set.roleId : set.roleEn;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleRoleSwitch(index)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                                        activeRole === index
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white'
                                    }`}
                                >
                                    {roleName}
                                </button>
                            );
                        })}
                    </div>
                )}

                <img
                    src={currentImages[current]}
                    alt={`${title} preview ${current + 1}`}
                    className={`w-full h-auto max-h-[75vh] object-contain rounded-xl transition-all duration-200 ease-out ${getSlideClass()}`}
                />
                {currentImages.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all cursor-pointer border-none"
                            aria-label="Previous"
                        >
                            <FaChevronLeft size={16} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all cursor-pointer border-none"
                            aria-label="Next"
                        >
                            <FaChevronRight size={16} />
                        </button>
                    </>
                )}
                <div className="text-center mt-3 flex items-center justify-center gap-3">
                    <p className="text-white/60 text-sm">
                        {title}
                        {hasMultipleRoles && (
                            <span className="text-blue-400 ml-2">
                                ({lang === 'id' ? previewSets[activeRole].roleId : previewSets[activeRole].roleEn})
                            </span>
                        )}
                    </p>
                    {currentImages.length > 1 && (
                        <span className="text-white/40 text-xs">
                            {current + 1} / {currentImages.length}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Detail Modal ─── */
function DetailModal({ project, onClose, onPreview, lang }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    const title = lang === 'id' ? project.titleId : project.titleEn;
    const shortDesc = lang === 'id' ? project.shortDescId : project.shortDescEn;
    const course = lang === 'id' ? project.courseId : project.courseEn;
    const type = lang === 'id' ? project.typeId : project.typeEn;
    const features = lang === 'id' ? project.featuresId : project.featuresEn;
    const previewImages = project.previewImages?.length > 0 ? project.previewImages : [project.image];
    const previewSets = project.previewSets || [];
    const hasMultipleRoles = previewSets.length > 0;

    return (
        <div
            className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/90 animate-fadeIn p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center cursor-pointer border-none transition-colors"
                    aria-label="Close"
                >
                    ✕
                </button>

                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/api/placeholder/600/300';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-12">
                        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                    {/* Meta badges */}
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <FaCalendarAlt size={10} />
                            {project.semester} — {project.year}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            <FaBookOpen size={10} />
                            {course}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            <FaUsers size={10} />
                            {type}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                        {shortDesc}
                    </p>

                    {/* Features */}
                    {features && features.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-2">
                                {lang === 'id' ? 'Fitur Utama' : 'Key Features'}
                            </h4>
                            <ul className="list-disc list-outside pl-4 space-y-1">
                                {features.map((feat, i) => (
                                    <li key={i} className="text-sm text-slate-400 leading-relaxed pl-1">
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-2">
                            {lang === 'id' ? 'Teknologi' : 'Technologies'}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                        <button
                            onClick={() => { onClose(); onPreview(previewImages, title, hasMultipleRoles ? previewSets : null); }}
                            className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <FaImages size={14} /> {lang === 'id' ? 'Preview' : 'Preview'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Project Card ─── */
function ProjectCard({ project, onPreview, onDetail, previewText, lang }) {
    const { image, technologies = [], previewImages = [], previewSets = [], demoLink } = project;
    const title = lang === 'id' ? project.titleId : project.titleEn;
    const shortDesc = lang === 'id' ? project.shortDescId : project.shortDescEn;
    // Gunakan image sebagai fallback jika tidak ada previewImages
    const imagesToPreview = previewImages.length > 0 ? previewImages : [image];
    const hasMultipleRoles = previewSets && previewSets.length > 0;

    return (
        <div
            className="glass-card rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full cursor-pointer"
            onClick={() => onDetail(project)}
        >
            {/* Image */}
            <div className="relative pt-[50%] w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/300/200';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                {/* Detail hint icon */}
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaInfoCircle className="text-white/70 text-xs" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-base font-semibold mb-1.5 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-slate-400 text-xs mb-3 flex-grow leading-relaxed line-clamp-2">
                    {shortDesc}
                </p>

                {/* Tech Tags */}
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 text-white transition-all duration-300 flex items-center justify-center gap-1.5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {lang === 'id' ? 'Coba Sekarang' : 'Try Now'}
                        </a>
                    )}

                    <button
                        onClick={(e) => { e.stopPropagation(); onPreview(imagesToPreview, title, hasMultipleRoles ? previewSets : null); }}
                        className={`text-center py-2 rounded-lg text-xs font-medium border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${demoLink ? 'flex-1' : 'w-full'}`}
                    >
                        <FaImages size={10} /> {previewText}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Section ─── */
export default function Projects() {
    const [preview, setPreview] = useState(null);
    const [detail, setDetail] = useState(null);
    const { lang } = useLanguage();
    const t = locales[lang];

    const openPreview = (images, title, previewSets = null) => setPreview({ images, title, previewSets });
    const closePreview = () => setPreview(null);
    const openDetail = (project) => setDetail(project);
    const closeDetail = () => setDetail(null);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-5xl mx-auto">
                <h2 className="section-title" data-aos="fade-left">
                    {t.projectsTitle}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((proj, i) => (
                        <div
                            key={proj.titleId}
                            data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                            data-aos-delay={i * 80}
                            className="h-full"
                        >
                            <ProjectCard
                                project={proj}
                                onPreview={openPreview}
                                onDetail={openDetail}
                                lang={lang}
                                previewText={t.previewText}
                            />
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="text-center mt-10" data-aos="fade-up">
                    <a
                        href="https://github.com/Yunusss7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300"
                    >
                        <FaGithub size={16} />
                        <span>{t.viewMore}</span>
                    </a>
                </div>
            </div>

            {/* Preview Modal */}
            {preview && (
                <PreviewModal
                    images={preview.images}
                    previewSets={preview.previewSets}
                    title={preview.title}
                    onClose={closePreview}
                    lang={lang}
                />
            )}

            {/* Detail Modal */}
            {detail && (
                <DetailModal
                    project={detail}
                    onClose={closeDetail}
                    onPreview={openPreview}
                    lang={lang}
                />
            )}
        </section>
    );
}
