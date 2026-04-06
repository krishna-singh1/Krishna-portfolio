import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "../data/portfolio";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-teal-500/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(110, 231, 183, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 183, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-12 shadow-[0_0_20px_rgba(110,231,183,0.1)]">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[1.05] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-10 font-medium"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-16 leading-[1.8]"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-accent text-[#0a0a0f] font-semibold rounded-xl hover:bg-accent-dim transition-all duration-300 text-base shadow-[0_0_30px_rgba(110,231,183,0.2)] hover:shadow-[0_0_40px_rgba(110,231,183,0.3)] hover:scale-105"
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border-2 border-[#2a2a3a] text-gray-300 rounded-xl hover:border-accent/40 hover:text-white hover:bg-accent/5 transition-all duration-300 text-base"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border-2 border-[#2a2a3a] text-gray-300 rounded-xl hover:border-accent/40 hover:text-white hover:bg-accent/5 transition-all duration-300 text-base"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1e1e2a] text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1e1e2a] text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1e1e2a] text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-gray-600 hover:text-accent transition-colors duration-200">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
