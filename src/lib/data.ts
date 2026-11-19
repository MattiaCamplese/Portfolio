export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  credentials?: { label: string; value: string }[];
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type Education = {
  title: string;
  institution: string;
  location: string;
  year: string;
};

export const experiences: Experience[] = [
  {
    role: "Frontend Developer — CyberSonar",
    company: "Digimetrica (per Defsox)",
    location: "Tirocinio",
    period: "Set 2026 — Oggi",
    bullets: [
      "Sviluppo di funzionalità frontend in React e TypeScript per CyberSonar, piattaforma di cybersecurity per l'analisi del rischio dei domini (vulnerabilità, data leak, servizi esposti), usata da oltre 400 aziende clienti.",
      "Progettazione e sviluppo di Orbit Map, componente React + TypeScript riutilizzabile per esplorare gerarchie complesse un nodo alla volta: rendering SVG senza librerie grafiche, raggruppamento automatico di centinaia di nodi, navigazione da tastiera, tema chiaro/scuro e layout adattivo.",
      "Gestione dei dati lato server con TanStack Query e dello stato client con Zustand; interfacce realizzate con shadcn/ui e Tailwind CSS.",
      "Interventi full stack sulle API (Hono, Drizzle ORM, PostgreSQL) a supporto delle funzionalità sviluppate.",
      "Sviluppo assistito da AI (agenti AI, Copilot) integrato nel lavoro quotidiano, con revisione del codice generato.",
    ],
  },
  {
    role: "Full Stack Developer — Tirocinio",
    company: "Manxx srl",
    location: "Pescara",
    period: "Mag — Giu 2026",
    bullets: ["Progettazione e sviluppo di applicativi gestionali industriali con NocoBase."],
  },
  {
    role: "Assistant Manager / Responsabile Operativo",
    company: "Ingrosso Sodo Migliori Italia",
    location: "Italia",
    period: "Gen 2022 — Apr 2025",
    bullets: [
      "Gestione operativa, fornitori e ordini di elevato valore economico.",
      "Supervisione flussi acquisto/vendita di metalli preziosi; rapporti con clienti ad alto profilo.",
      "Controllo qualità, rispetto tempistiche e gestione delle priorità operative.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Data Analyzer",
    description:
      "Web app per analizzare e confrontare report di sicurezza dei domini. Dashboard con trend del rischio, tabella con ricerca, filtri, ordinamento e paginazione sincronizzati nell'URL, confronto tra scansioni storiche, export PDF, interfaccia IT/EN e dark mode.",
    tags: ["React 19", "TypeScript", "TanStack Query", "Zustand", "Zod", "Recharts", "Hono", "Drizzle", "PostgreSQL"],
    url: "https://data-analyzerfrontend.vercel.app/",
    credentials: [
      { label: "Email", value: "admin@data-analyzer.com" },
      { label: "Password", value: "admin123" },
    ],
  },
  {
    title: "Blitzball",
    description:
      "Gestionale per tornei di calcetto: anagrafica giocatori, calendario partite, classifica marcatori, statistiche live e albo d'oro.",
    tags: ["React", "PHP", "REST", "JWT", "SQL"],
    url: "https://blitzball-frontend.vercel.app",
  },
  {
    title: "Travel Experience",
    description:
      "Social/blog per condividere esperienze di viaggio, con autenticazione, profilo utente e feed.",
    tags: ["React", "Laravel", "REST", "JWT", "PostgreSQL"],
    url: "https://travel-experience-frontend-one.vercel.app/",
  },
];

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript ES6+", "Next.js", "Tailwind CSS", "shadcn/ui", "Radix UI"],
  },
  {
    label: "Stato e dati",
    items: ["TanStack Query", "Zustand", "React Hook Form", "Zod", "REST", "JWT", "Recharts"],
  },
  { label: "Backend", items: ["Node.js", "Hono", "Express", "PHP", "Laravel", "Drizzle ORM"] },
  { label: "Database", items: ["PostgreSQL", "MySQL"] },
  { label: "Strumenti", items: ["Git", "Vite", "Docker", "Postman", "NocoBase", "Agenti AI", "Copilot"] },
];

export const education: Education[] = [
  {
    title: "Corso Full Stack Developer",
    institution: "InfoBasic",
    location: "Pescara, PE",
    year: "Dal 2025",
  },
  {
    title: "Laurea in Economia e Management",
    institution: "Università G. D'Annunzio",
    location: "Pescara",
    year: "2019",
  },
];
