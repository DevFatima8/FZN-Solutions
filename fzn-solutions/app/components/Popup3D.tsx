// app/components/Popup3D.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Popup3D = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ scale: 0, rotateX: 90, opacity: 0 }}
        animate={{ scale: 1, rotateX: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="text-center perspective-1000"
      >
        <motion.div
          className="relative"
          animate={{
            textShadow: [
              "0 0 20px rgba(0,212,255,0.5)",
              "0 0 40px rgba(139,92,246,0.5)",
              "0 0 20px rgba(0,212,255,0.5)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <h1 className="text-6xl md:text-8xl font-black gradient-text glow p-10 tracking-tighter">
            FZN Solutions
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10"></div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 text-xl md:text-2xl text-gray-300 tracking-wide"
        >
          Future of Web Development
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Popup3D;