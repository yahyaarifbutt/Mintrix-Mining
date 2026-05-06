"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ClientAnimations({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier easing
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}