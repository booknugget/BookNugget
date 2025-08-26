import AnimatedButterflies from '../components/AnimatedButterflies'
import AnimatedOwl from '../components/AnimatedOwl' 
import PageTransition from '../components/PageTransition'
import BookCard from '../components/BookCard'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


const demoBooks = [
  { id:1, title:'Intro to AI', author:'A. Ng', price:3500, cover:'/covers/ai.jpg', category:'Science & Technology' },
  { id:2, title:'Think & Grow Rich', author:'Napoleon Hill', price:2000, cover:'/covers/grow.jpg', category:'Self-Help' },
  { id:3, title:'WAEC Math Pack', author:'WAEC Board', price:1200, cover:'/covers/waec.jpg', category:'Test Prep' },
  { id:4, title:"The Innovator's Dilemma", author:'Clayton M. Christensen', price:2800, cover:'/covers/innovator.jpg', category:'Business' },
]

const collections = [
  { title:'Back to School Picks', desc:'Primary & Secondary essentials', href:'/categories?tag=school' },
  { title:'Books for Techies', desc:'AI, programming, engineering', href:'/categories?tag=tech' },
  { title:'Top Business Reads', desc:'Leadership, startup, finance', href:'/categories?tag=business' },
]

export default function Home(){
  return (
    <PageTransition>
<section className="relative overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 pt-28 pb-16 flex flex-col items-center text-center relative">
    <AnimatedButterflies />
    <AnimatedOwl x={200} y={-40} delay={1.5} /> {/* 👈 Owl floats near top */}
    
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      Your Treasure Trove of <span className="text-brand-accent">Books</span>
    </h1>
    <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
      Explore education, tech, business, literature, test prep, and more — from global authors and local voices.
    </p>
    <div className="mt-6 flex flex-wrap gap-3 justify-center">
      <Link to="/categories" className="btn btn-primary">Browse Catalog</Link>
      <Link to="/trending" className="btn btn-accent">Trending Now <ArrowRight className="ml-1" size={18} /></Link>
    </div>
  </div>
</section>


      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">🔥 Trending Now</h2>
          <Link to="/trending" className="text-brand-primary hover:underline">See all</Link>
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-5">
          {demoBooks.map(b=> <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="text-2xl font-bold">🎯 Curated Collections</h2>
        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {collections.map(c=> (
            <Link key={c.title} to={c.href} className="card p-6 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-brand-accent/10" />
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{c.desc}</p>
              <span className="mt-4 inline-flex items-center text-brand-primary font-semibold">Explore <ArrowRight size={16} className="ml-1"/></span>
            </Link>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
