import { ArrowRight, Download } from "lucide-react";

import { Section } from "@/components/Section";
import { GitHubIcon } from "@/components/icons";

export function Hero() {
  return (
    <Section id="about" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        <div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-50 leading-[1.05]">
            Mattia Camplese
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-medium text-orange-500">
            Full Stack Developer Junior
          </p>
          <p className="mt-8 max-w-2xl text-zinc-400 leading-relaxed">
            Full Stack Developer junior con solide basi nello sviluppo web e forte interesse per
            applicazioni scalabili e orientate all'utente. Background in ruoli gestionali: processi
            strutturati, attenzione al dettaglio, obiettivi concreti.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium bg-orange-500 text-zinc-950 hover:-translate-y-0.5 transition-transform"
            >
              Vedi i Progetti
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-zinc-100 border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              Contattami
            </a>
            <a
              href="/cv-mattia-camplese.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-zinc-100 border border-white/15 hover:border-orange-500/50 hover:bg-white/5 transition-colors"
            >
              <Download className="w-4 h-4" />
              Scarica CV
            </a>
            <a
              href="https://github.com/MattiaCamplese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-zinc-100 border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end">
          <div
            className="absolute -inset-3 rounded-full blur-2xl opacity-40"
            style={{ background: "radial-gradient(circle, #F97316, transparent 70%)" }}
          />
          <div
            className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-1 ring-white/10 shadow-2xl"
            style={{ backgroundColor: "#dce4ec" }}
          >
            <img
              src="/mattia.jpeg"
              alt="Mattia Camplese"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
