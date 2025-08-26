import { motion } from "framer-motion";

const Butterfly = ({ delay = 0, x = 0, y = 0, scale = 1 }) => (
  <motion.svg
    initial={{ opacity: 0, x, y, scale }}
    animate={{
      opacity: 1,
      x: [x, x + 40, x - 20, x],
      y: [y, y - 50, y + 20, y],
      rotate: [0, 10, -6, 0],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay }}
    width="60"
    height="50"
    viewBox="0 0 26 22"
    fill="none"
    aria-hidden="true"
    className="drop-shadow-lg"
  >
    <path
      d="M13 11c3-7 8-10 12-9-1 5-5 8-9 9 4 1 8 4 9 9-4 1-9-2-12-9Z"
      fill="#F59E0B"
    />
    <path
      d="M13 11C10 4 5 1 1 2c1 5 5 8 9 9-4 1-8 4-9 9 4 1 9-2 12-9Z"
      fill="#4F46E5"
    />
  </motion.svg>
);

export default function AnimatedButterflies({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Butterfly delay={0} x={-40} y={40} scale={1.0} />
      <Butterfly delay={2.2} x={80} y={120} scale={1.2} />
      <Butterfly delay={4.1} x={220} y={-20} scale={1.1} />
      <Butterfly delay={6.5} x={-120} y={-60} scale={0.9} />
      <Butterfly delay={8.0} x={160} y={60} scale={1.0} />
    </div>
  );
}
