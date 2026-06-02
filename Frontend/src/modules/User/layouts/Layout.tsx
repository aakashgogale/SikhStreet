import { Outlet } from 'react-router-dom'
import { BottomNavigation } from '@/modules/User/components/common/BottomNavigation'

export default function Layout() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-background overflow-x-hidden relative">
      {/* 
        The main content area padding ensures content doesn't get hidden behind the 
        BottomNavigation (82px) + safe area. 
      */}
      <main className="flex-1 w-full pb-[calc(90px+env(safe-area-inset-bottom))]">
        <Outlet />
      </main>
      
      <BottomNavigation />
    </div>
  )
}
