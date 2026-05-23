// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Careers", href: "/careers" },
    ],
    support: [
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialIcons = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-purple-500/5 to-transparent"></div>
      
      {/* Animated Shape */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="relative border-t border-white/10 glass backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link href="/" className="inline-block">
                <h2 className="text-4xl font-black tracking-tight">
                  <span className="gradient-text">FZN</span>
                  <span className="text-white"> Solutions</span>
                </h2>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                We create modern digital products and scalable software solutions for businesses worldwide.
              </p>
              <div className="flex gap-4 pt-4">
                {socialIcons.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Company
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-500 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Support
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-500 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Contact
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:fznsolutions@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all duration-300">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <span className="break-all">fznsolutions@gmail.com</span>
                </a>
                <a
                  href="tel:+923000000000"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all duration-300">
                    <FaPhoneAlt className="w-4 h-4" />
                  </div>
                  <span>+92 300 0000000</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <span>Pakistan / Remote</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-20 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} FZN Solutions. All rights reserved. Built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;