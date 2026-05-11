import { Section } from "@/components/Section";
import { experiences } from "@/lib/data";

export function Esperienza() {
  return (
    <Section id="esperienza" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 mb-12">
          Esperienza
        </h2>
        <div className="space-y-5">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="rounded-xl border border-white/10 bg-white/2 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">{exp.role}</h3>
                  <p className="mt-1 text-sm text-orange-500">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-xs text-zinc-500 font-mono whitespace-nowrap sm:pt-1">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-zinc-400">
                    <span className="mt-2 w-1 h-1 rounded-full bg-orange-500/60 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
