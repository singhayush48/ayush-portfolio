import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-6 py-24 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
      <span className="text-accent-dim">$</span>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">{children}<span className="ml-1 text-accent">_</span></h2>
  );
}

export function StatusDot({ tone = "ok" }: { tone?: "ok" | "warn" }) {
  const color = tone === "ok" ? "bg-ok" : "bg-warn";
  return (
    <span className="relative flex h-2 w-2">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${color} opacity-60`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-border bg-surface-2 px-2.5 py-1 font-mono-tech text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-accent">
      {children}
    </span>
  );
}
