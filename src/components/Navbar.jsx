import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ? saved === 'dark' : prefersDark
    setDark(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
  }

  const glowColor = dark ? "#66CCFF" : "#FFD700" // Blue for dark, Gold for light

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-extrabold text-xl">
          <span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-brand-accent text-white">📚</span>
          <span>BookNugget</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium flex-wrap">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-brand-primary' : 'hover:text-brand-primary transition'}>Home</NavLink>
          <NavLink to="/categories" className={({ isActive }) => isActive ? 'text-brand-primary' : 'hover:text-brand-primary transition'}>Categories</NavLink>
          <NavLink to="/trending" className={({ isActive }) => isActive ? 'text-brand-primary' : 'hover:text-brand-primary transition'}>Trending</NavLink>
          <NavLink to="/authors" className={({ isActive }) => isActive ? 'text-brand-primary' : 'hover:text-brand-primary transition'}>Authors</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-brand-primary' : 'hover:text-brand-primary transition'}>About</NavLink>

          <div className="flex items-center gap-3 ml-4">
            <Link to="/cart" className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Cart">
              <ShoppingCart size={18} />
            </Link>

            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden px-4 pb-4 pt-2 space-y-3 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavLink to="/" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">Home</NavLink>
            <NavLink to="/categories" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">Categories</NavLink>
            <NavLink to="/trending" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">Trending</NavLink>
            <NavLink to="/authors" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">Authors</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">About</NavLink>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Icons */}
      <div className="md:hidden flex items-center justify-center gap-4 p-3 border-t border-slate-200 dark:border-white/10 sticky bottom-0 bg-white dark:bg-slate-950">
        <Link to="/cart" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Cart">
          <ShoppingCart size={18} />
        </Link>

        {/* Pulsating Cat Icon */}
        <motion.div
          className="p-2 rounded-lg flex items-center justify-center cursor-pointer relative"
          animate={{
            y: [0, -5, 0, -5, 0],
            boxShadow: [
              `0 0 0px ${glowColor}`,
              `0 0 8px ${glowColor}`,
              `0 0 15px ${glowColor}`,
              `0 0 8px ${glowColor}`,
              `0 0 0px ${glowColor}`
            ]
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Link to="/cat" aria-label="Cat">🐱</Link>
        </motion.div>
      </div>
    </nav>
  )
}
