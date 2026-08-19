import { profile } from "../data/content";
import { StatusDot } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono-tech text-xs text-muted-2 sm:flex-row">
        <span><span className="text-accent">$</span> echo "© {new Date().getFullYear()} {profile.name}"</span>
        <div className="flex items-center gap-2">
          <StatusDot />
          all systems nominal
        </div>
      </div>
    </footer>
  );
}
