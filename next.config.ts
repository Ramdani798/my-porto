import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* MANTRA UTAMA: Memaksa Next.js memuntahkan folder 'out' */
  output: "export",
  
  /* Wajib untuk ekspor statis agar gambar tidak error */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;