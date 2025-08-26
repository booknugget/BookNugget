import { Star } from 'lucide-react'
export default function BookCard({ book }){
  return (
    <article className="card group p-4">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5">
        {book.cover ? <img src={book.cover} alt={book.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" /> : <div className="h-full w-full skeleton" />}
      </div>
      <div className="mt-3">
        <h3 className="font-semibold leading-snug line-clamp-2">{book.title}</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{book.author}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="badge">{book.category || "General"}</span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" /><span className="text-xs">{book.rating ?? "4.8"}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-extrabold text-lg">₦{book.price ?? 0}</span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </article>
  )
}
