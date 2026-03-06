import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLaravel,
  FaPython,
  FaFileExcel,
} from 'react-icons/fa';
import { SiMysql, SiPostgresql } from 'react-icons/si';

/* ─── Social Links ─── */
export const socialLinks = {
  github: 'https://github.com/muhammad-yunus-firdaus',
  linkedin: 'https://www.linkedin.com/in/muhammad-yunus-firdaus-692623334/',
  instagram: 'https://instagram.com/mhmmadynss',
};

/* ─── Personal Info ─── */
export const personalInfo = {
  name: 'Muhammad Yunus Firdaus',
  role: 'Informatics Engineering Student',
  university: 'Universitas Adhirajasa Reswara Sanjaya',
  faculty: 'Teknologi Informasi',
  major: 'Teknik Informatika',
  email: 'yunusfirdauss123@gmail.com',
  bioShort:
    'Mahasiswa Teknik Informatika semester 6 dengan minat dan fokus pada pengembangan web serta AI/Machine Learning.',
  bioLong:
    'Berfokus mengembangkan aplikasi berbasis web, serta memiliki ketertarikan pada pengolahan data dan penerapan AI. Aktif belajar dan siap berkembang di lingkungan profesional berbasis teknologi.',
};


/* ─── Skills ─── */
export const skills = [
  { name: 'HTML', iconName: 'FaHtml5', color: '#E34F26' },
  { name: 'CSS', iconName: 'FaCss3Alt', color: '#1572B6' },
  { name: 'JavaScript', iconName: 'FaJs', color: '#F7DF1E' },
  { name: 'PHP', iconName: 'FaPhp', color: '#777BB4' },
  { name: 'Excel', iconName: 'FaFileExcel', color: '#217346' },
  { name: 'Laravel', iconName: 'FaLaravel', color: '#FF2D20' },
  { name: 'Python', iconName: 'FaPython', isPython: true },
  { name: 'MySQL', iconName: 'SiMysql', color: '#4479A1' },
  { name: 'PostgreSQL', iconName: 'SiPostgresql', color: '#336791' },
];

/* ─── Icon Map (for dynamic rendering) ─── */
export const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaPhp: FaPhp,
  FaLaravel: FaLaravel,
  FaPython: FaPython,
  FaFileExcel: FaFileExcel,
  SiMysql: SiMysql,
  SiPostgresql: SiPostgresql,
};

/* ─── Projects ─── */
export const projects = [
  {
    image: '/Images/manajemen-tugas/Dashboard.png',
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
      '/Images/manajemen-tugas/Login.png',
      '/Images/manajemen-tugas/Dashboard.png',
      '/Images/manajemen-tugas/Daftar_Tugas.png',
      '/Images/manajemen-tugas/Tambah_Tugas.png',
      '/Images/manajemen-tugas/Detail_Tugas.png',
    ],
  },
  {
    image: '/Images/futsal/admin/Kelola_Lapangan_Admin.png',
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
          '/Images/futsal/admin/Login.png',
          '/Images/futsal/admin/Dashboard_Admin.png',
          '/Images/futsal/admin/Jadwal_Booking_Admin.png',
          '/Images/futsal/admin/Kelola_Booking_Admin.png',
          '/Images/futsal/admin/Tambah_Booking_Admin.png',
          '/Images/futsal/admin/Kelola_Lapangan_Admin.png',
          '/Images/futsal/admin/Tambah_Lapangan_Admin.png',
          '/Images/futsal/admin/Kelola_Pengguna_Admin.png',
          '/Images/futsal/admin/Tambah_Pengguna_Admin.png',
        ],
      },
      {
        roleId: 'User',
        roleEn: 'User',
        images: [
          '/Images/futsal/user/Login.png',
          '/Images/futsal/user/Dashboard_User.png',
          '/Images/futsal/user/Lapangan_User.png',
          '/Images/futsal/user/Pemesanan_Lapangan_User.png',
          '/Images/futsal/user/Jadwal_User.png',
          '/Images/futsal/user/Riwayat_Pesanan_User.png',
        ],
      },
    ],
  },
  {
    image: '/Images/klasifikasi-sepatu/thumbnail.jpg',
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
    image: '/Images/deteksi-tomat/thumbnail.jpg',
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
    image: 'Prompt_Engineering.jpg',
    title: 'Prompt Engineering Untuk Software Developer',
    year: '2025',
    issuer: 'Dicoding',
    category: 'bootcamp',
  },
  {
    image: 'Belajar_Dasar_AI.jpg',
    title: 'Belajar Dasar AI',
    year: '2025',
    issuer: 'Dicoding',
    category: 'bootcamp',
  },
  {
    image: 'Introduction Back End Development.jpg',
    title: 'Introduction Back End Development',
    year: '2025',
    issuer: 'Meta',
    category: 'kursus',
  },
  {
    image: 'Programming In Python.jpg',
    title: 'Programming In Python',
    year: '2025',
    issuer: 'Meta',
    category: 'kursus',
  },
  {
    image: 'Work Smarter With Microsoft Excel.jpg',
    title: 'Work Smarter With Microsoft Excel',
    year: '2025',
    issuer: 'Microsoft',
    category: 'kursus',
  },
  // 2024
  {
    image: 'Leader_Himatif.jpg',
    title: 'Leader MIPS 2024',
    year: '2024',
    issuer: 'HIMATIF',
    category: 'kepanitiaan',
  },
  {
    image:
      'Panitia_Riding The Waves Of Cyber Space _Muhammad Yunus Firdaus.jpg',
    title: 'Riding The Waves Of Cyber Space',
    year: '2024',
    issuer: 'HIMATIF',
    category: 'kepanitiaan',
  },
  {
    image: 'Panitia Kegiatan Ramadhan.png',
    title: 'Panitia Kegiatan Ramadhan',
    year: '2024',
    issuer: 'HIMATIF',
    category: 'kepanitiaan',
  },
  // 2023
  {
    image: 'Sertifikat 7 Dec.jpg',
    title: 'Artificial Intelligence',
    year: '2023',
    issuer: 'TrRecPro',
    category: 'seminar',
  },
  {
    image: 'E-Certificate Excel.jpg',
    title: 'Microsoft Excel Basic',
    year: '2023',
    issuer: 'Coding Studio',
    category: 'seminar',
  },
];
