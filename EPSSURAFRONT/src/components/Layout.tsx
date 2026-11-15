import { Outlet } from 'react-router-dom'
import Header from './Header'
import SecondaryNav from './SecondaryNav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <SecondaryNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
