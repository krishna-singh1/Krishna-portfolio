import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-48 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-20 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Projects<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-500 mb-24 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Systems I've designed, built, and shipped to production.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group p-10 md:p-12 rounded-3xl bg-surface-elevated border border-border-subtle hover:border-accent/20 transition-all duration-300 flex flex-col shadow-[0_0_0_1px_rgba(110,231,183,0.03)] hover:shadow-[0_0_30px_rgba(110,231,183,0.1)]"
            >
              <div className="flex items-start justify-between mb-6">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-white group-hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:text-accent hover:bg-accent/5 transition-all duration-300 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:text-accent hover:bg-accent/5 transition-all duration-300 hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-400 leading-[1.8] mb-8 flex-grow">
                {project.description}
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp size={16} className="text-accent" />
                  <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Key Metrics
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {project.achievements.map((a) => (
                    <div
                      key={a}
                      className="text-xs md:text-sm text-accent/80 bg-accent/5 rounded-xl px-4 py-3 border border-accent/10"
                    >
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-6 border-t border-border-subtle">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs md:text-sm text-gray-500 bg-[#0a0a0f] rounded-lg px-3.5 py-2 border border-border-subtle"
                  >
                    {tech}
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
