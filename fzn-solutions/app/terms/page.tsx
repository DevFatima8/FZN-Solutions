// app/terms/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 px-5 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Legal</span>
            <h1 className="text-5xl md:text-6xl font-black gradient-text mt-3">
              Terms & Conditions
            </h1>
            <div className="mt-10">
              <p className="text-gray-300 leading-relaxed text-lg">
                All projects and services provided by FZN Solutions are protected under professional agreements and development policies. Clients are expected to follow payment and project communication guidelines.
              </p>
              <div className="glass p-8 rounded-2xl mt-8">
                <h2 className="text-2xl font-bold text-cyan-400">Service Agreement</h2>
                <p className="text-gray-300 mt-3">By engaging our services, you agree to our terms including payment schedules, project timelines, and confidentiality clauses.</p>
              </div>
              <div className="glass p-8 rounded-2xl mt-6">
                <h2 className="text-2xl font-bold text-cyan-400">Intellectual Property</h2>
                <p className="text-gray-300 mt-3">All code and designs created by FZN Solutions remain our property until full payment is received, after which full rights are transferred to the client.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}