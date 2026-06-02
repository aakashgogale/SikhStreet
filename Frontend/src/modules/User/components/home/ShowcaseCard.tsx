import { ArrowRight, Building2 } from 'lucide-react'

export function ShowcaseCard() {
  return (
    <div className="mx-4 my-8 rounded-2xl border border-primary/20 bg-orange-50/30 p-5 relative overflow-hidden">
      {/* Background pattern - subtle mesh/dots */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#D05C10 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      
      <div className="relative z-10 flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-primary">
          <Building2 className="h-6 w-6" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
            NOW OPEN · VIRTUAL EXHIBITION
          </span>
          <h3 className="mt-1 text-lg font-bold text-foreground">
            Sikh Heritage Showcase 2026
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed pr-2">
            Walk through a 3D marketplace and discover handcrafted products
          </p>
          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90">
            Enter Hall <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
