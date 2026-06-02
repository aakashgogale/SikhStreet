import { Search, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function SearchBar() {
  const navigate = useNavigate()
  
  return (
    <div className="w-full px-4 pt-4 pb-2 bg-white">
      <div className="flex h-[52px] w-full items-center overflow-hidden rounded-full border border-border bg-white shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
        <div className="flex h-full items-center justify-center pl-4 pr-2 text-primary">
          <MapPin className="h-5 w-5" />
        </div>
        <input 
          type="text"
          placeholder="Search products, artisans..."
          className="h-full flex-1 bg-transparent px-2 text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
          onClick={() => navigate('/search')}
          readOnly
        />
        <button 
          onClick={() => navigate('/search')}
          className="flex h-[42px] w-[42px] mr-1.5 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform active:scale-95"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
