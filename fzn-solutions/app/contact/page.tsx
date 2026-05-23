import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center px-5 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-12 max-w-2xl w-full text-center border border-white/10 shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-black gradient-text">Contact Us</h1>
            <p className="text-gray-400 mt-4">Get in touch with us for your next project</p>
            
            <div className="mt-12 space-y-8 text-left">
              <div className="flex items-center gap-5 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-xl font-medium text-cyan-400">fznsolutions@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-xl font-medium text-purple-400">+92 300 0000000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-medium">Pakistan / Remote</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Business Hours</p>
                  <p className="text-lg font-medium">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}