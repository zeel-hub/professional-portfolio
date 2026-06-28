import { motion, useReducedMotion } from "framer-motion";
import { Terminal, GitBranch, CheckCircle2, Cpu, Zap } from "lucide-react";
import { TrafficLights } from "./TrafficLights";

const pipeline = [
  { label: "Trigger", icon: Zap, color: "10 132 255" },
  { label: "Test", icon: CheckCircle2, color: "102 212 207" },
  { label: "Build", icon: Cpu, color: "94 92 230" },
  { label: "Deploy", icon: GitBranch, color: "175 82 222" },
];

export const HeroIllustration = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-md select-none">
      {/* ambient glow */}
      <div
        className="absolute -inset-10 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 60% 40%, rgba(10,132,255,0.25), transparent 70%), radial-gradient(40% 40% at 30% 80%, rgba(175,82,222,0.22), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main window */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass overflow-hidden rounded-2xl shadow-float"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <TrafficLights />
          <div className="flex items-center gap-2 text-ink-3">
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-display text-xs font-medium tracking-wide">
              automation — pipeline
            </span>
          </div>
        </div>

        <div className="space-y-5 p-6">
          {/* pipeline nodes */}
          <div className="flex items-center justify-between">
            {pipeline.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="flex flex-1 items-center">
                  <motion.div
                    initial={reduce ? false : { opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.35 + i * 0.15,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="grid h-11 w-11 place-items-center rounded-2xl text-white shadow-elevate"
                      style={{ background: `rgb(${node.color})` }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-medium text-ink-2">
                      {node.label}
                    </span>
                  </motion.div>
                  {i < pipeline.length - 1 && (
                    <div className="mx-1 mb-5 h-px flex-1 bg-gradient-to-r from-border to-border" />
                  )}
                </div>
              );
            })}
          </div>

          {/* terminal */}
          <div className="rounded-xl border border-border bg-bg/70 p-4 font-mono text-[12.5px] leading-relaxed">
            <p className="text-ink-3">$ run upgrade --fleet all</p>
            <p className="text-mint">✓ 128 devices · 0 failures</p>
            <p className="text-blue">→ 4h manual → 6m automated</p>
            <p className="text-ink-3">
              <span className="inline-block h-3.5 w-2 translate-y-0.5 bg-ink/60" />
            </p>
          </div>
        </div>
      </motion.div>

      {/* floating mini card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass absolute -bottom-7 -left-6 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-float sm:flex"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-mint/15 text-mint">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div className="pr-1">
          <p className="text-xs font-semibold leading-tight">Tests green</p>
          <p className="text-[11px] text-ink-3">CI · feedback in seconds</p>
        </div>
      </motion.div>
    </div>
  );
};
