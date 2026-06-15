import { SKILLS } from "../constants";
import FadeIn from "./FadeIn";
import { Terminal, Code2, Cpu, Crosshair } from "lucide-react";

// Fungsi jenius untuk mencocokkan string nama ikon dari data dengan komponen ikon asli
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Code2":
      return <Code2 className="text-blue-400 mb-4" size={32} />;
    case "Cpu":
      return <Cpu className="text-purple-400 mb-4" size={32} />;
    case "Terminal":
      return <Terminal className="text-cyan-400 mb-4" size={32} />;
    default:
      return <Crosshair className="text-gray-400 mb-4" size={32} />;
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Kolom Kiri: Narasi Filosofi */}
        <div>
          <FadeIn direction="right">
            <h2 className="text-4xl font-bold mb-6 border-b border-gray-800 pb-4">
              The <span className="text-blue-500">Mindset</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Saya adalah seorang software engineer yang berfokus pada
                penyelesaian masalah melalui arsitektur sistem yang solid dan
                efisien. Saya percaya bahwa aplikasi yang baik harus mampu
                menyeimbangkan performa tinggi dengan pengalaman pengguna yang
                intuitif.
              </p>
              <p>
                Dalam setiap proyek, saya memprioritaskan{" "}
                <strong className="text-white">
                  keterbacaan kode (maintainability), type-safety, dan sistem
                  yang terukur (scalable)
                </strong>
                . Tujuan utama saya adalah membangun solusi digital yang
                tangguh, mudah dikembangkan oleh tim, dan memberikan nilai nyata
                bagi bisnis maupun pengguna akhir.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Kolom Kanan: Arsitektur Skill */}
        <div>
          <FadeIn direction="left" delay={0.2}>
            <h2 className="text-4xl font-bold mb-6 border-b border-gray-800 pb-4">
              Tech <span className="text-purple-500">Arsenal</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, index) => (
              <FadeIn
                key={skillGroup.category}
                direction="up"
                delay={0.3 + index * 0.1}
              >
                <div className="p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-colors duration-300">
                  {getIcon(skillGroup.icon)}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
