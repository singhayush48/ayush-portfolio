import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "../components/ui";
import { pipeline } from "../data/content";

export default function HowIBuild() {
  const [active, setActive] = useState(2);

  return (
    <Section id="engineering">
      <Eyebrow>03 · Engineering</Eyebrow>
      <SectionTitle>How I build a backend.</SectionTitle>
      <p className="mt-4 max-w-xl text-muted">
        A conceptual view of how a request moves through the systems I build —
        not the literal architecture of every project, but the shape most of
        them share. Tap a stage to read what happens there.
      </p>

      <div className="mt-12 flex flex-col items-stretch md:flex-row md:items-center">
        {pipeline.map((stage, i) => (
          <div key={stage.id} className="flex flex-col items-stretch md:flex-row md:items-center md:flex-1">
            <motion.button
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`w-full rounded-lg border px-3 py-4 text-center font-mono-tech text-[13px] transition-colors md:flex-1 ${
                active === i
                  ? "border-accent/60 bg-accent-soft text-accent"
                  : "border-border bg-surface text-muted hover:border-border-soft hover:text-text"
              }`}
            >
              {stage.label}
            </motion.button>
            {i < pipeline.length - 1 && (
              <div className="flex items-center justify-center py-2 text-muted-2 md:px-2 md:py-0">
                <ArrowDown size={16} className="md:hidden" />
                <ArrowRight size={16} className="hidden md:block" />
              </div>
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-8 rounded-xl border border-border bg-surface p-6"
      >
        <span className="font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
          {pipeline[active].label}
        </span>
        <p className="mt-2 max-w-lg text-text/85">{pipeline[active].detail}</p>
      </motion.div>
    </Section>
  );
}
