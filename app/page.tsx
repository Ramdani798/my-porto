import { MY_PROJECTS } from "../src/constants";
import FadeIn from "../src/components/FadeIn";
import ParticleBackground from "../src/components/ParticleBackground"; // Import mesin partikel
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden z-10">
      <ParticleBackground />
      <section className="w-full flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        <FadeIn direction="down" delay={0.1}>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-800 bg-gray-900/50 text-sm font-medium text-blue-400">
            Muhamad Ramdani
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            Software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Engineer.
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Saya merancang dan mengembangkan aplikasi web dengan fokus pada
            performa tinggi, arsitektur yang dapat diandalkan, dan pengalaman
            pengguna yang intuitif.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Lihat Proyek Saya <ArrowRight size={20} />
          </a>
        </FadeIn>
      </section>

      {/* About Section - DISUNTIKKAN DI SINI */}
      <About />

      {/* Projects Section */}
      <section id="work" className="w-full max-w-6xl px-6 py-24">
        <FadeIn direction="left">
          <h2 className="text-4xl font-bold mb-12 border-b border-gray-800 pb-4">
            Selected Works
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MY_PROJECTS.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.15}>
              {/* UPDATE ABSOLUT: Membungkus seluruh kartu dengan tag <a> */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="group p-1 rounded-2xl bg-linear-to-b from-gray-800 to-black hover:from-blue-500 hover:to-purple-600 transition-all duration-500 cursor-pointer h-full flex flex-col">
                  <div className="bg-black p-6 rounded-xl h-full flex flex-col">
                    {/* Bagian Gambar Tuan (Gunakan Gaya 1 atau Gaya 2 di sini) */}
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg border border-gray-800 bg-gray-900 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-900 px-3 py-1.5 rounded-full text-gray-300 border border-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer System */}
      <Footer />
    </main>
  );
}
