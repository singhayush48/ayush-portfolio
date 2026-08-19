import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";
import { profile } from "../data/content";
import StatusPanel from "../components/StatusPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,245,92,0.10),transparent)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1.5 font-mono-tech text-xs text-muted terminal-frame"
          >
            <Terminal size={13} className="text-accent" />
            session: portfolio / status: available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-text md:text-6xl"
          >
            <span className="block font-mono-tech text-sm font-medium tracking-[0.12em] text-muted">$ whoami</span>
            {profile.name}<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 font-mono-tech text-xl text-accent text-glow md:text-2xl"
          >
            {">_"} Backend-Focused Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            I build reliable REST APIs, real-time systems and database-driven
            applications — Node.js, Express.js and PostgreSQL at the core, React
            where the experience needs it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-mono-tech text-sm font-semibold text-[#101509] transition-transform hover:-translate-y-0.5"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 font-mono-tech text-sm text-text transition-colors hover:border-accent/40"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 font-mono-tech text-sm text-text transition-colors hover:border-accent/40"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-10 grid max-w-xl grid-cols-3 border-y border-border py-4 font-mono-tech text-[11px]"
          >
            <div><span className="block text-muted-2">FOCUS</span><span className="text-accent">BACKEND</span></div>
            <div className="border-x border-border px-4"><span className="block text-muted-2">LOCATION</span><span>BHILAI, IN</span></div>
            <div className="pl-4"><span className="block text-muted-2">MODE</span><span className="text-ok">BUILDING</span></div>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <StatusPanel />
        </div>
      </div>
    </section>
  );
}
