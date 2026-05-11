import { Section } from "@/components/Section";
import { education } from "@/lib/data";

export function Formazione() {
  return (
    <Section id="formazione" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 mb-12">
          Formazione
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="rounded-xl border border-white/10 bg-white/2 p-6 sm:p-8"
            >
              <p className="mb-3 text-xs font-mono text-zinc-500">{edu.year}</p>
              <h3 className="text-lg font-semibold text-zinc-50">{edu.title}</h3>
              <p className="mt-1.5 text-sm text-orange-500">
                {edu.institution} · {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
