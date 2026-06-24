import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function MediaPlaceholder({
  label = "Mídia",
  aspect = "aspect-video",
  className,
  icon,
}: {
  label?: string;
  aspect?: string;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl hairline bg-bg-elev",
        aspect,
        className,
      )}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-fg-dim">
        {icon ?? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m10 9 5 3-5 3z" fill="currentColor" />
          </svg>
        )}
        <span className="text-[10px] uppercase tracking-[0.3em]">{label}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
    </div>
  );
}
