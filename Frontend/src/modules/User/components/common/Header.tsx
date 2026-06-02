import { User, ShoppingBag } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '@/modules/User/store/cartStore'

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems())
  const navigate = useNavigate()

  return (
    <header className="w-full bg-white z-40 sticky top-0 shadow-sm border-b border-border/40">
      <div className="flex h-16 items-center justify-between px-4 safe-area-pt max-w-[430px] mx-auto">
        <Link to="/" className="flex items-center justify-center bg-primary/10 h-10 w-10 rounded-full border border-primary/20">
          <div className="text-primary font-bold text-[24px] mt-0.5">
            ੴ
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors active:scale-95">
            <User className="h-5 w-5" />
          </button>
          <button 
            onClick={() => navigate('/cart')}
            className="relative text-foreground hover:text-primary transition-colors active:scale-95"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
