import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-48 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-20 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Recognition<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-500 mb-24 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Awards and acknowledgments for engineering impact.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group p-10 rounded-3xl bg-surface-elevated border border-border-subtle hover:border-accent/20 transition-all duration-300 text-center shadow-[0_0_0_1px_rgba(110,231,183,0.03)] hover:shadow-[0_0_20px_rgba(110,231,183,0.08)]"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                <Award size={24} />
              </div>
              <h3
                className="text-lg md:text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {award.title}
              </h3>
              <p className="text-sm text-accent mb-4">{award.org}</p>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed text-center">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
