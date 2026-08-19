import { ArrowRight, ArrowDown } from "lucide-react";

export default function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-1 md:flex-row md:items-center md:gap-1">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-stretch md:flex-row md:items-center">
          <div className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-center font-mono-tech text-[13px] text-text/90">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center py-1.5 text-accent-dim md:px-1.5 md:py-0">
              <ArrowDown size={14} className="md:hidden" />
              <ArrowRight size={14} className="hidden md:block" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
