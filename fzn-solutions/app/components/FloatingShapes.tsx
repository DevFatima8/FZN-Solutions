// app/components/FloatingShapes.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shapes = [
    { className: "w-64 h-64 rounded-full bg-cyan-500 blur-3xl opacity-20", duration: 20, delay: 0, x: "10%", y: "10%" },
    { className: "w-80 h-80 rounded-full bg-purple-500 blur-3xl opacity-20", duration: 25, delay: 2, x: "70%", y: "60%" },
    { className: "w-40 h-40 border-4 border-cyan-400/30 rounded-full", duration: 15, delay: 1, x: "80%", y: "20%" },
    { className: "w-32 h-32 border border-purple-500/40 rounded-2xl", duration: 18, delay: 3, x: "15%", y: "75%" },
    { className: "w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-30", duration: 12, delay: 0.5, x: "85%", y: "85%" },
  ];

  if (dimensions.width === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.className}`}
          initial={{ x: shape.x, y: shape.y }}
          animate={{
            x: [
              shape.x,
              typeof shape.x === 'string' ? (parseFloat(shape.x) + 5) + '%' : shape.x + 5,
              typeof shape.x === 'string' ? (parseFloat(shape.x) - 5) + '%' : shape.x - 5,
              shape.x,
            ],
            y: [
              shape.y,
              typeof shape.y === 'string' ? (parseFloat(shape.y) + 5) + '%' : shape.y + 5,
              typeof shape.y === 'string' ? (parseFloat(shape.y) - 5) + '%' : shape.y - 5,
              shape.y,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;