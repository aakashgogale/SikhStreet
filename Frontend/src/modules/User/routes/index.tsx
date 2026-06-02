import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from '../layouts/Layout'

// Lazy load pages for performance
const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const Cart = lazy(() => import('../pages/Cart'))
const Discover = lazy(() => import('../pages/Discover'))
const Search = lazy(() => import('../pages/Search'))
const Wishlist = lazy(() => import('../pages/Wishlist'))
const Profile = lazy(() => import('../pages/Profile'))

const ProductDetails = lazy(() => import('../pages/ProductDetails'))
const Checkout = lazy(() => import('../pages/Checkout'))
const Category = lazy(() => import('../pages/Category'))

// Loading fallback for route transitions
const RouteFallback = () => (
  <div className="flex h-[100dvh] w-full items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
)

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* Full Screen Routes */}
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  )
}
