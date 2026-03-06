import React from 'react';
import { FaNetworkWired, FaLaptop, FaTools, FaDesktop, FaUsers, FaPodcast, FaCamera, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

/* ─── Work Experience ─── */
const workExperience = [
    {
        icon: FaNetworkWired,
        titleId: 'IT Support',
        titleEn: 'IT Support',
        company: 'The Lodge Maribaya, Lembang',
        period: 'Feb 2021 - Apr 2021',
        pointsId: [
            'Mengelola dan instalasi infrastruktur jaringan LAN termasuk crimping dan penarikan kabel',
            'Konfigurasi dan optimasi perangkat WiFi dan Router',
            'Maintenance dan troubleshooting perangkat komputer, laptop, dan printer',
            'Backup data berkala untuk keamanan informasi perusahaan',
        ],
        pointsEn: [
            'Managed and installed LAN network infrastructure including crimping and cable pulling',
            'Configured and optimized WiFi and Router devices',
            'Performed maintenance and troubleshooting on computers, laptops, and printers',
            'Conducted regular data backups to ensure company information security',
        ],
    },
    {
        icon: FaLaptop,
        titleId: 'Freelance Teknisi Laptop',
        titleEn: 'Freelance Laptop Technician',
        company: 'Self-employed',
        period: '2022 - 2023',
        pointsId: [
            'Perbaikan hardware laptop berbagai merk',
            'Penggantian komponen seperti LCD, keyboard, dan baterai',
        ],
        pointsEn: [
            'Repaired laptop hardware for various brands',
            'Replaced components such as LCD screens, keyboards, and batteries',
        ],
    },
    {
        icon: FaTools,
        titleId: 'Freelance Perbaikan Komputer',
        titleEn: 'Freelance Computer Repair',
        company: 'Self-employed',
        period: '2023',
        pointsId: [
            'Diagnosa dan perbaikan kerusakan PC',
            'Instalasi ulang sistem operasi dan optimasi performa',
        ],
        pointsEn: [
            'Diagnosed and repaired PC issues',
            'Performed OS reinstallation and performance optimization',
        ],
    },
    {
        icon: FaDesktop,
        titleId: 'Freelance IT Service',
        titleEn: 'Freelance IT Service',
        company: 'Self-employed',
        period: '2024',
        pointsId: [
            'Layanan IT on-site meliputi setup jaringan dan instalasi software',
            'Perawatan dan troubleshooting perangkat',
        ],
        pointsEn: [
            'Provided on-site IT services including network setup and software installation',
            'Device maintenance and troubleshooting',
        ],
    },
];

/* ─── Organizational Experience ─── */
const orgExperience = [
    {
        icon: FaUsers,
        titleId: 'Anggota HIMATIF',
        titleEn: 'HIMATIF Member',
        company: 'Himpunan Mahasiswa Teknik Informatika',
        period: 'Mar 2021 - Sekarang',
        pointsId: [
            'Berkontribusi aktif dalam program kerja himpunan dan terlibat dalam kepanitiaan acara internal kampus',
        ],
        pointsEn: [
            'Actively contributed to organization programs and participated in campus event committees',
        ],
    },
    {
        icon: FaTrophy,
        titleId: 'Leader MIPS 2024',
        titleEn: 'Leader MIPS 2024',
        company: 'HIMATIF',
        period: '2024',
        pointsId: [
            'Memimpin dan mengkoordinasi kegiatan MIPS 2024',
        ],
        pointsEn: [
            'Led and coordinated MIPS 2024 activities',
        ],
    },
    {
        icon: FaPodcast,
        titleId: 'Divisi Media Kreatif',
        titleEn: 'Creative Media Division',
        company: 'Kegiatan Ramadhan 1445 H — STMIK Amik Bandung',
        period: '18 Mar 2024',
        pointsId: [
            'Merancang konsep dan ide untuk program "Ramadhan Podcast"',
            'Menyusun naskah dan daftar pertanyaan wawancara untuk narasumber',
            'Eksekusi teknis perekaman audio dan video',
        ],
        pointsEn: [
            'Designed concepts and ideas for the "Ramadhan Podcast" program',
            'Prepared interview scripts and question lists for speakers',
            'Handled technical execution of audio and video recording',
        ],
    },
    {
        icon: FaCamera,
        titleId: 'Divisi PDD',
        titleEn: 'PDD Division',
        company: 'Seminar "Riding The Waves Of Cyber Space"',
        period: '27 Apr 2024',
        pointsId: [
            'Merancang desain poster, banner, dan sertifikat untuk kebutuhan acara',
            'Bertanggung jawab penuh atas dokumentasi selama acara berlangsung',
        ],
        pointsEn: [
            'Designed posters, banners, and certificates for the event',
            'Fully responsible for documentation during the event',
        ],
    },
];

/* ─── Timeline Column Component ─── */
function TimelineColumn({ items, lang }) {
    return (
        <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-5">
                {items.map((exp, i) => {
                    const Icon = exp.icon;
                    const points = lang === 'id' ? exp.pointsId : exp.pointsEn;
                    return (
                        <div key={i} className="relative pl-12" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="absolute left-1.5 w-6 h-6 rounded-full bg-[#0a0f1c] border-2 border-blue-500/40 flex items-center justify-center">
                                <Icon className="text-blue-400 text-[10px]" />
                            </div>
                            <div className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition-colors duration-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                                    <h3 className="text-sm font-semibold text-white">
                                        {lang === 'id' ? exp.titleId : exp.titleEn}
                                    </h3>
                                    <span className="text-[11px] text-blue-400/70 font-medium shrink-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-500 mb-2">{exp.company}</p>
                                <ul className="list-disc list-outside pl-4 space-y-0.5">
                                    {points.map((point, j) => (
                                        <li key={j} className="text-xs text-slate-400 leading-relaxed pl-1">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ─── Main Section ─── */
export default function Experience() {
    const { lang } = useLanguage();
    const t = locales[lang];

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <h2 className="section-title" data-aos="fade-right">
                    {t.experienceTitle}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left — Work Experience */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2" data-aos="fade-right">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            {t.workExpLabel}
                        </h3>
                        <TimelineColumn items={workExperience} lang={lang} />
                    </div>

                    {/* Right — Organizational Experience */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2" data-aos="fade-left">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            {t.orgExpLabel}
                        </h3>
                        <TimelineColumn items={orgExperience} lang={lang} />
                    </div>
                </div>
            </div>
        </section>
    );
}
