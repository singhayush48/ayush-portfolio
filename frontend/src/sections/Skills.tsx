import { motion } from "framer-motion";
import { Section, Eyebrow, SectionTitle } from "../components/ui";
import { skillGroups, coreCS } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills">
      <Eyebrow>02 · Skills</Eyebrow>
      <SectionTitle>What I actually work with.</SectionTitle>
      <p className="mt-4 max-w-lg text-muted">
        Organized by where it sits in the stack — backend and database first,
        since that's the focus.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
                {group.label}
              </h3>
              <span className="font-mono-tech text-[11px] text-muted-2">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border-soft bg-surface-2 px-2.5 py-1.5 text-[13px] text-text/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-4 rounded-xl border border-border-soft bg-surface/60 p-5"
      >
        <h3 className="mb-4 font-mono-tech text-xs uppercase tracking-[0.16em] text-muted">
          Core CS Fundamentals
        </h3>
        <div className="flex flex-wrap gap-2">
          {coreCS.map((c) => (
            <span
              key={c}
              className="rounded-md border border-border-soft bg-surface-2 px-2.5 py-1.5 text-[13px] text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
