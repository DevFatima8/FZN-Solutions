// app/about/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "100+", label: "Happy Clients", icon: "🌟" },
    { value: "Worldwide", label: "Global Reach", icon: "🌍" },
    { value: "Modern", label: "Tech Stack", icon: "⚡" },
  ];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className="pt-40 pb-20 px-5 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h1 className="text-6xl md:text-7xl font-black gradient-text mt-3">
              About FZN Solutions
            </h1>
            <div className="max-w-3xl mt-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                FZN Solutions is a fast growing software company delivering high quality web applications and business solutions. 
                We specialize in MERN Stack, Next.js, frontend development, backend systems, UI/UX and enterprise applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass p-10 rounded-3xl text-center group hover:border-cyan-500/30 transition-all duration-500">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h2 className="text-4xl font-bold gradient-text">{stat.value}</h2>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}