import { EmptyState } from '@/modules/User/components/common/EmptyState'
import { Compass } from 'lucide-react'

export default function Discover() {
  return (
    <div className="flex h-full min-h-[70vh] flex-col items-center justify-center pt-10">
      <EmptyState
        icon={<Compass size={48} />}
        title="Discover New Arrivals"
        description="We are curating the best Sikh heritage products for you. Check back soon!"
      />
    </div>
  )
}
