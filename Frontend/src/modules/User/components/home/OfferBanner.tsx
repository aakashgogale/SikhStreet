export function OfferBanner() {
  return (
    <div className="mx-5 mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent p-6 text-white shadow-md relative">
      <div className="relative z-10">
        <span className="mb-1 inline-block rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
          Limited Time Offer
        </span>
        <h3 className="mb-1 text-xl font-bold leading-tight">Flat 20% Off on Spiritual Gift Sets</h3>
        <p className="text-sm text-white/90">Use code: HERITAGE20</p>
      </div>
      {/* Decorative Elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-black/10 blur-xl"></div>
    </div>
  )
}
