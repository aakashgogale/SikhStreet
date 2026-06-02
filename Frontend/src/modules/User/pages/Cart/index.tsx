import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Trash2, Minus, Plus, ShoppingBag, ShieldCheck, Truck, ArrowRight, RotateCcw } from 'lucide-react'
import { useCartStore } from '@/modules/User/store/cartStore'
import { Header } from '@/modules/User/components/common/Header'
import { cn } from '@/lib/utils'

export default function Cart() {
  const navigate = useNavigate()
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()

  const subtotal = getTotalPrice()
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0 // 10% off over 1000
  const delivery = subtotal > 999 ? 0 : 50
  const total = subtotal - discount + delivery
  
  const amountForFreeDelivery = 1000 - subtotal;
  const progressPercentage = Math.min(100, (subtotal / 1000) * 100);

  if (items.length === 0) {
    return (
      <div className="flex h-[100dvh] flex-col bg-background">
        <Header />
        <div className="flex flex-1 flex-col items-center justify-center p-5 text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm border border-primary/20">
            <ShoppingBag className="h-10 w-10" />
          </div>
          <h2 className="text-[22px] font-black text-foreground tracking-tight">Your Cart is Empty</h2>
          <p className="mt-2 text-[15px] text-muted-foreground max-w-[260px]">Looks like you haven't added any spiritual essentials to your cart yet.</p>
          <button onClick={() => navigate('/')} className="mt-8 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(217,95,14,0.3)] transition-transform active:scale-95">
            Start Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background pb-[160px]">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 p-4 safe-area-pt backdrop-blur-md border-b border-border/50">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-sm border border-border/50 transition-transform active:scale-95">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-[20px] font-black text-foreground tracking-tight">Shopping Cart</h1>
        </div>
        <button onClick={clearCart} className="text-sm font-bold text-primary hover:underline px-2 py-1 rounded-md hover:bg-primary/5 transition-colors">
          Clear All
        </button>
      </header>

      <div className="flex-1 p-4 pt-4">

        {/* Cart Items */}
        <div className="flex flex-col gap-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-2xl bg-white p-3 shadow-sm border border-border/50 relative">
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-[#f8f5f0] border border-border/30">
                <img src={item.image} alt={item.title} className="h-full w-full object-contain p-1 mix-blend-multiply" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div className="pr-6">
                  <h3 className="line-clamp-2 text-[14px] font-bold leading-snug text-foreground">{item.title}</h3>
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{item.creator}</span>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-[16px] font-extrabold text-foreground tracking-tight">₹{item.price}</span>
                  
                  <div className="flex h-8 items-center rounded-lg border border-border/80 bg-background px-1 shadow-sm">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-6 w-6 items-center justify-center text-foreground active:bg-muted rounded-md transition-colors"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-7 text-center text-[13px] font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-6 w-6 items-center justify-center text-foreground active:bg-muted rounded-md transition-colors"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-red-500 bg-background rounded-full border border-border/50 shadow-sm transition-colors active:scale-95"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        <div className="mb-8 flex gap-3">
          <input 
            type="text" 
            placeholder="Apply Coupon Code" 
            className="flex-1 rounded-xl border border-border/80 bg-white px-4 text-[14px] font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary uppercase placeholder:normal-case shadow-sm"
          />
          <button className="rounded-xl bg-foreground px-6 py-3.5 text-[14px] font-bold text-background shadow-md transition-transform active:scale-95">
            Apply
          </button>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-border/50 mb-6">
          <h3 className="mb-4 text-[16px] font-black text-foreground">Order Summary</h3>
          <div className="flex flex-col gap-3.5 text-[14px]">
            <div className="flex justify-between font-medium">
              <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
              <span className="font-bold text-foreground">₹{subtotal}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between font-medium text-green-600">
                <span>Discount (10%)</span>
                <span className="font-bold">-₹{discount.toFixed(0)}</span>
              </div>
            )}
            <div className="flex justify-between font-medium">
              <span className="text-muted-foreground">Delivery Charge</span>
              <span className="font-bold">{delivery === 0 ? <span className="text-green-600">Free</span> : `₹${delivery}`}</span>
            </div>
            <div className="my-2 h-[1px] w-full bg-border/50"></div>
            <div className="flex justify-between text-[18px] font-black text-foreground tracking-tight">
              <span>Total Amount</span>
              <span>₹{total.toFixed(0)}</span>
            </div>
          </div>
        </div>

        {/* Trust & Guarantees */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="flex flex-col items-center gap-1.5">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">100% Secure</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Truck className="h-6 w-6 text-primary" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Fast Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <RotateCcw className="h-6 w-6 text-primary" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Easy Returns</span>
          </div>
        </div>
      </div>

      {/* Sticky Checkout CTA - Placed above the Bottom Navigation (approx 70px) */}
      <div className="fixed bottom-[70px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border/50 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full h-[56px] rounded-xl bg-primary text-[16px] font-bold text-primary-foreground shadow-[0_4px_14px_rgba(217,95,14,0.3)] transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Proceed to Checkout <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
