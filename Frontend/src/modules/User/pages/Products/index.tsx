import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

export default function Products() {
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Search Header */}
      <header className="sticky top-0 z-40 bg-background/90 px-4 py-3 backdrop-blur-md border-b border-border">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-full border border-border bg-muted pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card">
            <Filter size={18} />
          </button>
        </div>
      </header>

      {/* Results Grid - Infinite scroll wrapper */}
      <div className="mt-4 grid grid-cols-2 gap-4 px-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="aspect-square bg-muted"></div>
            <div className="p-3">
              <h4 className="line-clamp-2 text-sm font-semibold">Premium Gurbani Player (Pre-loaded)</h4>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-bold">₹1,999</span>
                <span className="text-xs line-through text-muted-foreground">₹2,499</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Loader */}
      <div className="my-6 flex justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
      </div>
    </div>
  )
}
