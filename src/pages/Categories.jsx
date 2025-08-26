import PageTransition from '../components/PageTransition'
import { Link } from 'react-router-dom'
import { BookOpen, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import Butterfly from '../assets/animals/butterfly.svg'  // your butterfly SVG

const categories = [
  { id:'primary', name:'Primary School' },
  { id:'secondary', name:'Secondary School' },
  { id:'university', name:'University' },
  { id:'novels', name:'Novels' },
  { id:'professional', name:'Professional Certifications' },
  { id:'children', name:'Children’s Books', subs:['Storybooks','Comics','Picture Books'] },
  { id:'religious', name:'Religious & Inspirational', subs:['Bible','Quran','Devotionals','Motivational'] },
  { id:'selfhelp', name:'Self-Help & Personal Development' },
  { id:'science', name:'Science & Technology' },
  { id:'business', name:'Business & Entrepreneurship' },
  { id:'history', name:'History & Culture' },
  { id:'magazines', name:'Magazines & Journals' },
  { id:'arts', name:'Arts & Literature' },
  { id:'testprep', name:'Test Prep & Exams', subs:['WAEC','JAMB','SAT','IELTS','GMAT','GRE'] },
  { id:'free', name:'Free Resources / Open Access' },
  { id:'audiobooks', name:'Audiobooks' },
]

// Animated Butterfly Component
const AnimatedButterfly = ({ delay = 0, scale = 1, startX = 0, startY = 0 }) => (
  <motion.img
    src={Butterfly}
    alt="Flying Butterfly"
    className="w-12 h-12 absolute"
    initial={{ x: startX, y: startY, scale, opacity: 0 }}
    animate={{
      x: [startX, startX + 100, startX - 50, startX + 150, startX],
      y: [startY, startY - 50, startY + 80, startY - 100, startY],
      rotate: [0, 10 + Math.random() * 20, -10 - Math.random() * 15, 20, 0],
      opacity: [0, 0.7 + Math.random() * 0.3, 1, 0.7 + Math.random() * 0.3, 0]
    }}
    transition={{
      duration: 12 + Math.random() * 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
)

export default function Categories() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden min-h-screen mx-auto max-w-7xl px-4 pt-24 pb-16">
        
        {/* Multiple butterflies */}
        {Array.from({ length: 12 }).map((_, i) => (
          <AnimatedButterfly
            key={i}
            delay={i * 1.3}
            scale={0.6 + Math.random() * 0.5}
            startX={Math.random() * window.innerWidth - 100}
            startY={Math.random() * 200 - 100}
          />
        ))}

        <div className="flex items-center justify-between mb-8 relative z-10">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            📚 Explore Categories
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/categories/${cat.id}`} 
              className="group rounded-2xl bg-white dark:bg-slate-800 p-6 shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  {cat.subs ? <Layers size={22}/> : <BookOpen size={22}/> }
                </span>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand-primary transition">
                  {cat.name}
                </h3>
              </div>

              {cat.subs ? (
                <ul className="mt-1 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  {cat.subs.map(s => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="text-brand-primary">•</span> {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Dive into {cat.name} picks.
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
