import { Section } from "@/components/Section";
import { stackGroups } from "@/lib/data";

export function Stack() {
  return (
    <Section id="stack" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 mb-12">
          Stack
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-white/10 bg-white/2 p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-500">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-2.5 py-1 rounded-md bg-white/5 text-zinc-200 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
