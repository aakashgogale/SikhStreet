import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const HERO_IMAGES = [
  '/hero-bg.png',
  '/hero_bg_2_1780393251670.png',
  '/hero_bg_3_1780393269458.png'
]

export function HeroBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col w-full">
      {/* Infinite Looping Marquee */}
      <div className="bg-[#1A1A1A] w-full py-2.5 border-y border-white/10 flex overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* We repeat the text block twice to make the loop seamless */}
          <div className="flex items-center text-[10.5px] font-bold tracking-[0.22em] text-white/90 uppercase pr-4">
            <span className="mx-4">✦ SIKH SPIRITUAL ESSENTIALS</span>
            <span className="mx-4">✦ AUTHENTIC ARTISTRY</span>
            <span className="mx-4">✦ PREMIUM HERITAGE</span>
            <span className="mx-4">✦ WORLDWIDE SHIPPING</span>
          </div>
          <div className="flex items-center text-[10.5px] font-bold tracking-[0.22em] text-white/90 uppercase pr-4">
            <span className="mx-4">✦ SIKH SPIRITUAL ESSENTIALS</span>
            <span className="mx-4">✦ AUTHENTIC ARTISTRY</span>
            <span className="mx-4">✦ PREMIUM HERITAGE</span>
            <span className="mx-4">✦ WORLDWIDE SHIPPING</span>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="relative h-[420px] w-full overflow-hidden bg-black rounded-b-[32px] shadow-sm">
        {HERO_IMAGES.map((img, idx) => (
          <div 
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              currentImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={img}
              alt="Sikh Spiritual Artistry"
              className={cn("h-full w-full object-cover mix-blend-luminosity grayscale-[20%] transition-transform duration-[10000ms] ease-linear", currentImageIndex === idx ? "scale-105" : "scale-100")}
              loading="lazy"
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-20 pointer-events-none" />
        
        <div className="absolute bottom-10 left-0 right-0 z-30 px-6 flex flex-col items-start text-left">
          <h1 className="mb-3 text-[34px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-[300px]">
            Discover Sacred Artistry
          </h1>
          <p className="mb-6 text-[15px] font-medium text-white/95 drop-shadow-lg leading-relaxed max-w-[280px]">
            Handcrafted fashion, art and culture from finest spiritual creators.
          </p>
          <button className="flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(217,95,14,0.4)] transition-transform active:scale-95">
            Shop Now
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-30">
          {HERO_IMAGES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentImageIndex === idx ? "w-5 bg-primary shadow-sm" : "w-1.5 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
