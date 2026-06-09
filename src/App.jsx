import { Routes, Route } from 'react-router-dom'
import { GradientBackground } from './components/ui/gradient-background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agents from './pages/Agents'
import AgentPage from './pages/AgentPage'
import Pricing from './pages/Pricing'
import BookCall from './pages/BookCall'

export default function App() {
  return (
    <>
      <GradientBackground />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
    </>
  )
}
