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
    'Saya adalah individu yang teliti dan bermotivasi tinggi dengan pengalaman sebagai IT Support serta Teknisi Hardware dalam pemeliharaan perangkat dan infrastruktur jaringan.',
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
    image: `${BASE_URL}/Images/manajemen-tugas/Dashboard.webp`,
    titleId: 'Website Manajemen Tugas',
    titleEn: 'Task Management Website',
    shortDescId: 'Website manajemen tugas menggunakan Framework Django dan database SQLite.',
    shortDescEn: 'A task management website built with Django Framework and SQLite database.',
    semester: 'Semester 4',
    year: '2025',
    courseId: 'Project Mandiri',
    courseEn: 'Independent Project',
    typeId: 'Individu',
    typeEn: 'Individual',
    featuresId: [
      'Autentikasi pengguna (Register, Login, Logout)',
      'Dashboard statistik tugas dengan grafik & progress bar',
      'CRUD manajemen tugas',
      'Filter & pencarian tugas',
      'Notifikasi tugas mendekati deadline',
    ],
    featuresEn: [
      'User authentication (Register, Login, Logout)',
      'Task statistics dashboard with charts & progress bar',
      'Task management CRUD',
      'Task filtering & search',
      'Deadline approaching notifications',
    ],
    demoLink: 'https://muhammadyunus.pythonanywhere.com/tugas/login/',
    githubLink: 'https://github.com/muhammad-yunus-firdaus',
    technologies: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    previewImages: [
      `${BASE_URL}/Images/manajemen-tugas/Login.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Dashboard.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Daftar_Tugas.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Tambah_Tugas.webp`,
      `${BASE_URL}/Images/manajemen-tugas/Detail_Tugas.webp`,
    ],
  },
  {
    image: `${BASE_URL}/Images/futsal/admin/Kelola_Lapangan_Admin.webp`,
    titleId: 'Website Pemesanan Lapangan Futsal',
    titleEn: 'Futsal Court Booking Website',
    shortDescId: 'Aplikasi web pemesanan lapangan futsal menggunakan Framework Laravel dan database MySQL.',
    shortDescEn: 'A futsal court booking web application built with Laravel Framework and MySQL database.',
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
    image: `${BASE_URL}/Images/klasifikasi-sepatu/thumbnail.jpg`,
    titleId: 'Klasifikasi Sepatu dengan CNN',
    titleEn: 'Shoe Classification with CNN',
    shortDescId: 'Sistem cerdas yang mengidentifikasi merek sepatu melalui pemrosesan gambar dengan akurasi 93%.',
    shortDescEn: 'An intelligent system that identifies shoe brands through image processing with 93% accuracy.',
    semester: 'Semester 4',
    year: '2025',
    courseId: 'Pengolahan Citra Digital',
    courseEn: 'Digital Image Processing',
    typeId: 'Kelompok',
    typeEn: 'Group',
    featuresId: [
      'Mengidentifikasi merek sepatu (Nike, Adidas, Converse)',
      'Model klasifikasi menggunakan CNN MobileNet',
      'Akurasi pengujian mencapai 93%',
    ],
    featuresEn: [
      'Identifies shoe brands (Nike, Adidas, Converse)',
      'Classification model using CNN MobileNet',
      'Achieved 93% testing accuracy',
    ],
    demoLink: null,
    githubLink: 'https://github.com/muhammad-yunus-firdaus',
    technologies: ['Python', 'TensorFlow', 'MobileNet', 'CNN'],
    previewImages: [],
  },
  {
    image: `${BASE_URL}/Images/deteksi-tomat/thumbnail.jpg`,
    titleId: 'Deteksi & Penghitungan Buah Tomat',
    titleEn: 'Tomato Detection & Counting',
    shortDescId: 'Sistem deteksi berbasis YOLOv8 untuk menghitung hasil produksi tomat melalui kamera.',
    shortDescEn: 'A YOLOv8-based detection system for counting tomato production yield through camera.',
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

