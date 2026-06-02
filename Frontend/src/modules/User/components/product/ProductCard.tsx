import { Heart, Plus, Star, Check } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/modules/User/store/cartStore'
import { useState } from 'react'

export interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  creator: string
  rating?: number
  reviews?: number
  isAuthentic?: boolean
  isNew?: boolean
  className?: string
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  creator,
  rating = 4.8,
  reviews = 124,
  className
}: ProductCardProps) {
  const navigate = useNavigate()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    
    useCartStore.getState().addItem({
      id,
      title,
      price,
      image,
      creator,
    })
    
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 1500)
  }

  return (
    <div 
      className={cn("group flex flex-col rounded-2xl bg-white border border-border overflow-hidden transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]", className)}
    >
      <div className="relative aspect-[4/5] w-full bg-muted/30 cursor-pointer overflow-hidden" onClick={() => navigate(`/product/${id}`)}>
        {/* Wishlist Button */}
        <button className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-muted-foreground transition-colors hover:text-primary hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>

        {/* SALE Badge */}
        {(originalPrice) && (
          <div className="absolute left-2 top-2 z-10 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider shadow-sm">
            SALE
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-1 p-3">
        <Link to={`/product/${id}`} className="font-semibold leading-tight text-foreground line-clamp-2 hover:underline text-[13px]">
          {title}
        </Link>
        
        <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
          By <span className="text-primary font-medium">{creator}</span>
        </div>

        <div className="flex items-center gap-1 mt-0.5">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-[11px] font-medium text-foreground">{rating}</span>
          <span className="text-[10px] text-muted-foreground">({reviews})</span>
        </div>
        
        <div className="mt-1 flex items-end justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-bold text-foreground">₹{price}</span>
              {originalPrice && (
                <span className="text-[11px] font-medium text-muted-foreground line-through">₹{originalPrice}</span>
              )}
            </div>
          </div>

          <button 
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all active:scale-90",
              isAdded ? "bg-green-600 scale-110" : "bg-primary"
            )}
            onClick={handleAddToCart}
          >
            {isAdded ? <Check className="h-4 w-4" /> : <Plus className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  )
}
