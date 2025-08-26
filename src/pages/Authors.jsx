import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import Fox from '../assets/animals/fox.svg' // add your fox SVG here

const authors = [
  { name:'Chimamanda Ngozi Adichie', note:'Half of a Yellow Sun' },
  { name:'James Clear', note:'Atomic Habits' },
  { name:'Robert C. Martin', note:'Clean Code' },
  { name:'Paulo Coelho', note:'The Alchemist' },
  { name:'Yuval Noah Harari', note:'Sapiens' },
]

// Animated Fox component
const AnimatedFox = ({ delay = 0, scale = 1, startX = 0, startY = 0 }) => (
  <motion.img
    src={Fox}
    alt="Floating Fox"
    className="w-16 h-16 absolute"
    initial={{ x: startX, y: startY, scale, opacity: 0 }}
    animate={{
      x: [startX, startX + 120, startX - 80, startX + 100, startX],
      y: [startY, startY - 60, startY + 90, startY - 50, startY],
      rotate: [0, 10, -10, 15, 0],
      opacity: [0, 0.8, 1, 0.8, 0]
    }}
    transition={{
      duration: 18 + Math.random() * 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
)

export default function Authors(){
  return (
    <PageTransition>
      <div className="relative overflow-hidden min-h-screen mx-auto max-w-7xl px-4 pt-24 pb-16">
        
        {/* Multiple floating foxes */}
        {Array.from({ length: 4 }).map((_, i) => (
          <AnimatedFox
            key={i}
            delay={i * 2}
            scale={0.8 + Math.random() * 0.4}
            startX={Math.random() * 300 - 150}
            startY={Math.random() * 200 - 100}
          />
        ))}

        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold">Author Spotlight</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            A rotating global selection (your AI fetch can expand this).
          </p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {authors.map(a=> (
              <div key={a.name} className="card p-5">
                <h3 className="font-bold">{a.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
