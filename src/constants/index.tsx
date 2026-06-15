import { Project } from "../types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Asset Management API",
    description:
      "RESTful API tangguh untuk manajemen aset dengan fitur Role-Based Access Control (RBAC), jaminan integritas transaksi, dan otomatisasi laporan PDF.",
    image: "/images/asset_management.png", // Pastikan gambar ini adalah screenshot code/postman/arsitektur yang keren
    tags: ["Node.js", "Express.js", "Prisma ORM", "MySQL"],
    link: "https://github.com/Ramdani798/asset-management-api", // Bisa dikosongkan atau diisi link dokumentasi Postman jika ada
    github: "https://github.com/Ramdani798/asset-management-api",
  },
  // Tambahkan proyek lain di bawah sini jika sudah ada
];

export const SKILLS = [
  {
    category: "Frontend Core",
    icon: "Code2",
    items: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    category: "Backend & Logic",
    icon: "Cpu",
    items: ["Node.js", "Next.js", "MySql", "REST APIs", "PHP"],
  },
  {
    category: "Architecture & Tools",
    icon: "Terminal",
    items: ["Git", "cPanel", "Linux System"],
  },
];
