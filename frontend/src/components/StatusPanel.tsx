import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StatusDot } from "./ui";

type LogLine = { method: string; path: string; status: number; ms: number };

const LOG_POOL: LogLine[] = [
  { method: "GET", path: "/api/projects", status: 200, ms: 41 },
  { method: "POST", path: "/api/auth/login", status: 200, ms: 118 },
  { method: "GET", path: "/api/messages", status: 200, ms: 37 },
  { method: "POST", path: "/api/contact", status: 201, ms: 92 },
  { method: "GET", path: "/api/conversations", status: 200, ms: 54 },
  { method: "POST", path: "/api/messages", status: 201, ms: 76 },
];

export default function StatusPanel() {
  const [lines, setLines] = useState<LogLine[]>(LOG_POOL.slice(0, 4));

  useEffect(() => {
    const id = setInterval(() => {
      setLines((prev) => {
        const next = LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
        return [...prev.slice(1), next];
      });
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="terminal-frame w-full max-w-md overflow-hidden rounded-sm border border-border bg-surface shadow-[0_0_60px_-15px_rgba(184,245,92,0.14)]"
    >
      <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4f5c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4f5c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4f5c]" />
        </div>
        <span className="font-mono-tech text-[11px] text-muted-2">api-monitor — live</span>
        <span className="w-8" />
      </div>

      <div className="px-4 py-4 font-mono-tech text-[13px]">
        <div className="mb-3 flex items-center gap-2 text-ok">
          <StatusDot />
          <span className="tracking-wide">SYSTEM ONLINE</span>
          <span className="ml-auto text-[10px] text-muted-2">BUILD 2026.08</span>
        </div>

        <div className="space-y-1.5">
          {lines.map((l, i) => (
            <motion.div
              key={`${l.path}-${i}-${l.ms}`}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 text-muted"
            >
              <span
                className={`w-10 shrink-0 ${
                  l.method === "GET" ? "text-accent" : "text-warn"
                }`}
              >
                {l.method}
              </span>
              <span className="flex-1 truncate text-text/80">{l.path}</span>
              <span className="text-ok">{l.status}</span>
              <span className="w-12 text-right text-muted-2">{l.ms}ms</span>
            </motion.div>
          ))}
        </div>

        <div className="my-3 h-px bg-border" />

        <div className="flex items-center justify-between text-muted-2">
          <span>PostgreSQL</span>
          <span className="text-ok">CONNECTED</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-muted-2">
          <span>REST API</span>
          <span className="text-ok">ONLINE</span>
        </div>
      </div>
    </motion.div>
  );
}
