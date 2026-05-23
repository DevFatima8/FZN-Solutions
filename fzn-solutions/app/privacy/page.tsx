// app/privacy/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <div className="mt-10 prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                FZN Solutions respects the privacy of all users and clients. We ensure secure handling of client data and project information. Your information is never shared with third parties without permission.
              </p>
              <div className="glass p-8 rounded-2xl mt-8">
                <h2 className="text-2xl font-bold text-cyan-400">Data Protection</h2>
                <p className="text-gray-300 mt-3">We implement industry-standard security measures to protect your data from unauthorized access.</p>
              </div>
              <div className="glass p-8 rounded-2xl mt-6">
                <h2 className="text-2xl font-bold text-cyan-400">Information Collection</h2>
                <p className="text-gray-300 mt-3">We only collect necessary information to provide our services and improve user experience.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}