import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="flex flex-col justify-center min-h-screen pt-14"
      style={{ borderBottom: '1px solid var(--b1)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full py-24">

        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-widest uppercase font-mono" style={{ color: 'var(--t3)' }}>
            Krew — AI Employees
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="display font-extrabold leading-none mb-8"
          style={{
            fontSize: 'clamp(52px, 8vw, 112px)',
            letterSpacing: '-0.03em',
            maxWidth: '14ch',
          }}
        >
          <span style={{ color: 'var(--t1)' }}>Tu próximo<br />empleado no<br /></span>
          <span style={{ color: 'var(--accent)' }}>es humano.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.32)}
          className="text-lg leading-relaxed mb-12 max-w-lg"
          style={{ color: 'var(--t3)', fontWeight: 400 }}
        >
          Agentes de IA con roles reales — ventas, soporte, recepción, operaciones.
          Instalados en tu negocio en días.
        </motion.p>

        <motion.div {...fadeUp(0.42)} className="flex flex-wrap items-center gap-4">
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200"
            style={{ background: 'var(--accent)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent2)'
              e.currentTarget.style.boxShadow = '0 0 28px rgba(99,102,241,0.45)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {t('hero.cta')}
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--t3)', border: '1px solid var(--b1)' }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--t1)'
              e.currentTarget.style.borderColor = 'var(--b2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--t3)'
              e.currentTarget.style.borderColor = 'var(--b1)'
            }}
          >
            Ver precios
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap items-center gap-3 mt-20"
        >
          <span className="text-xs font-mono tracking-widest uppercase mr-2" style={{ color: 'var(--t4)' }}>
            El equipo
          </span>
          {agents.map((a) => (
            <Link
              key={a.id}
              to={`/agents/${a.id}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
              style={{
                background: `rgba(${a.colorRgb}, 0.08)`,
                border: `1px solid rgba(${a.colorRgb}, 0.2)`,
                color: a.color,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `rgba(${a.colorRgb}, 0.16)`
                e.currentTarget.style.borderColor = `rgba(${a.colorRgb}, 0.4)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `rgba(${a.colorRgb}, 0.08)`
                e.currentTarget.style.borderColor = `rgba(${a.colorRgb}, 0.2)`
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: a.color }} />
              {a.name}
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
