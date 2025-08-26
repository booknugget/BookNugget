// src/components/AnimatedOwl.jsx
import { motion } from "framer-motion";

export default function AnimatedOwl({ x = 0, y = 0, scale = 1, delay = 0 }) {
  return (
    <motion.svg
      initial={{ opacity: 0, y, scale }}
      animate={{
        opacity: 1,
        y: [y, y - 10, y + 5, y],
        rotate: [0, -2, 2, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className="absolute"
    >
      <circle cx="32" cy="32" r="30" fill="#fcd34d" /> {/* yellow body */}
      <circle cx="22" cy="28" r="10" fill="white" />
      <circle cx="42" cy="28" r="10" fill="white" />
      <circle cx="22" cy="28" r="5" fill="black" />
      <circle cx="42" cy="28" r="5" fill="black" />
      <path d="M20 44 Q32 54 44 44" stroke="black" strokeWidth="2" fill="none" /> {/* smile */}
    </motion.svg>
  );
}
