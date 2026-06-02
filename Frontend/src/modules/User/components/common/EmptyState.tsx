import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center text-center p-8 animate-in fade-in slide-in-from-bottom-4 duration-500", className)}
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-saffron/10 text-saffron mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-charcoal-deep dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-[250px] mb-8 leading-relaxed">
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  )
}
