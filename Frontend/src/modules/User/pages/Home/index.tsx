import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '@/modules/User/components/product/ProductCard'
import { Header } from '@/modules/User/components/common/Header'
import { SearchBar } from '@/modules/User/components/common/SearchBar'
import { HeroBanner } from '@/modules/User/components/home/HeroBanner'
import { ProductGridSkeleton } from '@/modules/User/components/common/Skeletons'
import { ProductAPI } from '@/modules/User/services/productApi'

export default function Home() {
  const navigate = useNavigate()

  // Fetch data for all sections
  const { data: trending, isLoading: isTrendingLoading } = useQuery({
    queryKey: ['products', 'trending'],
    queryFn: ProductAPI.getRecommendedProducts
  })

  const { data: books, isLoading: isBooksLoading } = useQuery({
    queryKey: ['products', 'category', 'Books'],
    queryFn: () => ProductAPI.getProductsByCategory('Books')
  })

  const { data: instruments, isLoading: isInstrumentsLoading } = useQuery({
    queryKey: ['products', 'category', 'Instruments'],
    queryFn: () => ProductAPI.getProductsByCategory('Instruments')
  })

  const { data: art, isLoading: isArtLoading } = useQuery({
    queryKey: ['products', 'category', 'Art'],
    queryFn: () => ProductAPI.getProductsByCategory('Art')
  })

  return (
    <div className="flex flex-col bg-background pb-8">
      <Header />
      <SearchBar />
      <HeroBanner />

      {/* 1. Trending Now */}
      <section className="px-4 mt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              DISCOVER
            </span>
            <h2 className="text-[20px] font-black text-foreground mt-0.5 tracking-tight">
              Trending Now
            </h2>
          </div>
        </div>

        {isTrendingLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 gap-[14px]">
            {trending?.slice(0, 4).map((product) => (
              <ProductCard key={`trending-${product.id}`} {...product} />
            ))}
          </div>
        )}
      </section>

      {/* 2. Books Category */}
      <section className="px-4 mt-10 border-t border-border/50 pt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-[20px] font-black text-foreground tracking-tight">Books</h2>
          </div>
          <button 
            onClick={() => navigate('/category/Books')}
            className="text-[13px] font-bold text-primary hover:underline pb-0.5"
          >
            View all
          </button>
        </div>

        {isBooksLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 gap-[14px]">
            {books?.slice(0, 2).map((product) => (
              <ProductCard key={`book-${product.id}`} {...product} />
            ))}
          </div>
        )}
      </section>

      {/* 3. Instruments Category */}
      <section className="px-4 mt-10 border-t border-border/50 pt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-[20px] font-black text-foreground tracking-tight">Instruments</h2>
          </div>
          <button 
            onClick={() => navigate('/category/Instruments')}
            className="text-[13px] font-bold text-primary hover:underline pb-0.5"
          >
            View all
          </button>
        </div>

        {isInstrumentsLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 gap-[14px]">
            {instruments?.slice(0, 2).map((product) => (
              <ProductCard key={`inst-${product.id}`} {...product} />
            ))}
          </div>
        )}
      </section>

      {/* 4. Art Category */}
      <section className="px-4 mt-10 border-t border-border/50 pt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-[20px] font-black text-foreground tracking-tight">Art</h2>
          </div>
          <button 
            onClick={() => navigate('/category/Art')}
            className="text-[13px] font-bold text-primary hover:underline pb-0.5"
          >
            View all
          </button>
        </div>

        {isArtLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 gap-[14px]">
            {art?.slice(0, 2).map((product) => (
              <ProductCard key={`art-${product.id}`} {...product} />
            ))}
          </div>
        )}
      </section>
      
      <div className="h-6 w-full"></div>
    </div>
  )
}
