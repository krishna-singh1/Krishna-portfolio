import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";

function ExperienceCard({ job }) {
  return (
    <div className="p-8 lg:p-10 rounded-3xl bg-surface-elevated border border-border-subtle hover:border-accent/20 transition-all duration-300 w-full text-center shadow-[0_0_0_1px_rgba(110,231,183,0.03)] hover:shadow-[0_0_20px_rgba(110,231,183,0.08)]">
      <h3
        className="text-xl md:text-2xl font-semibold text-white mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {job.role}
      </h3>
      <p className="text-accent text-base md:text-lg font-medium mb-8">
        {job.company}
      </p>

      <ul className="space-y-4 mb-8 text-left inline-block">
        {job.bullets.map((bullet, j) => (
          <li
            key={j}
            className="flex gap-4 text-sm md:text-base text-gray-400 leading-[1.8]"
          >
            <span className="text-accent mt-1 shrink-0">•</span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2.5 pt-6 border-t border-border-subtle justify-center">
        {job.stack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 text-xs md:text-sm text-accent/80 bg-accent/5 rounded-lg border border-accent/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-48 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-20 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Work Experience<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-500 mb-24 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Building impactful systems across product companies and scale.
        </motion.p>

        {/* Desktop: centered timeline */}
        <div className="hidden lg:block relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

          <div className="flex flex-col gap-24">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex items-start"
                >
                  {/* Center dot — absolutely positioned */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10">
                    <div className="w-12 h-12 rounded-full bg-surface-elevated border-[3px] border-accent flex items-center justify-center shadow-[0_0_24px_rgba(110,231,183,0.2)]">
                      <Briefcase size={16} className="text-accent" />
                    </div>
                  </div>

                  {isLeft ? (
                    <>
                      {/* Card on the left */}
                      <div className="w-[calc(50%-40px)] pr-4">
                        <ExperienceCard job={job} />
                      </div>
                      {/* Spacer for center */}
                      <div className="w-[80px] shrink-0" />
                      {/* Period on the right */}
                      <div className="w-[calc(50%-40px)] pl-4 pt-5">
                        <span className="text-sm text-gray-500">
                          {job.period}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Period on the left */}
                      <div className="w-[calc(50%-40px)] pr-4 pt-5 text-right">
                        <span className="text-sm text-gray-500">
                          {job.period}
                        </span>
                      </div>
                      {/* Spacer for center */}
                      <div className="w-[80px] shrink-0" />
                      {/* Card on the right */}
                      <div className="w-[calc(50%-40px)] pl-4">
                        <ExperienceCard job={job} />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tablet & Mobile: single column with left timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface-elevated border-[3px] border-accent flex items-center justify-center z-10">
                  <Briefcase size={14} className="text-accent" />
                </div>

                <span className="text-xs text-gray-500 mb-3 block">
                  {job.period}
                </span>
                <ExperienceCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
