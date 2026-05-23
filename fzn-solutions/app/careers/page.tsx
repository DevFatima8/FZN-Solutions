// app/careers/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const jobs = [
  { title: "Frontend Developer", type: "Full-time", location: "Remote", icon: "💻", skills: "React.js, Next.js, Tailwind CSS" },
  { title: "Backend Developer", type: "Full-time", location: "Remote", icon: "⚙️", skills: "Node.js, Express, MongoDB" },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", icon: "🎨", skills: "Figma, Adobe XD, User Research" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", icon: "🚀", skills: "AWS, Docker, CI/CD" },
];

export default function Careers() {
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
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Join Our Team</span>
            <h1 className="text-6xl md:text-7xl font-black gradient-text mt-3">
              Careers
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              Join FZN Solutions and become part of an innovative software company building modern digital experiences. We are always looking for talented developers, designers and creative thinkers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-20"
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group"
              >
                <div className="text-5xl mb-4">{job.icon}</div>
                <h2 className="text-3xl font-bold tracking-tight">{job.title}</h2>
                <div className="flex gap-3 mt-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">{job.type}</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">{job.location}</span>
                </div>
                <p className="text-gray-400 mt-4">Skills: {job.skills}</p>
                <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-all duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}