import { EmptyState } from '@/modules/User/components/common/EmptyState'
import { Search as SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <div className="flex h-full min-h-[70vh] flex-col items-center justify-center pt-10">
      <EmptyState
        icon={<SearchIcon size={48} />}
        title="Search SikhStreet"
        description="Find the best spiritual products, literature, and art."
      />
    </div>
  )
}
