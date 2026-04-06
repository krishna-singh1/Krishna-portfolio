import { motion } from "framer-motion";
import { Code2, Server, Cloud, Zap, Database, Settings } from "lucide-react";
import { about } from "../data/portfolio";

const stats = [
  { icon: Code2, label: "6+ Years", desc: "Backend Engineering" },
  { icon: Server, label: "15M+", desc: "Records/Day Processed" },
  { icon: Cloud, label: "7M+", desc: "IoT Devices Monitored" },
  { icon: Zap, label: "3x", desc: "Throughput Improvement" },
];

const roles = [
  {
    icon: Server,
    title: "Backend Engineer",
    desc: "Distributed systems, microservices, event-driven architecture at scale.",
  },
  {
    icon: Database,
    title: "System Designer",
    desc: "DDD, multi-tenant platforms, fault-tolerant pipelines, scalability patterns.",
  },
  {
    icon: Settings,
    title: "Cloud & DevOps",
    desc: "AWS, Kubernetes, Docker, CI/CD — cloud-native infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-48 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-sm uppercase tracking-[0.25em] text-gray-500 font-semibold">
            Introduction
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-20 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Overview<span className="text-accent">.</span>
        </motion.h2>

        {/* Intro text — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-[1.9] mb-10 text-center">
            {about.summary}
          </p>
          <p className="text-base md:text-lg text-gray-500 leading-[1.9] text-center">
            {about.details}
          </p>
        </motion.div>

        {/* Role cards */}
        <div className="grid sm:grid-cols-3 gap-8 mb-32 max-w-5xl mx-auto">
          {roles.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group p-12 rounded-3xl bg-surface-elevated border border-accent/20 hover:border-accent/40 transition-all duration-300 text-center shadow-[0_0_0_1px_rgba(110,231,183,0.05)] hover:shadow-[0_0_30px_rgba(110,231,183,0.1)]"
            >
              <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} />
              </div>
              <h3
                className="text-xl md:text-2xl font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed text-center">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.slice(0, 3).map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className="group p-10 rounded-3xl bg-surface-elevated border border-border-subtle hover:border-accent/20 transition-all duration-300 text-center shadow-[0_0_0_1px_rgba(110,231,183,0.03)] hover:shadow-[0_0_20px_rgba(110,231,183,0.08)]"
            >
              <Icon
                size={28}
                className="text-accent mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className="text-4xl md:text-5xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {label}
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
