import Header from "./components/Header";
import Popup3D from "./components/Popup3D";
import Hero from "./components/Hero";
import FloatingShapes from "./components/FloatingShapes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <FloatingShapes />
      <Header />

      <Popup3D />

      <Hero />

      <section className="max-w-7xl mx-auto py-32 px-5">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Core Capabilities</span>
          <h2 className="text-5xl font-bold gradient-text mt-3">
            What We Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Comprehensive solutions tailored for modern business challenges
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

          <div className="glass p-10 rounded-3xl hover:scale-[1.02] transition-all duration-500 group border border-white/5 hover:border-cyan-500/30">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">Web Development</h3>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Modern responsive websites using Next.js, React, MERN Stack and cutting-edge technologies for ultimate performance.
            </p>
          </div>

          <div className="glass p-10 rounded-3xl hover:scale-[1.02] transition-all duration-500 group border border-white/5 hover:border-purple-500/30">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">UI/UX Design</h3>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Attractive user experiences with smooth animations, premium interfaces and modern layouts that captivate audiences.
            </p>
          </div>

          <div className="glass p-10 rounded-3xl hover:scale-[1.02] transition-all duration-500 group border border-white/5 hover:border-emerald-500/30">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">Business Solutions</h3>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Custom software solutions for startups, companies and enterprise systems that scale with your growth.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}