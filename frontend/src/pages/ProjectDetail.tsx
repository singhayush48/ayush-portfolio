import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import { Tag } from "../components/ui";
import FlowDiagram from "../components/FlowDiagram";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="mx-auto max-w-4xl px-6 pb-28 pt-32 md:pt-40">
      <Link
        to="/#projects"
        className="mb-8 inline-flex items-center gap-2 font-mono-tech text-sm text-muted hover:text-text"
      >
        <ArrowLeft size={15} /> Back to projects
      </Link>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-0.5 font-mono-tech text-[11px] ${
              project.status === "Live" ? "bg-ok/10 text-ok" : "bg-warn/10 text-warn"
            }`}
          >
            {project.status === "Live" ? "● Live" : "● In Development"}
          </span>
          <span className="font-mono-tech text-[11px] text-muted-2">{project.period}</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-text md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 text-lg text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 font-mono-tech text-[13px] text-text hover:border-accent/40"
          >
            <Github size={14} /> Repository
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 font-mono-tech text-[13px] font-semibold text-[#04141A]"
          >
            Live demo <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Block title="Problem">{project.problem}</Block>
        <Block title="Solution">{project.solution}</Block>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6 md:p-8">
        <h3 className="mb-4 font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
          Architecture
        </h3>
        <FlowDiagram steps={project.architecture} />
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6 md:p-8">
        <h3 className="mb-4 font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
          Database — conceptual schema
        </h3>
        <FlowDiagram steps={project.schema} />
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6 md:p-8">
        <h3 className="mb-4 font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
          Key Features
        </h3>
        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-text/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6 md:p-8">
        <h3 className="mb-4 font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
          Engineering Decisions
        </h3>
        <div className="space-y-4">
          {project.decisions.map((d) => (
            <p key={d} className="border-l-2 border-accent-dim pl-4 text-sm leading-relaxed text-text/80">
              {d}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="mb-3 font-mono-tech text-xs uppercase tracking-[0.16em] text-muted">{title}</h3>
      <p className="text-sm leading-relaxed text-text/85">{children}</p>
    </div>
  );
}
