import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-48 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Centered heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-20 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Tech Stack<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-500 mb-24 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Technologies I work with to build production-grade systems.
        </motion.p>

        {/* Skills grid - 2 columns for more space */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-10 md:p-12 rounded-3xl bg-surface-elevated border border-border-subtle hover:border-accent/20 transition-all duration-300 shadow-[0_0_0_1px_rgba(110,231,183,0.03)] hover:shadow-[0_0_20px_rgba(110,231,183,0.08)]"
            >
              <h3 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-8">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2.5 text-sm md:text-base text-gray-400 bg-[#0a0a0f] rounded-xl border border-border-subtle hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
