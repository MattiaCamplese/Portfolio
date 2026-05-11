import { Mail, Phone, MapPin } from "lucide-react";

import { Section } from "@/components/Section";
import { LinkedInIcon } from "@/components/icons";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Mattia1996@gmail.com", href: "mailto:Mattia1996@gmail.com" },
  { icon: Phone, label: "+39 393 289 8333", href: "tel:+393932898333" },
  {
    icon: LinkedInIcon,
    label: "linkedin.com/in/mattia-camplese",
    href: "https://www.linkedin.com/in/mattia-camplese",
  },
  { icon: MapPin, label: "Pescara, Italia", href: null },
] as const;

export function Contact() {
  return (
    <Section id="contact" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">Contatti</h2>
        <p className="mt-3 text-zinc-400">Aperto a opportunità e collaborazioni.</p>
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-3">
                  <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-orange-500">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base text-zinc-200 text-left">{label}</span>
                </span>
              );

              return (
                <li key={label} className="flex items-center justify-center">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
