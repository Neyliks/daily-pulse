import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}