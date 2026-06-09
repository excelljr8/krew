import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative" style={{ borderTop: '1px solid var(--b1)' }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-14">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="display font-extrabold text-base tracking-tight"
                style={{ color: 'var(--t1)', letterSpacing: '-0.02em' }}
              >
                KREW
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #22D3EE)',
                  boxShadow: '0 0 6px rgba(99,102,241,0.5)',
                }}
              />
            </div>
            <p className="text-xs max-w-[200px] leading-relaxed" style={{ color: 'var(--t4)' }}>
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-start gap-x-10 gap-y-3">
            {[
              ['Agentes', '/agents'],
              ['Precios', '/pricing'],
              ['Agendar llamada', '/book'],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="text-xs transition-colors duration-150"
                style={{ color: 'var(--t4)' }}
                onMouseEnter={e => (e.target.style.color = 'var(--t2)')}
                onMouseLeave={e => (e.target.style.color = 'var(--t4)')}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Status + copyright */}
          <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#34D399', boxShadow: '0 0 6px rgba(52,211,153,0.6)' }}
              />
              <span className="text-xs" style={{ color: '#34D399' }}>All systems operational</span>
            </div>
            <p className="text-xs" style={{ color: 'var(--t4)' }}>
              © {new Date().getFullYear()} Krew
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
