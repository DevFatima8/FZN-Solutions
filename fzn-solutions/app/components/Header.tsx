"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl" : ""
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16 px-6" : "h-24 px-4"
        }`}>
          <Link href="/" className="group relative">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              <span className="gradient-text">FZN</span>
              <span className="text-white"> Solutions</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white font-medium transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenu(!menu)}
            className="lg:hidden text-3xl p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {menu ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-6 mt-2"
          >
            <div className="glass rounded-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
              <div className="flex flex-col py-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenu(false)}
                      className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;