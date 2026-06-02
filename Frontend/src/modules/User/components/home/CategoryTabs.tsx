import { cn } from '@/lib/utils'

interface CategoryTabsProps {
  categories: string[]
  activeCategory: string
  onSelect: (category: string) => void
}

export function CategoryTabs({ categories, activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar px-4">
      <div className="flex gap-6 border-b border-border/40 pb-0.5">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={cn(
                "relative whitespace-nowrap pb-3 text-[14px] transition-all font-medium",
                isActive
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
              {/* Animated bottom indicator */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  )
}
