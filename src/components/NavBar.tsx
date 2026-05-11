import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#esperienza", label: "Esperienza" },
  { href: "#projects", label: "Progetti" },
  { href: "#stack", label: "Stack" },
  { href: "#formazione", label: "Formazione" },
  { href: "#contact", label: "Contatti" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-zinc-100">
          Mattia <span className="text-orange-500">Camplese</span>
        </a>

        <ul className="hidden sm:flex items-center gap-7 text-sm text-zinc-400">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-zinc-100 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-md">
          <ul className="px-5 py-4 space-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
