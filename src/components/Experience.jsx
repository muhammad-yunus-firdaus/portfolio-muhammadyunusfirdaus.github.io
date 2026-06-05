import React from 'react';
import { FaNetworkWired, FaLaptop, FaMobileAlt, FaKeyboard, FaHdd, FaUsers, FaPodcast, FaCamera, FaTrophy, FaTools } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import locales from '../data/locales';

/* ─── Work Experience ─── */
const workExperience = [
    {
        icon: FaNetworkWired,
        titleId: 'IT Support Intern',
        titleEn: 'IT Support Intern',
        companyId: 'The Lodge Maribaya Lembang',
        companyEn: 'The Lodge Maribaya Lembang',
        period: 'Apr 2022 - Aug 2022',
        pointsId: [
            'Mengelola instalasi infrastruktur jaringan lokal (LAN), crimping, dan penarikan kabel',
            'Melakukan konfigurasi dan optimasi perangkat WIFI dan Router',
            'Maintenance dan troubleshooting rutin pada perangkat komputer, laptop, dan printer',
            'Bertanggung jawab atas backup data berkala untuk integritas informasi perusahaan',
        ],
        pointsEn: [
            'Managed local network infrastructure (LAN) installation, crimping, and cable pulling',
            'Configured and optimized WIFI and Router devices',
            'Performed routine maintenance and troubleshooting on computers, laptops, and printers',
            'Responsible for regular data backups to ensure company information integrity',
        ],
    },
    {
        icon: FaTools,
        titleId: 'Teknisi Hardware & Sistem (Freelance)',
        titleEn: 'Hardware & System Technician (Freelance)',
        companyId: 'Pekerjaan Lepas / Mandiri',
        companyEn: 'Freelance / Self-employed',
        period: 'Des 2022 - Feb 2026',
        isGrouped: true,
        projects: [
            {
                id: 'mobile-redmi',
                icon: FaMobileAlt,
                nameId: 'Redmi Note 7',
                nameEn: 'Redmi Note 7',
                titleId: 'Perbaikan Hardware Mobile (Redmi Note 7)',
                titleEn: 'Mobile Hardware Repair (Redmi Note 7)',
                period: '04 Feb 2026',
                pointsId: [
                    'Melakukan penggantian unit baterai baru pada perangkat Redmi Note 7 untuk mengatasi kondisi baterai yang sudah drop',
                    'Mengecek ulang sistem pengisian daya (charging) setelah penggantian baterai untuk memastikan baterai terisi dengan stabil dan aman',
                ],
                pointsEn: [
                    'Replaced the battery unit on Redmi Note 7 device to resolve depleted battery condition',
                    'Re-checked the charging system after battery replacement to ensure stable and safe charging',
                ],
            },
            {
                id: 'laptop-asus-a456',
                icon: FaLaptop,
                nameId: 'Asus A456U',
                nameEn: 'Asus A456U',
                titleId: 'Pemeliharaan Hardware Laptop (Asus A456U)',
                titleEn: 'Laptop Hardware Maintenance (Asus A456U)',
                period: '31 Jan 2026',
                pointsId: [
                    'Mengganti keyboard laptop Asus A456 U yang sudah rusak dengan unit baru yang sesuai agar berfungsi kembali',
                    'Membersihkan debu di bagian dalam laptop dan mengganti pasta prosesor (re-pasting) supaya suhu laptop tetap stabil',
                ],
                pointsEn: [
                    'Replaced the damaged keyboard on Asus A456 U laptop with a compatible new unit to restore functionality',
                    'Cleaned internal dust and replaced thermal paste (re-pasting) to maintain stable laptop temperature',
                ],
            },
            {
                id: 'laptop-asus-x441',
                icon: FaKeyboard,
                nameId: 'Asus X441M',
                nameEn: 'Asus X441M',
                titleId: 'Servis & Penggantian Keyboard (Asus X441M)',
                titleEn: 'Keyboard Service & Replacement (Asus X441M)',
                period: '27 Nov 2025',
                pointsId: [
                    'Mengganti keyboard laptop Asus X441M yang sudah rusak dengan unit baru yang sesuai agar berfungsi kembali',
                    'Membersihkan area motherboard dan kipas agar sirkulasi udara kembali lancar dan suhu laptop tidak cepat panas',
                ],
                pointsEn: [
                    'Replaced the damaged keyboard on Asus X441M laptop with a compatible new unit to restore functionality',
                    'Cleaned motherboard area and fan to restore proper airflow and prevent laptop overheating',
                ],
            },
            {
                id: 'phone-oppo',
                icon: FaMobileAlt,
                nameId: 'Oppo LCD',
                nameEn: 'Oppo LCD',
                titleId: 'Perbaikan LCD Smartphone (Oppo)',
                titleEn: 'Smartphone LCD Repair (Oppo)',
                period: '21 Aug 2025',
                pointsId: [
                    'Membongkar smartphone untuk melepas layar LCD Handphone Oppo yang sudah pecah atau rusak',
                    'Memasang unit LCD baru yang sesuai agar layar bisa digunakan kembali dengan normal',
                ],
                pointsEn: [
                    'Disassembled smartphone to remove the cracked or damaged LCD screen on Oppo device',
                    'Installed a compatible new LCD unit to restore normal screen functionality',
                ],
            },
            {
                id: 'laptop-upgrade',
                icon: FaHdd,
                nameId: 'Upgrade SSD',
                nameEn: 'SSD Upgrade',
                titleId: 'Servis & Upgrade Laptop',
                titleEn: 'Laptop Service & Upgrade',
                period: '25 Dec 2022',
                pointsId: [
                    'Upgrade penyimpanan dari HDD ke SSD serta instalasi sistem operasi Windows',
                    'Membersihkan debu pada bagian dalam laptop agar sirkulasi udara bagus dan suhu perangkat tidak cepat panas',
                    'Mengganti baterai laptop yang sudah drop dengan unit baru supaya perangkat bisa digunakan kembali dengan awet',
                ],
                pointsEn: [
                    'Upgraded storage from HDD to SSD and installed Windows operating system',
                    'Cleaned internal dust to improve airflow and prevent device overheating',
                    'Replaced depleted laptop battery with a new unit to extend device usability',
                ],
            },
        ],
    },
];

/* ─── Organizational Experience ─── */
const orgExperience = [
    {
        icon: FaUsers,
        titleId: 'Anggota HIMATIF',
        titleEn: 'HIMATIF Member',
        companyId: 'Himpunan Mahasiswa Teknik Informatika | Divisi Minat & Bakat',
        companyEn: 'Informatics Engineering Student Association | Interest & Talent Division',
        period: 'Dec 2023 - Apr 2025',
        pointsId: [
            'Mengelola jadwal kegiatan olahraga anggota',
            'Berkontribusi aktif dalam program kerja dan kepanitiaan acara internal kampus',
        ],
        pointsEn: [
            'Managed sports activity schedules for members',
            'Actively contributed to work programs and internal campus event committees',
        ],
    },
    {
        icon: FaCamera,
        titleId: 'Divisi PDD',
        titleEn: 'PDD Division',
        companyId: 'Seminar "Riding The Waves Of Cyber Space"',
        companyEn: 'Seminar on "Riding The Waves of Cyber Space"',
        period: '27 Apr 2024',
        tagId: 'Kepanitiaan',
        tagEn: 'Committee',
        pointsId: [
            'Merancang desain poster, banner, dan sertifikat untuk kebutuhan acara',
            'Bertanggung jawab penuh atas dokumentasi selama acara berlangsung',
        ],
        pointsEn: [
            'Designed posters, banners, and certificates for the event',
            'Fully responsible for documentation during the event',
        ],
    },
    {
        icon: FaPodcast,
        titleId: 'Divisi Media Kreatif',
        titleEn: 'Creative Media Division',
        companyId: 'Kegiatan Ramadhan 1445 H — STMIK Amik Bandung',
        companyEn: 'Ramadan Event 1445 H — STMIK Amik Bandung',
        period: '18 Mar 2024',
        tagId: 'Kepanitiaan',
        tagEn: 'Committee',
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
        icon: FaTrophy,
        titleId: 'Leader MIPS 2024',
        titleEn: 'Leader MIPS 2024',
        companyId: 'HIMATIF',
        companyEn: 'HIMATIF',
        period: '2024',
        tagId: 'Kepanitiaan',
        tagEn: 'Committee',
        pointsId: [
            'Memimpin dan mengkoordinasi kegiatan MIPS 2024',
        ],
        pointsEn: [
            'Led and coordinated MIPS 2024 activities',
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
                    const tagLabel = lang === 'id' ? exp.tagId : exp.tagEn;

                    if (exp.isGrouped) {
                        return (
                            <div key={i} className="relative pl-12" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="absolute left-1.5 w-6 h-6 rounded-full bg-black border-2 border-white/20 flex items-center justify-center">
                                    <Icon className="text-slate-300 text-[10px]" />
                                </div>
                                <div className="glass-card rounded-xl p-4 hover:border-white/20 transition-colors duration-200">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="text-sm font-semibold text-white">
                                                {lang === 'id' ? exp.titleId : exp.titleEn}
                                            </h3>
                                        </div>
                                        <span className="text-[11px] text-slate-400 font-medium shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 mb-2">
                                        {lang === 'id' ? exp.companyId : exp.companyEn}
                                    </p>

                                    {/* Nested sub-timeline */}
                                    <div className="mt-4 relative pl-5 border-l border-white/10 space-y-4">
                                        {exp.projects.map((proj) => {
                                            const points = lang === 'id' ? proj.pointsId : proj.pointsEn;
                                            return (
                                                <div key={proj.id} className="relative">
                                                    {/* Small nested dot indicator centered on border */}
                                                    <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-black border-2 border-white/30" />
                                                    
                                                    <div className="flex items-center justify-between gap-2 mb-1">
                                                        <h4 className="text-xs font-semibold text-slate-200">
                                                            {lang === 'id' ? proj.titleId : proj.titleEn}
                                                        </h4>
                                                        <span className="text-[9px] text-slate-500 shrink-0">
                                                            {proj.period}
                                                        </span>
                                                    </div>
                                                    <ul className="list-disc list-outside pl-4 space-y-0.5">
                                                        {points.map((point, j) => (
                                                            <li key={j} className="text-xs text-slate-400 leading-relaxed pl-1">
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    const points = lang === 'id' ? exp.pointsId : exp.pointsEn;
                    return (
                        <div key={i} className="relative pl-12" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="absolute left-1.5 w-6 h-6 rounded-full bg-black border-2 border-white/20 flex items-center justify-center">
                                <Icon className="text-slate-300 text-[10px]" />
                            </div>
                            <div className="glass-card rounded-xl p-4 hover:border-white/20 transition-colors duration-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-sm font-semibold text-white">
                                            {lang === 'id' ? exp.titleId : exp.titleEn}
                                        </h3>
                                        {tagLabel && (
                                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10 font-medium">
                                                {tagLabel}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-[11px] text-slate-400 font-medium shrink-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-500 mb-2">
                                    {lang === 'id' ? exp.companyId : exp.companyEn}
                                </p>
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
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <h2 className="section-title" data-aos="fade-right">
                    {t.experienceTitle}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left — Work Experience */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2" data-aos="fade-right">
                            <span className="w-2 h-2 rounded-full bg-white" />
                            {t.workExpLabel}
                        </h3>
                        <TimelineColumn items={workExperience} lang={lang} />
                    </div>

                    {/* Right — Organizational Experience */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2" data-aos="fade-left">
                            <span className="w-2 h-2 rounded-full bg-white" />
                            {t.orgExpLabel}
                        </h3>
                        <TimelineColumn items={orgExperience} lang={lang} />
                    </div>
                </div>
            </div>
        </section>
    );
}
