// app/projects/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern MERN stack e-commerce platform with admin dashboard, payments and authentication.",
    github: "#",
    live: "#",
    icon: "🛒",
  },
  {
    title: "Task Flow Management",
    description: "Professional task management system with real time updates and team collaboration.",
    github: "#",
    live: "#",
    icon: "✅",
  },
  {
    title: "Portfolio Website",
    description: "Animated responsive portfolio website using Next.js and Framer Motion.",
    github: "#",
    live: "#",
    icon: "🎨",
  },
  {
    title: "Company Dashboard",
    description: "Analytics dashboard with charts, authentication and advanced UI.",
    github: "#",
    live: "#",
    icon: "📈",
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 px-5 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Our Portfolio</span>
            <h1 className="text-6xl md:text-7xl font-black gradient-text mt-3">
              Our Projects
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              We have delivered high quality software solutions for startups, businesses and international clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 border border-white/5 hover:border-cyan-500/30"
              >
                <div className="text-5xl mb-4">{project.icon}</div>
                <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
                <p className="text-gray-400 mt-4 leading-relaxed">{project.description}</p>
                <div className="flex gap-4 mt-8">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-black transition-all duration-300 hover:scale-105">
                    <FaGithub className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                    <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}