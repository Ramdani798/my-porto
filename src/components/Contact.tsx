import FadeIn from "./FadeIn";
import { Mail, MapPin, ExternalLink, Smartphone } from "lucide-react";

// =========================================================================
// ENGINE IKON KUSTOM JENIUS
// =========================================================================
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.5 1.6-5-2.5-5-3" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
// =========================================================================

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10"
    >
      <FadeIn direction="up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mari{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Berdiskusi
            </span>
            .
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Saya selalu terbuka untuk peluang kolaborasi baru. Silakan hubungi
            saya secara langsung melalui salah satu jalur di bawah ini.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kartu Email */}
        <FadeIn direction="up" delay={0.1}>
          <a
            href="mailto:ramdani050100@gmail.com"
            className="group flex flex-col items-center justify-center p-8 bg-gray-900/30 backdrop-blur-md border border-gray-800 rounded-3xl hover:border-blue-500 hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="p-4 bg-black border border-gray-700 rounded-full mb-4 group-hover:scale-110 group-hover:text-blue-400 transition-all">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4 text-center">
              ramdani050100@gmail.com
            </p>
            <span className="text-sm font-semibold text-blue-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Kirim Email <ExternalLink size={14} />
            </span>
          </a>
        </FadeIn>

        {/* Kartu WhatsApp / Phone */}
        <FadeIn direction="up" delay={0.2}>
          <a
            href="https://wa.me/6289530114423" // GANTI DENGAN NOMOR WA TUAN
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-gray-900/30 backdrop-blur-md border border-gray-800 rounded-3xl hover:border-green-500 hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="p-4 bg-black border border-gray-700 rounded-full mb-4 group-hover:scale-110 group-hover:text-green-400 transition-all">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 mb-4 text-center">089530114423</p>
            <span className="text-sm font-semibold text-green-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Chat Sekarang <ExternalLink size={14} />
            </span>
          </a>
        </FadeIn>

        {/* Kartu LinkedIn */}
        <FadeIn direction="up" delay={0.3}>
          <a
            href="https://linkedin.com/in/muhamad-ramdani-807b76288"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-gray-900/30 backdrop-blur-md border border-gray-800 rounded-3xl hover:border-blue-600 hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="p-4 bg-black border border-gray-700 rounded-full mb-4 group-hover:scale-110 group-hover:text-blue-500 transition-all">
              <LinkedinIcon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 mb-4 text-center">Jaringan Profil</p>
            <span className="text-sm font-semibold text-blue-500 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Kunjungi Profil <ExternalLink size={14} />
            </span>
          </a>
        </FadeIn>

        {/* Kartu GitHub */}
        <FadeIn direction="up" delay={0.4}>
          <a
            href="https://github.com/Ramdani798"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-gray-900/30 backdrop-blur-md border border-gray-800 rounded-3xl hover:border-white hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="p-4 bg-black border border-gray-700 rounded-full mb-4 group-hover:scale-110 group-hover:text-white transition-all">
              <GithubIcon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 mb-4 text-center">
              Arsip Kode & Open Source
            </p>
            <span className="text-sm font-semibold text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Lihat Repositori <ExternalLink size={14} />
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
