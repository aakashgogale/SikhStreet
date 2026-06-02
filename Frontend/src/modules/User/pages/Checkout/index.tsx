import { useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, CreditCard, CheckCircle2 } from 'lucide-react'
import { useCartStore } from '@/modules/User/store/cartStore'

export default function Checkout() {
  const navigate = useNavigate()
  const { getTotalPrice } = useCartStore()
  
  const subtotal = getTotalPrice()
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0
  const delivery = subtotal > 999 ? 0 : 50
  const total = subtotal - discount + delivery

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background pb-[100px]">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background/80 p-4 backdrop-blur-md border-b border-border/50 safe-area-pt">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-sm border border-border/50 transition-transform active:scale-95">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Checkout</h1>
        </div>
      </header>

      <div className="flex-1 p-5 flex flex-col gap-6">
        
        {/* Delivery Address */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" /> Delivery Address
          </h2>
          <div className="rounded-2xl border border-primary bg-primary/5 p-4 shadow-sm relative">
            <div className="absolute top-4 right-4 text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <p className="font-semibold text-foreground">Harpreet Singh</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              142, Heritage Block, Phase 3B2<br/>
              Mohali, Punjab, 160059<br/>
              +91 98765 43210
            </p>
            <button className="mt-3 text-sm font-semibold text-primary hover:underline">
              Change Address
            </button>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" /> Payment Method
          </h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="h-4 w-4 accent-primary" defaultChecked />
                <span className="font-semibold text-foreground">UPI (GPay, PhonePe)</span>
              </div>
              <span className="text-xs font-bold text-[#228B22] bg-green-100 px-2 py-1 rounded-md">Save ₹20</span>
            </label>
            <label className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="h-4 w-4 accent-primary" />
                <span className="font-semibold text-foreground">Credit / Debit Card</span>
              </div>
            </label>
            <label className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="h-4 w-4 accent-primary" />
                <span className="font-semibold text-foreground">Cash on Delivery</span>
              </div>
            </label>
          </div>
        </section>

      </div>

      {/* Sticky Bottom Place Order */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border/50 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-muted-foreground">Total Amount</span>
          <span className="text-xl font-extrabold text-foreground">₹{total.toFixed(0)}</span>
        </div>
        <button 
          onClick={() => {
            alert('Order Placed Successfully! (Demo)')
            useCartStore.getState().clearCart()
            navigate('/')
          }}
          className="h-[52px] px-8 rounded-xl bg-primary text-[15px] font-bold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
        >
          Place Order
        </button>
      </div>

    </div>
  )
}
