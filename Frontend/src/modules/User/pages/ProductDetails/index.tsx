import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, Heart, Share2, Star, ShieldCheck, Truck, RotateCcw, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ProductAPI } from '@/modules/User/services/productApi'
import { useCartStore } from '@/modules/User/store/cartStore'
import { cn } from '@/lib/utils'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [expandedSection, setExpandedSection] = useState<string | null>('details')
  const [isAdded, setIsAdded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const addItem = useCartStore(state => state.addItem)
  const totalItems = useCartStore(state => state.getTotalItems())

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductAPI.getProductById(id!)
  })

  // Auto-playing carousel effect
  useEffect(() => {
    if (!product) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3) // Assuming 3 slides
    }, 3000)
    return () => clearInterval(timer)
  }, [product])

  if (isLoading) {
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex h-[100dvh] flex-col items-center justify-center bg-background p-5 text-center">
        <h2 className="text-xl font-bold">Product Not Found</h2>
        <button onClick={() => navigate('/')} className="mt-6 rounded-full bg-primary px-6 py-2 font-bold text-primary-foreground">
          Go Back Home
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({ ...product, quantity })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addItem({ ...product, quantity })
    navigate('/checkout')
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  // Generate an array of 3 images for the carousel using slightly different framing to simulate angles
  const carouselImages = [
    { src: product.image, style: "object-center" },
    { src: product.image, style: "object-top scale-110" },
    { src: product.image, style: "object-bottom scale-105" }
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background pb-[120px]">
      {/* Floating Header over image */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 pt-safe-top">
        <button onClick={() => navigate(-1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform active:scale-95 text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform active:scale-95 text-foreground">
            <Share2 className="h-5 w-5" />
          </button>
          <button onClick={() => navigate('/cart')} className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform active:scale-95 text-foreground">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-white shadow-sm ring-2 ring-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Full Bleed Auto-playing Carousel */}
      <div className="relative aspect-[4/5] w-full bg-black overflow-hidden">
        {carouselImages.map((img, idx) => (
          <div 
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              currentImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              src={img.src} 
              alt={`${product.title} view ${idx + 1}`} 
              className={cn("h-full w-full object-cover transition-transform duration-[10000ms] ease-linear", img.style, currentImageIndex === idx ? "scale-105" : "scale-100")}
            />
          </div>
        ))}
        
        {/* Subtle gradient overlay to make top buttons pop */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent z-20 pointer-events-none" />

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
          {carouselImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentImageIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col px-5 pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-bold uppercase tracking-widest text-primary">{product.creator}</span>
          <div className="flex items-center gap-1 bg-[#FFF8ED] border border-primary/20 px-2.5 py-1 rounded-md shadow-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-bold text-foreground">{product.rating.toFixed(1)}</span>
            <span className="text-xs font-medium text-muted-foreground">({product.reviews})</span>
          </div>
        </div>

        <h1 className="text-[22px] font-black leading-tight text-foreground mb-4 font-serif">
          {product.title}
        </h1>

        <div className="flex items-end gap-3 mb-6">
          <span className="text-3xl font-extrabold text-foreground tracking-tight">₹{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-lg font-medium text-muted-foreground line-through mb-1">₹{product.originalPrice}</span>
              <span className="text-[13px] font-bold text-[#228B22] bg-green-50 px-2 py-0.5 rounded-sm mb-1.5">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {product.isAuthentic && (
            <div className="flex items-center gap-2.5 bg-card border border-border/50 p-3 rounded-xl shadow-sm">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold leading-tight">100% Authentic<br/>Guaranteed</span>
            </div>
          )}
          <div className="flex items-center gap-2.5 bg-card border border-border/50 p-3 rounded-xl shadow-sm">
            <RotateCcw className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold leading-tight">7 Days Easy<br/>Returns</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-border/50 my-2"></div>

        {/* Accordions */}
        <div className="flex flex-col">
          {/* Details */}
          <div className="border-b border-border/50">
            <button onClick={() => toggleSection('details')} className="flex w-full items-center justify-between py-4 outline-none">
              <h3 className="text-[15px] font-bold text-foreground">Product Description</h3>
              {expandedSection === 'details' ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
            </button>
            {expandedSection === 'details' && (
              <div className="pb-5 pt-1 text-[14px] leading-relaxed text-muted-foreground">
                <p>{product.description || 'Experience the divine essence with this premium authentic product. Carefully sourced and handcrafted to preserve the rich Sikh heritage. Perfect for your daily spiritual practice or as a meaningful gift for loved ones.'}</p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li>Premium quality materials</li>
                  <li>Authentic heritage design</li>
                  <li>Ethically sourced</li>
                </ul>
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="border-b border-border/50">
            <button onClick={() => toggleSection('shipping')} className="flex w-full items-center justify-between py-4 outline-none">
              <h3 className="text-[15px] font-bold text-foreground">Delivery & Returns</h3>
              {expandedSection === 'shipping' ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
            </button>
            {expandedSection === 'shipping' && (
              <div className="pb-5 pt-1 text-[14px] leading-relaxed text-muted-foreground space-y-3">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Standard Delivery: 3-5 Business Days</p>
                    <p className="text-sm">Free delivery on prepaid orders above ₹999.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Hassle-Free Returns</p>
                    <p className="text-sm">Return within 7 days of delivery for a full refund if the item is unused and in original packaging.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border/50 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          {/* Quantity */}
          <div className="flex h-[54px] items-center rounded-xl border-2 border-border/50 bg-background px-1 shrink-0">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-10 w-10 items-center justify-center rounded-lg active:bg-muted text-foreground">
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-6 text-center font-bold text-foreground">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="flex h-10 w-10 items-center justify-center rounded-lg active:bg-muted text-foreground">
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-1 gap-2">
            <button 
              onClick={handleAddToCart}
              disabled={isAdded}
              className={cn(
                "flex-1 h-[54px] rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center justify-center gap-2",
                isAdded 
                  ? "bg-green-600 text-white" 
                  : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 active:scale-95"
              )}
            >
              {isAdded ? (
                <><CheckCircle2 className="h-5 w-5" /> Added</>
              ) : (
                'Add to Cart'
              )}
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 h-[54px] rounded-xl bg-primary text-[14px] font-bold text-white shadow-lg transition-transform active:scale-95"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
