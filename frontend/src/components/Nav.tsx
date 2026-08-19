import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/content";
import { StatusDot } from "./ui";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = (hash?: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + (hash ?? ""));
    } else if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-bg/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <button
          onClick={() => goHome()}
          className="flex items-center gap-2 font-mono-tech text-sm font-semibold tracking-tight text-text"
        >
          <span className="text-accent">~/</span>ayush<span className="text-accent">.dev</span><span className="animate-pulse text-accent">_</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => goHome(item.href)}
              className="font-mono-tech text-[13px] text-muted transition-colors hover:text-text"
            >
              ./{item.label.toLowerCase()}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1.5 font-mono-tech text-[11px] text-muted">
            <StatusDot />
            open to work
          </div>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-accent/40 bg-accent-soft px-3.5 py-1.5 font-mono-tech text-[13px] text-accent transition-colors hover:bg-accent/20"
          >
            Resume
          </a>
        </div>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => goHome(item.href)}
                className="rounded-md px-2 py-2.5 text-left font-mono-tech text-sm text-muted hover:bg-surface hover:text-text"
              >
                ./{item.label.toLowerCase()}
              </button>
            ))}
            <Link
              to={profile.resumeUrl}
              target="_blank"
              className="mt-2 rounded-md border border-accent/40 bg-accent-soft px-3 py-2.5 text-center font-mono-tech text-sm text-accent"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
