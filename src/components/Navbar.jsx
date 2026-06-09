import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { KrewLogo } from './ui/krew-logo'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {/* Desktop nav — 3-column grid so links stay truly centered */}
      <nav className="hidden md:grid grid-cols-3 items-center h-16 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Left — logo */}
        <div className="flex items-center">
          <Link to="/"><KrewLogo size={24} /></Link>
        </div>

        {/* Center — page links */}
        <div className="flex items-center justify-center gap-8">
          <NavLink to="/agents">{t('nav.agents')}</NavLink>
          <NavLink to="/pricing">{t('nav.pricing')}</NavLink>
        </div>

        {/* Right — lang + CTA */}
        <div className="flex items-center justify-end gap-4">
          <button
            onClick={toggleLang}
            className="text-xs font-medium tracking-widest cursor-pointer transition-colors duration-200"
            style={{ color: 'var(--grey-400)' }}
            onMouseEnter={e => (e.target.style.color = '#fff')}
            onMouseLeave={e => (e.target.style.color = 'var(--grey-400)')}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            to="/book"
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
            style={{ background: 'var(--indigo)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--indigo-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--indigo)')}
          >
            {t('nav.book')}
          </Link>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="flex md:hidden items-center justify-between h-16 px-6">
        <Link to="/"><KrewLogo size={22} /></Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xs font-medium tracking-widest cursor-pointer"
            style={{ color: 'var(--grey-400)' }}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(8,8,8,0.95)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              <Link to="/agents" className="text-sm" style={{ color: 'var(--grey-400)' }}>{t('nav.agents')}</Link>
              <Link to="/pricing" className="text-sm" style={{ color: 'var(--grey-400)' }}>{t('nav.pricing')}</Link>
              <Link
                to="/book"
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-white text-center"
                style={{ background: 'var(--indigo)' }}
              >
                {t('nav.book')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavLink({ to, children }) {
  const { pathname } = useLocation()
  const active = pathname === to
  return (
    <Link
      to={to}
      className="text-sm transition-colors duration-200"
      style={{ color: active ? '#fff' : 'var(--grey-400)' }}
      onMouseEnter={e => { if (!active) e.target.style.color = '#fff' }}
      onMouseLeave={e => { if (!active) e.target.style.color = 'var(--grey-400)' }}
    >
      {children}
    </Link>
  )
}
