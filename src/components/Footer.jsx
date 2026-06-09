import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { KrewLogo } from './ui/krew-logo'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <KrewLogo size={22} />
          <p className="text-xs" style={{ color: 'var(--grey-600)' }}>
            {t('footer.tagline')}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { to: '/agents', label: t('nav.agents') },
            { to: '/pricing', label: t('nav.pricing') },
            { to: '/book', label: t('nav.book') },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--grey-600)' }}
              onMouseEnter={e => (e.target.style.color = 'var(--grey-400)')}
              onMouseLeave={e => (e.target.style.color = 'var(--grey-600)')}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:hola@getkrew.io"
            className="text-sm transition-colors duration-200"
            style={{ color: 'var(--grey-600)' }}
            onMouseEnter={e => (e.target.style.color = 'var(--grey-400)')}
            onMouseLeave={e => (e.target.style.color = 'var(--grey-600)')}
          >
            Email
          </a>
        </div>

        <p className="text-xs" style={{ color: 'var(--grey-800)' }}>
          © 2026 Krew
        </p>
      </div>
    </footer>
  )
}
