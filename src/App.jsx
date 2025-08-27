import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Trending from './pages/Trending'
import Authors from './pages/Authors'
import About from './pages/About'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/authors" element={<Authors/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


