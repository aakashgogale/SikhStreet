import { cn } from '@/lib/utils'

const CATEGORIES = [
  'All',
  'Books',
  'Kara',
  'Turbans',
  'Rumala Sahib',
  'Gurbani Art',
  'Gifts',
  'Accessories'
]

export function CategoryChips() {
  return (
    <div className="flex items-center gap-3 overflow-x-auto px-5 py-2 no-scrollbar">
      {CATEGORIES.map((category, index) => (
        <button
          key={category}
          className={cn(
            "whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all shadow-sm border",
            index === 0
              ? "bg-foreground text-background border-transparent"
              : "bg-card text-foreground border-border/50 hover:bg-accent/10 active:scale-95"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
