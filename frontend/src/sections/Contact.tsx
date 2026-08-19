import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "../components/ui";
import { profile } from "../data/content";
import { sendContactMessage } from "../lib/api";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      return;
    }
    setStatus("loading");
    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <Section id="contact">
      <Eyebrow>06 · Contact</Eyebrow>
      <SectionTitle>Open a channel.</SectionTitle>
      <p className="mt-4 max-w-lg text-muted">
        Open to backend / SDE internship and full-time roles. Send a message through
        the live API channel — <span className="font-mono-tech text-accent">POST /api/contact</span>.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-text/90 transition-colors hover:border-accent/40"
          >
            <Mail size={16} className="text-accent" /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-text/90 transition-colors hover:border-accent/40"
          >
            <Github size={16} className="text-accent" /> github.com/singhayush48
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-text/90 transition-colors hover:border-accent/40"
          >
            <Linkedin size={16} className="text-accent" /> linkedin.com/in/ayushsingh5266
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="terminal-frame space-y-4 rounded-sm border border-border bg-surface p-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono-tech text-xs text-muted-2">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent/50"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono-tech text-xs text-muted-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent/50"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono-tech text-xs text-muted-2">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={4}
              className="w-full resize-none rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent/50"
              placeholder="What are you reaching out about?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-mono-tech text-sm font-semibold text-[#04141A] transition-opacity disabled:opacity-60"
          >
            {status === "loading" && <Loader2 size={16} className="animate-spin" />}
            {status === "loading" ? "Transmitting…" : "Transmit message"}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-md border border-ok/30 bg-ok/10 px-3.5 py-2.5 text-sm text-ok">
              <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-md border border-warn/30 bg-warn/10 px-3.5 py-2.5 text-sm text-warn">
              <AlertCircle size={16} /> {errorMsg}
            </div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
