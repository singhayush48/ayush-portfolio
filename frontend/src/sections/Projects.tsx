import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { Section, Eyebrow, SectionTitle, Tag } from "../components/ui";
import FlowDiagram from "../components/FlowDiagram";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects">
      <Eyebrow>04 · Projects</Eyebrow>
      <SectionTitle>Selected deployments.</SectionTitle>
      <p className="mt-4 max-w-xl text-muted">
        Two full-stack projects, backend-first — a payments platform and a
        real-time chat system, each with its own database and architecture.
      </p>

      <div className="mt-12 space-y-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="terminal-frame overflow-hidden rounded-sm border border-border bg-surface"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
              <div className="relative p-7 md:p-9">
                <span className="absolute right-5 top-5 font-mono-tech text-xs text-muted-2">[{String(i + 1).padStart(2, "0")}]</span>
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`rounded-sm px-2.5 py-0.5 font-mono-tech text-[11px] ${
                      p.status === "Live"
                        ? "bg-ok/10 text-ok"
                        : "bg-warn/10 text-warn"
                    }`}
                  >
                    {p.status === "Live" ? "● Live" : "● In Development"}
                  </span>
                  <span className="font-mono-tech text-[11px] text-muted-2">{p.period}</span>
                </div>

                <h3 className="text-2xl font-bold text-text">{p.name}</h3>
                <p className="mt-1 text-muted">{p.tagline}</p>

                <p className="mt-5 text-sm leading-relaxed text-text/80">{p.solution}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 6).map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                  {p.stack.length > 6 && <Tag>+{p.stack.length - 6} more</Tag>}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 font-mono-tech text-[13px] font-semibold text-[#04141A]"
                  >
                    ./case-study <ArrowUpRight size={14} />
                  </Link>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 font-mono-tech text-[13px] text-text hover:border-accent/40"
                  >
                    <Github size={14} /> source
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 font-mono-tech text-[13px] text-text hover:border-accent/40"
                  >
                    deploy <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6 border-t border-border bg-surface-2/50 p-7 md:p-9 lg:border-l lg:border-t-0">
                <div>
                  <p className="mb-3 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-muted-2">
                    $ trace --request-flow
                  </p>
                  <FlowDiagram steps={p.architecture} />
                </div>
                <div>
                  <p className="mb-3 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-muted-2">
                    $ inspect --schema
                  </p>
                  <FlowDiagram steps={p.schema} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
