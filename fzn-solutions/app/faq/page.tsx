// app/faq/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const faqs = [
  { q: "Which technologies do you use?", a: "We use Next.js, React.js, MERN Stack, Tailwind CSS and modern technologies for cutting-edge solutions." },
  { q: "Do you create responsive websites?", a: "Yes, every project is fully responsive for all devices including mobile, tablet, and desktop." },
  { q: "Do you provide maintenance?", a: "Yes, we provide long term support and maintenance services for all our projects." },
  { q: "What is your development process?", a: "Our process includes discovery, design, development, testing, and deployment with regular communication." },
  { q: "Do you work with startups?", a: "Absolutely! We love working with startups and help them build scalable MVPs." },
  { q: "What are your payment terms?", a: "We offer flexible payment plans including project-based or milestone-based payments." },
];

export default function FAQ() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 px-5 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Got Questions?</span>
            <h1 className="text-5xl md:text-6xl font-black gradient-text mt-3">
              Frequently Asked Questions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mt-16"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-cyan-400">{faq.q}</h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}