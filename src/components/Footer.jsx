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

      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
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
            <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--t4)', maxWidth: '200px' }}>
              {t('footer.tagline')}
            </p>
            <a
              href="mailto:hola@krew.ai"
              className="text-xs transition-colors duration-150"
              style={{ color: 'var(--t3)', textDecoration: 'none' }}
              onMouseEnter={e => (e.target.style.color = 'var(--t2)')}
              onMouseLeave={e => (e.target.style.color = 'var(--t3)')}
            >
              hola@krew.ai →
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--t4)' }}>
              Producto
            </p>
            <nav className="flex flex-col gap-3">
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
          </div>

          {/* Agents */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--t4)' }}>
              Agentes
            </p>
            <nav className="flex flex-col gap-3">
              {[
                ['SARA — Ventas', '/agents/sara'],
                ['MAX — Soporte', '/agents/max'],
                ['ARIA — Recepción', '/agents/aria'],
                ['COLE — Operaciones', '/agents/cole'],
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
          </div>

        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}
        >
          <p className="text-xs" style={{ color: 'var(--t4)' }}>
            © {new Date().getFullYear()} Krew. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#34D399', boxShadow: '0 0 6px rgba(52,211,153,0.6)', animation: 'pulse 2s ease-in-out infinite' }}
            />
            <span className="text-xs" style={{ color: '#34D399' }}>Sistemas operativos</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
