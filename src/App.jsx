import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agents from './pages/Agents'
import AgentPage from './pages/AgentPage'
import Pricing from './pages/Pricing'
import BookCall from './pages/BookCall'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book" element={<BookCall />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
