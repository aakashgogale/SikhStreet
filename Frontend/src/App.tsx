import { Suspense, lazy } from 'react'
import { QueryProvider } from './providers/QueryProvider'

// Lazy load the User Application module for route-based code splitting
const UserApp = lazy(() => import('./modules/User/app/UserApp'))

function App() {
  return (
    <QueryProvider>
      <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center bg-background"><div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div></div>}>
        <UserApp />
      </Suspense>
    </QueryProvider>
  )
}

export default App
