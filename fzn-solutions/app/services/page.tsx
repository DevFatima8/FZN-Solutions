// app/services/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const services = [
  { name: "Frontend Development", icon: "🎨", description: "Modern, responsive interfaces with React, Next.js, and Tailwind CSS" },
  { name: "Backend Development", icon: "⚙️", description: "Scalable APIs and server-side logic with Node.js, Express, and databases" },
  { name: "Full Stack MERN", icon: "🔥", description: "Complete MERN stack applications with authentication and real-time features" },
  { name: "Next.js Websites", icon: "🚀", description: "Fast, SEO-optimized websites with server-side rendering and static generation" },
  { name: "UI/UX Design", icon: "✨", description: "User-centered designs with smooth animations and intuitive interfaces" },
  { name: "Business Dashboards", icon: "📊", description: "Data visualization and analytics dashboards for business intelligence" },
  { name: "Admin Panels", icon: "🔒", description: "Secure and feature-rich admin interfaces for content management" },
  { name: "API Integration", icon: "🔌", description: "Seamless third-party API integration and custom API development" },
  { name: "Database Management", icon: "🗄️", description: "Efficient database design, optimization, and management" },
  { name: "Website Optimization", icon: "⚡", description: "Performance tuning, SEO, and Core Web Vitals optimization" },
];

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 px-5 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h1 className="text-6xl md:text-7xl font-black gradient-text mt-3">
              Our Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6">
              We provide professional development services with modern technologies and premium user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-500 border border-white/5 hover:border-cyan-500/30"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
                <h3 className="text-2xl font-bold tracking-tight">{service.name}</h3>
                <p className="text-gray-400 leading-relaxed mt-3">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}