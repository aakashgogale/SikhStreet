import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { ProductAPI } from '@/modules/User/services/productApi'
import { ProductCard } from '@/modules/User/components/product/ProductCard'
import { ProductGridSkeleton } from '@/modules/User/components/common/Skeletons'

export default function Category() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', 'category', id],
    queryFn: () => ProductAPI.getProductsByCategory(id || '')
  })

  // Format the category name for display (e.g., 'books' -> 'Books')
  const categoryName = id ? id.charAt(0).toUpperCase() + id.slice(1) : ''

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex items-center bg-white/95 p-4 safe-area-pt backdrop-blur-md border-b border-border/50 shadow-sm">
        <button onClick={() => navigate('/')} className="flex h-10 w-10 items-center justify-center text-foreground transition-transform active:scale-95 -ml-2 mr-2 rounded-full active:bg-black/5">
          <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
        </button>
        <h1 className="text-[22px] font-black text-foreground tracking-tight leading-none mt-0.5">{categoryName}</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 pb-8">
        <div className="mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            DISCOVER
          </span>
          <h2 className="text-[22px] font-black text-foreground mt-0.5 tracking-tight">
            All {categoryName}
          </h2>
        </div>

        {isLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 gap-[14px]">
            {products?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
            {products?.length === 0 && (
              <div className="col-span-2 text-center py-10 text-muted-foreground text-sm font-medium">
                No products found in this category.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
