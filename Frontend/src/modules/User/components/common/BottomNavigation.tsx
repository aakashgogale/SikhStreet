import { Home, Compass, Heart, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function BottomNavigation() {
  const location = useLocation()
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Discover', path: '/discover' },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
    { icon: User, label: 'Profile', path: '/profile' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-[82px] bg-white border-t border-border/50 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] rounded-t-3xl pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-full items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center w-16 gap-1"
            >
              <item.icon 
                className={cn(
                  "h-6 w-6 transition-all duration-300",
                  isActive ? "text-primary scale-110" : "text-muted-foreground"
                )} 
              />
              <span 
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
