import { EmptyState } from '@/modules/User/components/common/EmptyState'
import { Heart } from 'lucide-react'

export default function Wishlist() {
  return (
    <div className="flex h-full min-h-[70vh] flex-col items-center justify-center pt-10">
      <EmptyState
        icon={<Heart size={48} />}
        title="Your Wishlist is Empty"
        description="Save your favorite spiritual items here to buy them later."
      />
    </div>
  )
}
