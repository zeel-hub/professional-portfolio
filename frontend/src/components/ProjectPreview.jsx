import {
  Play,
  CircuitBoard,
  Bot,
  FlaskConical,
  Activity,
  AppWindow,
} from "lucide-react";
import { TrafficLights } from "./TrafficLights";

const icons = { Play, CircuitBoard, Bot, FlaskConical, Activity, AppWindow };

const accentRGB = {
  "accent-blue": "10 132 255",
  "accent-lavender": "175 82 222",
  "accent-indigo": "94 92 230",
  "accent-mint": "102 212 207",
};

// Custom macOS-style mock app preview — no stock photos.
export const ProjectPreview = ({ project, className = "" }) => {
  const Icon = icons[project.icon] || AppWindow;
  const rgb = accentRGB[project.accent] || accentRGB["accent-blue"];

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 120% at 80% 0%, rgb(${rgb} / 0.22), transparent 55%), hsl(var(--bg-3))`,
      }}
      aria-hidden="true"
    >
      {/* mock toolbar */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <TrafficLights />
        <div className="h-5 flex-1 rounded-md bg-ink/[0.04] dark:bg-white/[0.05]" />
      </div>
      {/* mock body: sidebar + content */}
      <div className="flex h-[calc(100%-44px)]">
        <div className="hidden w-1/4 flex-col gap-2 border-r border-border p-3 sm:flex">
          {[0.9, 0.6, 0.7, 0.5, 0.65].map((w, i) => (
            <div
              key={i}
              className="h-2.5 rounded-full bg-ink/[0.06] dark:bg-white/[0.06]"
              style={{ width: `${w * 100}%` }}
            />
          ))}
        </div>
        <div className="relative flex-1 p-5">
          <div
            className="mb-4 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-elevate"
            style={{ background: `rgb(${rgb})` }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-2.5">
            <div className="h-3 w-2/3 rounded-full bg-ink/[0.10] dark:bg-white/[0.12]" />
            <div className="h-2.5 w-1/2 rounded-full bg-ink/[0.06] dark:bg-white/[0.07]" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-14 rounded-xl border border-border bg-bg-2/60"
                style={{
                  boxShadow:
                    i === 0 ? `inset 0 0 0 1.5px rgb(${rgb} / 0.4)` : "none",
                }}
              />
            ))}
          </div>
          <Icon
            className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 opacity-[0.05]"
            style={{ color: `rgb(${rgb})` }}
          />
        </div>
      </div>
    </div>
  );
};
