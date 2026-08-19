import { motion } from "framer-motion";
import { Section, Eyebrow, SectionTitle } from "../components/ui";

export default function Education() {
  return (
    <Section id="education">
      <Eyebrow>05 · Education</Eyebrow>
      <SectionTitle>Education</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-col justify-between gap-4 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center"
      >
        <div>
          <h3 className="text-lg font-semibold text-text">
            B.Tech, Computer Science &amp; Engineering
          </h3>
          <p className="mt-1 text-muted">Shri Shankaracharya Technical Campus, Bhilai</p>
          <p className="mt-1 font-mono-tech text-[13px] text-muted-2">
            7th Semester · Expected 2027
          </p>
        </div>
        <div className="flex gap-6 font-mono-tech text-sm sm:text-right">
          <div>
            <div className="text-muted-2">CGPA (up to 5th sem)</div>
            <div className="text-accent">8.25</div>
          </div>
          <div>
            <div className="text-muted-2">Class XII</div>
            <div className="text-text/80">76.6%</div>
          </div>
          <div>
            <div className="text-muted-2">Class X</div>
            <div className="text-text/80">76.6%</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
