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
    role: "Full Stack Developer (in formazione)",
    company: "InfoBasic",
    location: "Pescara, PE",
    period: "2025 — Oggi",
    bullets: [
      "Frontend: HTML5, CSS3, JS ES6+, React, Tailwind, Bootstrap, Responsive Design.",
      "Backend: Node.js, Express, PHP, Laravel, REST API, autenticazione JWT.",
      "Database: MySQL, PostgreSQL; progettazione e ottimizzazione query SQL.",
      "Dev & Tools: Git/GitHub, Docker, Postman, VS Code; AI Agents + Copilot.",
    ],
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
    title: "Blitzball",
    description:
      "Gestionale scalabile per tornei di calcetto. Anagrafica giocatori, calendario partite, classifica marcatori, statistiche live e albo d'oro.",
    tags: ["React", "Node", "REST", "JWT", "SQL"],
    url: "https://blitzball-frontend.vercel.app",
  },
  {
    title: "Travel Experience",
    description:
      "Social/blog per condividere esperienze di viaggio. Autenticazione completa, profilo utente personalizzato e feed.",
    tags: ["React", "Node", "Express", "JWT", "MongoDB"],
    url: "https://travel-experience-frontend-one.vercel.app/",
  },
  {
    title: "Data Analyzer",
    description:
      "Dashboard per l'analisi della sicurezza web. Upload report, score di rischio, grafici su vulnerabilità, porte, data leak e sicurezza email. Autenticazione JWT, multi-lingua e confronto storico tra scansioni.",
    tags: ["React", "TypeScript", "Hono", "JWT", "Recharts"],
    url: "https://data-analyzerfrontend.vercel.app/",
    credentials: [
      { label: "Email", value: "admin@data-analyzer.com" },
      { label: "Password", value: "admin123" },
    ],
  },
];

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: ["HTML5", "CSS3", "JS ES6+", "React", "Next.js", "Tailwind", "Bootstrap"],
  },
  { label: "Backend", items: ["Node.js", "Express", "PHP", "Laravel", "REST", "JWT"] },
  { label: "Database", items: ["MySQL", "PostgreSQL", "SQL"] },
  { label: "Dev & Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code"] },
  { label: "AI Agents", items: ["Agenti AI", "Copilot", "LLM"] },
];

export const education: Education[] = [
  {
    title: "Corso Full Stack Developer",
    institution: "InfoBasic",
    location: "Pescara, PE",
    year: "Da 2025",
  },
  {
    title: "Laurea in Economia e Management",
    institution: "Università G. D'Annunzio",
    location: "Pescara",
    year: "2019",
  },
];
