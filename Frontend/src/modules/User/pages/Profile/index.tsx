import { ChevronRight, Package, Heart, MapPin, Wallet, HeadphonesIcon, Settings, LogOut } from 'lucide-react'
import { Header } from '@/modules/User/components/common/Header'

const MENU_ITEMS = [
  { icon: Package, label: 'My Orders', desc: 'Track, return, or buy things again' },
  { icon: Heart, label: 'Wishlist', desc: 'Your saved spiritual items' },
  { icon: MapPin, label: 'Saved Addresses', desc: 'Manage your delivery locations' },
  { icon: Wallet, label: 'Wallet & Rewards', desc: 'Check your balance and points' },
  { icon: HeadphonesIcon, label: 'Help & Support', desc: 'Get help with your orders' },
  { icon: Settings, label: 'Settings', desc: 'App preferences and account' },
]

export default function Profile() {
  return (
    <div className="flex flex-col bg-background min-h-full">
      <Header />
      
      {/* Profile Header */}
      <div className="bg-card p-6 border-b border-border/50 shadow-sm flex items-center gap-5">
        <div className="h-20 w-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary text-3xl font-bold">
          H
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-foreground">Harpreet Singh</h1>
          <p className="text-sm font-medium text-muted-foreground mt-0.5">harpreet@example.com</p>
          <div className="mt-2 inline-flex items-center gap-1 bg-accent/20 px-2.5 py-1 rounded-md self-start">
            <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">Premium Member</span>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="flex-1 p-5">
        <div className="flex flex-col gap-3">
          {MENU_ITEMS.map((item) => (
            <button key={item.label} className="flex items-center justify-between bg-card p-4 rounded-2xl border border-border/50 shadow-sm hover:border-primary/30 transition-colors active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-bold text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          ))}
          
          <button className="flex items-center justify-between bg-red-50 dark:bg-red-950/20 p-4 rounded-2xl border border-red-100 dark:border-red-900/30 mt-4 active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400">
                <LogOut className="h-5 w-5" />
              </div>
              <span className="font-bold text-red-600 dark:text-red-400">Log Out</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
