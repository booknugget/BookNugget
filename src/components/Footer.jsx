import { Github, Twitter, Instagram } from 'lucide-react'
export default function Footer(){
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} BookNugget · A VibrantRevolve product</p>
        <div className="flex items-center gap-4 text-slate-500">
          <a href="#" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://twitter.com/vibrantrevolve" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="https://instagram.com/vibrantrevolve" aria-label="Instagram"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
