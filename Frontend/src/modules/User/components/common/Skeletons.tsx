import { cn } from '@/lib/utils'

export function ProductSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 rounded-[1.25rem] bg-card p-3 shadow-sm border border-border/50", className)}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted animate-pulse"></div>
      <div className="flex flex-col gap-2 px-1">
        <div className="h-3 w-1/2 rounded bg-muted animate-pulse"></div>
        <div className="h-4 w-3/4 rounded bg-muted animate-pulse"></div>
        <div className="h-5 w-1/3 rounded bg-muted animate-pulse mt-1"></div>
      </div>
    </div>
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  )
}

export function HorizontalListSkeleton() {
  return (
    <div className="flex gap-4 overflow-x-hidden px-5 pb-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="w-[260px] shrink-0">
          <ProductSkeleton />
        </div>
      ))}
    </div>
  )
}
