import { ExternalLink, ArrowRight } from "lucide-react";

import { Section } from "@/components/Section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">Progetti</h2>
          <p className="mt-2 text-zinc-500">2 deploy live</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/2 p-6 hover:border-orange-500/40 hover:bg-white/4 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-zinc-50">{project.title}</h3>
                <ExternalLink className="w-4 h-4 mt-1 shrink-0 text-zinc-500 group-hover:text-orange-400 transition-colors" />
              </div>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-orange-500">
                Live Site
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
