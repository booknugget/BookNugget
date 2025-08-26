import PageTransition from '../components/PageTransition'
import BookCard from '../components/BookCard'
import { motion } from 'framer-motion'
import Eagle from '../assets/animals/eagle.svg' // place your eagle SVG here

const demo = [
  { id:11, title:'Atomic Habits', author:'James Clear', price:2500, cover:'/covers/atomic.jpg', category:'Self-Help' },
  { id:12, title:'Clean Code', author:'Robert C. Martin', price:4000, cover:'/covers/cleancode.jpg', category:'Science & Technology' },
  { id:13, title:'Zero to One', author:'Peter Thiel', price:3200, cover:'/covers/zto.jpg', category:'Business' },
  { id:14, title:'The Alchemist', author:'Paulo Coelho', price:1800, cover:'/covers/alchemist.jpg', category:'Novels' },
]

// Animated Eagle Component
const AnimatedEagle = ({ delay = 0, scale = 1, startX = 0, startY = 0 }) => (
  <motion.img
    src={Eagle}
    alt="Flying Eagle"
    className="w-16 h-16 absolute"
    initial={{ x: startX, y: startY, scale, opacity: 0 }}
    animate={{
      x: [startX, startX + 150, startX - 100, startX + 200, startX],
      y: [startY, startY - 80, startY + 100, startY - 120, startY],
      rotate: [0, 20, -20, 25, 0],
      opacity: [0, 0.7, 1, 0.7, 0]
    }}
    transition={{
      duration: 18 + Math.random() * 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
)

export default function Trending(){
  return (
    <PageTransition>
      <div className="relative overflow-hidden min-h-screen mx-auto max-w-7xl px-4 pt-24 pb-16">
        
        {/* Multiple Eagles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <AnimatedEagle
            key={i}
            delay={i * 1.8}
            scale={0.8 + Math.random() * 0.5}
            startX={Math.random() * window.innerWidth - 150}
            startY={Math.random() * 200 - 100}
          />
        ))}

        <h1 className="text-3xl font-extrabold relative z-10">Trending Books</h1>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10">
          {demo.map(b=> <BookCard key={b.id} book={b} />)}
        </div>
      </div>
    </PageTransition>
  )
}
