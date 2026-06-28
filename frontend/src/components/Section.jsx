import { motion, useReducedMotion } from "framer-motion";

export const Section = ({ id, className = "", children, full = false }) => {
  const reduce = useReducedMotion();
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 ${
        full ? "min-h-screen flex flex-col justify-center py-28" : "py-24 sm:py-32"
      } ${className}`}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionLabel = ({ children }) => (
  <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-ink-3">
    {children}
  </p>
);

export const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${className}`}
  >
    {children}
  </h2>
);
