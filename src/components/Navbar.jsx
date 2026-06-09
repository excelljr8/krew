import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 16)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  const lang = i18n.language === 'es' ? 'EN' : 'ES'

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={solid ? {
        background: 'rgba(3,7,18,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--b1)',
      } : {
        background: 'rgba(3,7,18,0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 items-center h-16 max-w-7xl mx-auto px-6 lg:px-14">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className="display font-extrabold text-lg tracking-tight"
            style={{ color: 'var(--t1)', letterSpacing: '-0.02em' }}
          >
            KREW
          </span>
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #6366F1, #22D3EE)',
              boxShadow: '0 0 8px rgba(99,102,241,0.6)',
            }}
          />
        </Link>

        <nav className="flex items-center justify-center gap-8">
          {[['Agentes', '/agents'], ['Precios', '/pricing']].map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-sm transition-all duration-150 relative"
              style={{ color: pathname === to ? 'var(--t1)' : 'var(--t3)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--t1)')}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === to ? 'var(--t1)' : 'var(--t3)')}
            >
              {label}
              {pathname === to && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-5">
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            className="text-xs font-mono tracking-widest cursor-pointer transition-colors duration-150"
            style={{ color: 'var(--t4)' }}
            onMouseEnter={e => (e.target.style.color = 'var(--t2)')}
            onMouseLeave={e => (e.target.style.color = 'var(--t4)')}
          >
            {lang}
          </button>
          <Link
            to="/book"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all duration-150"
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)',
              boxShadow: '0 0 16px rgba(99,102,241,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.5)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 16px rgba(99,102,241,0.3)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {t('nav.book')}
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between h-16 px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="display font-extrabold text-base" style={{ color: 'var(--t1)' }}>KREW</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'linear-gradient(135deg, #6366F1, #22D3EE)' }}
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white/70 transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(3,7,18,0.97)', borderTop: '1px solid var(--b1)' }}
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              <Link to="/agents" className="text-sm" style={{ color: 'var(--t2)' }}>Agentes</Link>
              <Link to="/pricing" className="text-sm" style={{ color: 'var(--t2)' }}>Precios</Link>
              <Link
                to="/book"
                className="text-sm font-semibold text-white text-center py-3 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)' }}
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
