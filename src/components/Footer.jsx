import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{ borderTop: '1px solid var(--b1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="display font-extrabold text-base tracking-tight" style={{ color: 'var(--t1)' }}>
              KREW
            </span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
          </div>
          <p className="text-xs" style={{ color: 'var(--t4)' }}>{t('footer.tagline')}</p>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
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

        <p className="text-xs" style={{ color: 'var(--t4)' }}>
          © {new Date().getFullYear()} Krew
        </p>
      </div>
    </footer>
  )
}
