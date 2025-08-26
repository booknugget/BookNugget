import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import Elephant from '../assets/animals/elephant.svg'
import Butterfly from '../assets/animals/butterfly.svg'

// Animated Elephant
const AnimatedElephant = ({ delay = 0, scale = 1, startX = 0, startY = 0 }) => (
  <motion.img
    src={Elephant}
    alt="Floating Elephant"
    className="w-16 h-16 absolute opacity-80"
    initial={{ x: startX, y: startY, scale, opacity: 0 }}
    animate={{
      x: [startX, startX + 120, startX - 80, startX + 150, startX],
      y: [startY, startY - 50, startY + 100, startY - 60, startY],
      rotate: [0, 10, -10, 15, 0],
      opacity: [0, 0.8, 1, 0.8, 0]
    }}
    transition={{
      duration: 25 + Math.random() * 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
)

// Animated Butterfly
const AnimatedButterfly = ({ delay = 0, scale = 1, startX = 0, startY = 0 }) => (
  <motion.img
    src={Butterfly}
    alt="Flying Butterfly"
    className="w-10 h-10 absolute"
    initial={{ x: startX, y: startY, scale, opacity: 0 }}
    animate={{
      x: [startX, startX + 80, startX - 60, startX + 100, startX],
      y: [startY, startY - 40, startY + 60, startY - 50, startY],
      rotate: [0, 15, -15, 20, 0],
      opacity: [0, 0.8, 1, 0.8, 0]
    }}
    transition={{
      duration: 15 + Math.random() * 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
)

// Fade-in variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  })
}

export default function About(){
  return (
    <PageTransition>
      <div className="relative overflow-hidden min-h-screen mx-auto max-w-4xl px-6 pt-28 pb-16 bg-gradient-to-br from-white/80 via-slate-50/80 to-white/90 dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-900/90">

        {/* Floating Elephants */}
        {Array.from({ length: 6 }).map((_, i) => (
          <AnimatedElephant
            key={i}
            delay={i * 1.5}
            scale={0.8 + Math.random() * 0.4}
            startX={Math.random() * 400 - 200}
            startY={Math.random() * 300 - 150}
          />
        ))}

        {/* Floating Butterflies */}
        {Array.from({ length: 8 }).map((_, i) => (
          <AnimatedButterfly
            key={i}
            delay={i * 1.2}
            scale={0.6 + Math.random() * 0.4}
            startX={Math.random() * 400 - 200}
            startY={Math.random() * 300 - 150}
          />
        ))}

        <motion.div className="relative z-10 text-center md:text-left max-w-3xl mx-auto" initial="hidden" animate="visible">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white" custom={1} variants={fadeIn}>
            About BookNugget
          </motion.h1>

          <motion.p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300" custom={2} variants={fadeIn}>
            BookNugget is your global bookstore platform—curating knowledge for students, professionals, and lifelong learners.
            Owned by <strong>VibrantRevolve</strong> (Olanrewaju Bobby Dawodu — <em>BobbyC</em>), we aim to deliver delightful reading experiences.
          </motion.p>

          <motion.div className="mt-10 grid gap-6 md:grid-cols-2" custom={3} variants={fadeIn}>
            <motion.div
              className="card p-6 rounded-2xl shadow-lg bg-white dark:bg-slate-800"
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h3 className="font-semibold text-lg mb-2">Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Make high-quality books accessible and engaging for everyone.</p>
            </motion.div>

            <motion.div
              className="card p-6 rounded-2xl shadow-lg bg-white dark:bg-slate-800"
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h3 className="font-semibold text-lg mb-2">What’s Unique</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Curations, audiobooks, global authors, and a calm, animated UI that feels alive.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
