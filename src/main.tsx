import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { AnimatedBackdrop } from "@/components/AnimatedBackdrop";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Esperienza } from "@/sections/Esperienza";
import { Projects } from "@/sections/Projects";
import { Stack } from "@/sections/Stack";
import { Formazione } from "@/sections/Formazione";
import { Contact } from "@/sections/Contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      id="top"
      className="relative min-h-screen text-zinc-100 antialiased selection:bg-orange-500/30"
    >
      <AnimatedBackdrop />
      <NavBar />
      <main>
        <Hero />
        <Esperienza />
        <Projects />
        <Stack />
        <Formazione />
        <Contact />
      </main>
      <Footer />
    </div>
  </StrictMode>,
);
