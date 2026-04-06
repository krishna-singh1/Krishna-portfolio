import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20 text-center"
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
