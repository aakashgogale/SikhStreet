import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface StoryCardProps {
  id: string
  title: string
  subtitle: string
  image: string
  author?: string
  className?: string
}

export function StoryCard({ id, title, subtitle, image, author, className }: StoryCardProps) {
  return (
    <Link to={`/story/${id}`}>
      <div 
        className={cn("group relative overflow-hidden rounded-3xl bg-muted aspect-[4/5] flex flex-col justify-end p-6", className)}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="relative z-10 flex flex-col gap-2 text-white">
          {author && (
            <span className="text-xs font-semibold uppercase tracking-wider text-saffron-light">
              By {author}
            </span>
          )}
          <h3 className="text-2xl font-bold leading-tight">{title}</h3>
          <p className="text-sm text-white/80 line-clamp-2">{subtitle}</p>
          
          <div 
            className="mt-2 flex items-center gap-2 text-sm font-semibold text-saffron-light opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
          >
            Read Story <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
