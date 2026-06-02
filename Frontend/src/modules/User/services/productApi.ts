export interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  video?: string
  creator: string
  rating: number
  reviews: number
  isNew?: boolean
  isAuthentic?: boolean
  description?: string
  category?: string
}

// Mock database with High Quality Spiritual images
const mockProducts: Product[] = [
  // Books
  {
    id: 'b1',
    title: 'Japji Sahib Steek (Premium Hardcover)',
    price: 499,
    originalPrice: 799,
    image: '/p_book.png',
    creator: 'Khalsa Publishers',
    rating: 5.0,
    reviews: 1240,
    isAuthentic: true,
    category: 'Books'
  },
  {
    id: 'b2',
    title: 'Sikh History Volume 1',
    price: 899,
    image: '/p_book.png',
    creator: 'Heritage Books',
    rating: 4.8,
    reviews: 856,
    category: 'Books'
  },
  {
    id: 'b3',
    title: 'Sri Guru Granth Sahib (English Translation)',
    price: 2499,
    originalPrice: 2999,
    image: '/book_white_gold_1780392750229.png',
    creator: 'Divine Heritage',
    rating: 5.0,
    reviews: 412,
    isAuthentic: true,
    category: 'Books'
  },
  {
    id: 'b4',
    title: 'The Book of Ten Masters',
    price: 549,
    image: '/book_brown_leather_1780392735430.png',
    creator: 'Puran Singh',
    rating: 4.7,
    reviews: 210,
    category: 'Books'
  },
  {
    id: 'b5',
    title: 'Sukhmani Sahib - Peace of Mind',
    price: 299,
    image: '/book_blue_gold_1780392717191.png',
    creator: 'Khalsa Publishers',
    rating: 4.9,
    reviews: 890,
    isAuthentic: true,
    category: 'Books'
  },
  {
    id: 'b6',
    title: 'Sikh Martial Art: Gatka Training',
    price: 699,
    originalPrice: 899,
    image: '/book_brown_leather_1780392735430.png',
    creator: 'Warrior Arts',
    rating: 4.6,
    reviews: 156,
    category: 'Books'
  },
  {
    id: 'b7',
    title: 'Bhai Vir Singh: Collected Poems',
    price: 899,
    image: '/book_white_gold_1780392750229.png',
    creator: 'Heritage Books',
    rating: 4.9,
    reviews: 56,
    category: 'Books'
  },
  {
    id: 'b8',
    title: 'Anand Sahib Steek (Punjabi)',
    price: 349,
    image: '/book_blue_gold_1780392717191.png',
    creator: 'Divine Heritage',
    rating: 4.8,
    reviews: 320,
    isAuthentic: true,
    category: 'Books'
  },
  {
    id: 'b9',
    title: 'The Great Sikh Women',
    price: 599,
    image: '/book_white_gold_1780392750229.png',
    creator: 'Kaur Publishing',
    rating: 5.0,
    reviews: 432,
    category: 'Books'
  },
  {
    id: 'b10',
    title: 'Zafarnama - The Epistle of Victory',
    price: 449,
    originalPrice: 599,
    image: '/book_brown_leather_1780392735430.png',
    creator: 'Khalsa Publishers',
    rating: 4.9,
    reviews: 678,
    isAuthentic: true,
    category: 'Books'
  },
  {
    id: 'b11',
    title: 'Daily Nitnem Gutka (Large Font)',
    price: 249,
    image: '/book_blue_gold_1780392717191.png',
    creator: 'Amritsar Heritage',
    rating: 4.9,
    reviews: 1200,
    isAuthentic: true,
    category: 'Books'
  },
  {
    id: 'b12',
    title: 'Sikh History Volume 2 (1708-1849)',
    price: 949,
    image: '/book_brown_leather_1780392735430.png',
    creator: 'Heritage Books',
    rating: 4.8,
    reviews: 421,
    category: 'Books'
  },
  
  // Instruments
  {
    id: 'i1',
    title: 'Premium Rosewood Harmonium for Kirtan',
    price: 12499,
    originalPrice: 15999,
    image: '/p_harmonium.png',
    creator: 'Amritsar Musicals',
    rating: 4.9,
    reviews: 342,
    isAuthentic: true,
    isNew: true,
    category: 'Instruments'
  },
  {
    id: 'i2',
    title: 'Professional Tabla Set',
    price: 8999,
    image: '/p_tabla.png',
    creator: 'Punjab Instruments',
    rating: 4.7,
    reviews: 128,
    category: 'Instruments'
  },
  {
    id: 'i3',
    title: 'Authentic Sarangi with Bow',
    price: 24500,
    originalPrice: 28000,
    image: '/inst_sarangi_1780392766337.png',
    creator: 'Heritage Strings',
    rating: 4.9,
    reviews: 84,
    isAuthentic: true,
    category: 'Instruments'
  },
  {
    id: 'i4',
    title: 'Dilruba - Classic String Instrument',
    price: 18999,
    image: '/inst_dilruba_1780392779353.png',
    creator: 'Amritsar Musicals',
    rating: 4.8,
    reviews: 156,
    category: 'Instruments'
  },
  {
    id: 'i5',
    title: 'Taus - The Peacock Instrument',
    price: 45000,
    image: '/inst_sarangi_1780392766337.png',
    creator: 'Master Craftsmen',
    rating: 5.0,
    reviews: 32,
    isAuthentic: true,
    category: 'Instruments'
  },
  {
    id: 'i6',
    title: 'Jori - Classic Kirtan Drums',
    price: 14999,
    originalPrice: 17500,
    image: '/inst_jori_1780392792846.png',
    creator: 'Punjab Instruments',
    rating: 4.7,
    reviews: 210,
    category: 'Instruments'
  },
  {
    id: 'i7',
    title: 'Rabab - Bhai Mardana Style',
    price: 32000,
    image: '/inst_dilruba_1780392779353.png',
    creator: 'Heritage Strings',
    rating: 4.9,
    reviews: 95,
    isAuthentic: true,
    category: 'Instruments'
  },
  {
    id: 'i8',
    title: 'Saranda - Deep Bowed Strings',
    price: 28999,
    image: '/inst_sarangi_1780392766337.png',
    creator: 'Amritsar Musicals',
    rating: 4.8,
    reviews: 67,
    category: 'Instruments'
  },
  {
    id: 'i9',
    title: 'Portable Kirtan Harmonium (Safari)',
    price: 9499,
    image: '/p_harmonium.png',
    creator: 'Travel Musicals',
    rating: 4.6,
    reviews: 423,
    category: 'Instruments'
  },
  {
    id: 'i10',
    title: 'Dhol - Professional Grade',
    price: 7999,
    originalPrice: 9999,
    image: '/inst_jori_1780392792846.png',
    creator: 'Punjab Instruments',
    rating: 4.8,
    reviews: 512,
    category: 'Instruments'
  },
  {
    id: 'i11',
    title: 'Chimta - Brass with Heavy Jingles',
    price: 1499,
    image: '/inst_dilruba_1780392779353.png',
    creator: 'Amritsar Musicals',
    rating: 4.5,
    reviews: 189,
    category: 'Instruments'
  },
  {
    id: 'i12',
    title: 'Khartal - Wooden Rhythm Clappers',
    price: 899,
    image: '/inst_jori_1780392792846.png',
    creator: 'Punjab Instruments',
    rating: 4.7,
    reviews: 234,
    category: 'Instruments'
  },

  // Art
  {
    id: 'a1',
    title: 'Golden Temple Sunrise Canvas',
    price: 3499,
    originalPrice: 4999,
    image: '/p_canvas.png',
    creator: 'Sikh Canvas',
    rating: 4.8,
    reviews: 215,
    isAuthentic: true,
    category: 'Art'
  },
  {
    id: 'a2',
    title: 'Gurbani Calligraphy Frame',
    price: 2499,
    image: '/p_canvas.png',
    creator: 'Sacred Art HQ',
    rating: 5.0,
    reviews: 89,
    category: 'Art'
  },

  // Others / Accessories
  {
    id: 'o1',
    title: 'Premium Sarbloh Kara',
    price: 1299,
    image: 'https://placehold.co/800x1000/FFFDF8/D97706?text=Premium+Kara',
    creator: 'Amritsar Heritage',
    rating: 4.9,
    reviews: 432,
    isAuthentic: true,
    category: 'Accessories'
  },
  {
    id: 'o2',
    title: 'Golden Temple Rumala Sahib',
    price: 5499,
    image: 'https://placehold.co/800x1000/FFFDF8/D97706?text=Rumala+Sahib',
    creator: 'Sacred Threads',
    rating: 4.9,
    reviews: 89,
    isAuthentic: true,
    category: 'Accessories'
  }
]

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const ProductAPI = {
  getProducts: async (): Promise<Product[]> => {
    await delay(800)
    return mockProducts
  },
  
  getProductById: async (id: string): Promise<Product | undefined> => {
    await delay(500)
    return mockProducts.find(p => p.id === id)
  },

  getRecommendedProducts: async (): Promise<Product[]> => {
    await delay(700)
    // Return a mix of new items
    return [mockProducts[0], mockProducts[2], mockProducts[4], mockProducts[6]]
  },

  getTrendingProducts: async (): Promise<Product[]> => {
    await delay(700)
    // Return books specifically for literature section
    return mockProducts.filter(p => p.category === 'Books')
  },
  
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    await delay(700)
    return mockProducts.filter(p => p.category === category)
  }
}
