import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-48 px-6 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/4 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.25em] text-gray-500 font-semibold mb-6 block">
            Get in Touch
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1 w-full max-w-xl mx-auto"
          >
            <div className="p-10 md:p-12 lg:p-14 rounded-3xl bg-surface-elevated border border-border-subtle shadow-[0_0_0_1px_rgba(110,231,183,0.05)]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className="w-full px-5 py-4 bg-[#0a0a0f] border border-border-subtle rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-3"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className="w-full px-5 py-4 bg-[#0a0a0f] border border-border-subtle rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-3"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    rows="6"
                    className="w-full px-5 py-4 bg-[#0a0a0f] border border-border-subtle rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-accent text-[#0a0a0f] font-semibold rounded-xl hover:bg-accent-dim transition-all duration-300 text-base shadow-[0_0_30px_rgba(110,231,183,0.2)] hover:shadow-[0_0_40px_rgba(110,231,183,0.3)] hover:scale-[1.02] group"
                >
                  <span>Send</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex items-center justify-center mx-auto"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      style={{
                        transform: `rotateY(${i * 45}deg) translateZ(150px)`,
                      }}
                    >
                      <div className="w-full h-full border-2 border-accent/20 rounded-full" />
                    </motion.div>
                  ))}

                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`h-${i}`}
                      className="absolute left-0 right-0"
                      style={{
                        top: `${(i + 1) * 16.66}%`,
                      }}
                    >
                      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                    </motion.div>
                  ))}

                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-accent/10 blur-3xl"
                  />

                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={`dot-${i}`}
                      className="absolute w-1 h-1 bg-accent rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1.5, 0.5],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border-2 border-accent/30 rounded-full"
              />

              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8 border border-accent/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
