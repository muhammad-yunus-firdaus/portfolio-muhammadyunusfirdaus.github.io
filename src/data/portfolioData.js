import {
  FaPython,
  FaPhp,
  FaBrain,
  FaEye,
  FaDatabase,
  FaTools,
  FaDesktop,
} from 'react-icons/fa';

/* ─── Base URL for GitHub Pages ─── */
const BASE_URL = process.env.PUBLIC_URL || '';

/* ─── Social Links ─── */
export const socialLinks = {
  github: 'https://github.com/muhammad-yunus-firdaus',
  linkedin: 'https://www.linkedin.com/in/muhammad-yunus-firdaus-692623334/',
  instagram: 'https://instagram.com/mhmmadynss',
};

/* ─── Personal Info ─── */
export const personalInfo = {
  name: 'Muhammad Yunus Firdaus',
  roleId: 'Mahasiswa Teknik Informatika',
  roleEn: 'Informatics Engineering Student',
  universityId: 'Universitas Adhirajasa Reswara Sanjaya',
  universityEn: 'Adhirajasa Reswara Sanjaya University',
  facultyId: 'Teknologi Informasi',
  facultyEn: 'Information Technology',
  majorId: 'Teknik Informatika',
  majorEn: 'Informatics Engineering',
  email: 'yunusfirdauss123@gmail.com',
  bioShort:
    'Saya adalah individu yang teliti dan bermotivasi tinggi dalam bekerja dengan pengalaman sebagai IT Support serta Teknisi Hardware dalam pemeliharaan perangkat dan infrastruktur jaringan. Memiliki minat yang mendalam dalam pengembangan teknologi web, cloud computing, machine learning, serta artificial intelligence (AI) untuk terus berkembang di industri teknologi modern.',
  bioLong:
    'Didukung keahlian dalam membangun aplikasi web fungsional serta kemampuan memanfaatkan teknologi AI untuk meningkatkan efisiensi kerja, saya siap memberikan kontribusi yang inovatif dan efektif bagi perusahaan, baik secara tim maupun individu.',
};


/* ─── Skills ─── */
export const skills = [
  { nameId: 'Python', nameEn: 'Python', iconName: 'FaPython', isPython: true },
  { nameId: 'PHP', nameEn: 'PHP', iconName: 'FaPhp', color: '#777BB4' },
  { nameId: 'SQL', nameEn: 'SQL', iconName: 'FaDatabase', color: '#F29111' },
  { nameId: 'Machine Learning', nameEn: 'Machine Learning', iconName: 'FaBrain', color: '#FF6F61' },
  { nameId: 'Troubleshooting Hardware', nameEn: 'Hardware Troubleshooting', iconName: 'FaTools', color: '#6B7280' },
  { nameId: 'Instalasi Sistem Operasi', nameEn: 'Operating System Installation', iconName: 'FaDesktop', color: '#0078D4' },
];

/* ─── Icon Map (for dynamic rendering) ─── */
export const iconMap = {
  FaPython: FaPython,
  FaPhp: FaPhp,
  FaBrain: FaBrain,
  FaEye: FaEye,
  FaDatabase: FaDatabase,
  FaTools: FaTools,
  FaDesktop: FaDesktop,
};

/* ─── Projects ─── */
export const projects = [
  {
    image: `${BASE_URL}/Images/manajemen-tugas/Dashboard_1.webp`,
    titleId: 'Website Manajemen Tugas',
    titleEn: 'Task Management Website',
    shortDescId: 'Aplikasi manajemen tugas berbasis Django dan SQLite yang dibuat untuk mengatasi masalah produktivitas pribadi yang tidak teratur dan sulitnya menentukan skala prioritas tugas harian sebelum adanya pelacakan otomatis. Solusi ini menyediakan pencatatan tugas terstruktur, notifikasi deadline, serta dashboard statistik untuk memantau progress secara real-time.',
    shortDescEn: 'A Django and SQLite-based task management web application built to address the challenges of unorganized personal productivity and the difficulty of managing daily task priorities before automated tracking. This solution provides structured task logging, deadline notifications, and a statistics dashboard to monitor progress in real-time.',
    semester: 'Semester 4',
    year: '2025',
    courseId: 'Project Mandiri',
    courseEn: 'Independent Project',
    typeId: 'Individu',
    typeEn: 'Individual',
    featuresId: [
      'Autentikasi pengguna (Register, Login, Logout)',
      'Dashboard statistik & progress tugas dengan grafik interaktif',
      'CRUD manajemen daftar & detail tugas',
      'Penjadwalan tugas harian (Jadwal Hari Ini)',
      'Evaluasi mingguan kinerja & status tugas',
      'Manajemen agenda kegiatan acara terstruktur',
      'Notifikasi pengingat tugas mendekati deadline',
    ],
    featuresEn: [
      'User authentication (Register, Login, Logout)',
      'Statistics dashboard & task progress with interactive charts',
      'CRUD management of task list & details',
      'Daily task scheduling (Today\'s Schedule)',
      'Weekly evaluation of performance & task status',
      'Structured event calendar and activities management',
      'Deadline reminder notifications for approaching tasks',
    ],
    demoLink: 'https://muhammadyunus.pythonanywhere.com/tugas/login/',
    githubLink: 'https://github.com/muhammad-yunus-firdaus',
    technologies: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    previewImages: [
      `${BASE_URL}/Images/manajemen-tugas/Login.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Dashboard_1.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Dashboard_2.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Daftar_tugas.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Detail_tugas.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Jadwal_hari_ini.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Evaluasi_mingguan.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Kegiatan_acara.webp`,
    ],
  },
  {
    image: `${BASE_URL}/Images/futsal/admin/Kelola_Lapangan_Admin.webp`,
    titleId: 'Website Pemesanan Lapangan Futsal',
    titleEn: 'Futsal Court Booking Website',
    shortDescId: 'Aplikasi web pemesanan lapangan futsal berbasis Laravel dan MySQL yang dibuat untuk menggantikan proses pemesanan manual yang sering memicu jadwal bentrok dan ketidakpastian ketersediaan lapangan. Solusi ini menyediakan sistem pemesanan online real-time dengan multi-role (Admin & User), manajemen jadwal transparan, serta pengelolaan data lapangan terpusat.',
    shortDescEn: 'A Laravel and MySQL-based futsal court booking web application built to replace manual booking processes that often cause scheduling conflicts and availability uncertainty. This solution provides a real-time online booking system with multi-role access (Admin & User), transparent schedule management, and centralized court data control.',
    semester: 'Semester 3',
    year: '2024',
    courseId: 'Pemrograman Web',
    courseEn: 'Web Programming',
    typeId: 'Individu',
    typeEn: 'Individual',
    featuresId: [
      'Login menggunakan multi-role (Admin & User)',
      'Register & Logout',
      'CRUD (manajemen lapangan, booking, & user)',
      'Filter & pencarian data',
      'Tampilan responsive (Mobile & Desktop)',
    ],
    featuresEn: [
      'Multi-role login (Admin & User)',
      'Register & Logout',
      'CRUD (court management, booking, & user)',
      'Data filtering & search',
      'Responsive design (Mobile & Desktop)',
    ],
    demoLink: null,
    githubLink: 'https://github.com/muhammad-yunus-firdaus',
    technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    previewImages: [],
    previewSets: [
      {
        roleId: 'Admin',
        roleEn: 'Admin',
        images: [
          `${BASE_URL}/Images/futsal/admin/Login.webp`,
          `${BASE_URL}/Images/futsal/admin/Dashboard_Admin.webp`,
          `${BASE_URL}/Images/futsal/admin/Jadwal_Booking_Admin.webp`,
          `${BASE_URL}/Images/futsal/admin/Kelola_Booking_Admin.webp`,
          `${BASE_URL}/Images/futsal/admin/Tambah_Booking_Admin.webp`,
          `${BASE_URL}/Images/futsal/admin/Kelola_Lapangan_Admin.webp`,
          `${BASE_URL}/Images/futsal/admin/Tambah_Lapangan_Admin.webp`,
          `${BASE_URL}/Images/futsal/admin/Kelola_Pengguna_Admin.webp`,
          `${BASE_URL}/Images/futsal/admin/Tambah_Pengguna_Admin.webp`,
        ],
      },
      {
        roleId: 'User',
        roleEn: 'User',
        images: [
          `${BASE_URL}/Images/futsal/user/Login.webp`,
          `${BASE_URL}/Images/futsal/user/Dashboard_User.webp`,
          `${BASE_URL}/Images/futsal/user/Lapangan_User.webp`,
          `${BASE_URL}/Images/futsal/user/Pemesanan_Lapangan_User.webp`,
          `${BASE_URL}/Images/futsal/user/Jadwal_User.webp`,
          `${BASE_URL}/Images/futsal/user/Riwayat_Pesanan_User.webp`,
        ],
      },
    ],
  },
  {
    image: `${BASE_URL}/Images/klasifikasi-sepatu/1.webp`,
    titleId: 'Klasifikasi Sepatu dengan CNN',
    titleEn: 'Shoe Classification with CNN',
    shortDescId: 'Sistem cerdas berbasis CNN MobileNet dan TensorFlow yang dirancang untuk mengatasi lambatnya proses identifikasi dan klasifikasi manual merek sepatu pada inventaris atau e-commerce. Model ini otomatis mengenali merek sepatu melalui pemrosesan gambar dengan akurasi pengujian mencapai > 90%.',
    shortDescEn: 'An intelligent system based on CNN MobileNet and TensorFlow designed to address the slow process of manual identification and classification of shoe brands in inventory or e-commerce. This model automatically recognizes shoe brands through image processing with a testing accuracy of > 90%.',
    semester: 'Semester 4',
    year: '2025',
    courseId: 'Pengolahan Citra Digital',
    courseEn: 'Digital Image Processing',
    typeId: 'Kelompok',
    typeEn: 'Group',
    featuresId: [
      'Mengidentifikasi merek sepatu (Nike, Adidas, Converse)',
      'Model klasifikasi menggunakan CNN MobileNet',
      'Akurasi pengujian mencapai > 90%',
    ],
    featuresEn: [
      'Identifies shoe brands (Nike, Adidas, Converse)',
      'Classification model using CNN MobileNet',
      'Achieved > 90% testing accuracy',
    ],
    demoLink: null,
    githubLink: 'https://github.com/muhammad-yunus-firdaus',
    technologies: ['Python', 'TensorFlow', 'MobileNet', 'CNN'],
    previewImages: [
      `${BASE_URL}/Images/klasifikasi-sepatu/1.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/2.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/Model_loss_2.1.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/Model_accuracy_2.2.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/3.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/4.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/Confusion_matrix_4.1.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/5.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/6.webp`,
      `${BASE_URL}/Images/klasifikasi-sepatu/7.webp`,
    ],
  },
  {
    image: `${BASE_URL}/Images/deteksi-tomat/thumbnail.jpg`,
    titleId: 'Deteksi & Penghitungan Buah Tomat',
    titleEn: 'Tomato Detection & Counting',
    shortDescId: 'Sistem deteksi berbasis YOLOv8, OpenCV, dan Python yang dibangun untuk menggantikan penghitungan manual hasil produksi tomat pasca-panen yang memakan waktu lama dan rentan terhadap kesalahan manusia. Solusi ini memungkinkan pendeteksian dan penghitungan jumlah buah tomat secara otomatis dan real-time melalui kamera perangkat untuk meningkatkan efisiensi operasional.',
    shortDescEn: 'A YOLOv8, OpenCV, and Python-based detection system built to replace the time-consuming and human-error-prone manual counting of post-harvest tomato yields. This solution enables automated and real-time detection and counting of tomatoes through device cameras to improve operational efficiency.',
    semester: 'Semester 5',
    year: '2026',
    courseId: 'Kecerdasan Buatan',
    courseEn: 'Artificial Intelligence',
    typeId: 'Kelompok',
    typeEn: 'Group',
    featuresId: [
      'Mempercepat proses penghitungan hasil produksi tomat',
      'Deteksi objek real-time melalui kamera perangkat',
      'Sistem berbasis YOLOv8 dengan Python',
    ],
    featuresEn: [
      'Accelerates tomato production counting process',
      'Real-time object detection through device camera',
      'YOLOv8-based system with Python',
    ],
    demoLink: null,
    githubLink: 'https://github.com/muhammad-yunus-firdaus',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Ultralytics'],
    previewImages: [],
  },
];

/* ─── Certificates ─── */
export const certificates = [
  // 2026
  {
    image: 'Belajar Dasar Cloud dan Gen AI di AWS.webp',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    year: '2026',
    issuer: 'Dicoding | AWS AI Academy',
    category: 'bootcamp',
    link: 'https://dicoding.com/certificates/1OP8R8VN1ZQK',
  },
  {
    image: 'Belajar Machine Learning untuk Pemula.webp',
    title: 'Belajar Machine Learning untuk Pemula',
    year: '2026',
    issuer: 'Dicoding | AWS AI Academy',
    category: 'bootcamp',
    link: 'https://dicoding.com/certificates/98XW01OKWXM3',
  },
  {
    image: 'Spec-Driven Development dengan Kiro.webp',
    title: 'Spec-Driven Development dengan Kiro',
    year: '2026',
    issuer: 'Dicoding | AWS AI Academy',
    category: 'bootcamp',
    link: 'https://dicoding.com/certificates/NVP7NLE64ZR0',
  },
  {
    image: 'Memulai Pemrograman dengan Python.webp',
    title: 'Memulai Pemrograman dengan Python',
    year: '2026',
    issuer: 'Dicoding | AWS AI Academy',
    category: 'bootcamp',
    link: 'https://dicoding.com/certificates/72ZDJ35LQZYW',
  },
  // 2025
  {
    image: 'Prompt_Engineering.webp',
    title: 'Prompt Engineering Untuk Software Developer',
    year: '2025',
    issuer: 'Dicoding',
    category: 'bootcamp',
  },
  {
    image: 'Belajar_Dasar_AI.webp',
    title: 'Belajar Dasar AI',
    year: '2025',
    issuer: 'Dicoding',
    category: 'bootcamp',
  },
  {
    image: 'Introduction Back End Development.webp',
    title: 'Introduction Back End Development',
    year: '2025',
    issuer: 'Meta',
    category: 'kursus',
  },
  {
    image: 'Programming In Python.webp',
    title: 'Programming In Python',
    year: '2025',
    issuer: 'Meta',
    category: 'kursus',
  },
  {
    image: 'Work Smarter With Microsoft Excel.webp',
    title: 'Work Smarter With Microsoft Excel',
    year: '2025',
    issuer: 'Microsoft',
    category: 'kursus',
  },
  // 2024
  {
    image: 'Leader_Himatif.webp',
    title: 'Leader MIPS 2024',
    year: '2024',
    issuer: 'HIMATIF',
    category: 'kepanitiaan',
  },
  {
    image:
      'Panitia_Riding The Waves Of Cyber Space _Muhammad Yunus Firdaus.webp',
    title: 'Riding The Waves Of Cyber Space',
    year: '2024',
    issuer: 'HIMATIF',
    category: 'kepanitiaan',
  },
  {
    image: 'Panitia Kegiatan Ramadhan.webp',
    title: 'Panitia Kegiatan Ramadhan',
    year: '2024',
    issuer: 'HIMATIF',
    category: 'kepanitiaan',
  },
  // 2023
  {
    image: 'Sertifikat 7 Dec.webp',
    title: 'Artificial Intelligence',
    year: '2023',
    issuer: 'TrRecPro',
    category: 'seminar',
  },
  {
    image: 'E-Certificate Excel.webp',
    title: 'Microsoft Excel Basic',
    year: '2023',
    issuer: 'Coding Studio',
    category: 'seminar',
  },
];

