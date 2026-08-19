import { motion } from "framer-motion";
import { Section, Eyebrow, SectionTitle } from "../components/ui";
import { profile } from "../data/content";

const points = [
  "B.Tech in Computer Science & Engineering, graduating 2027",
  "Primary focus: Node.js, Express.js, PostgreSQL",
  "Comfortable designing REST APIs and relational schemas end to end",
  "Full-stack capable with React.js when a project needs a front end",
  "Learns by shipping — two full-stack personal projects, built and deployed",
];

export default function About() {
  return (
    <Section id="about">
      <Eyebrow>01 · About</Eyebrow>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Backend engineering, learned by shipping.</SectionTitle>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">{profile.summary}</p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-text/90"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
