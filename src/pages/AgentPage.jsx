import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'
import { SplineScene } from '../components/ui/spline-scene'

const fade = (i) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
})

export default function AgentPage() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const agent = agents.find((a) => a.id === id)

  if (!agent) return <Navigate to="/agents" replace />

  return (
    <div className="min-h-screen px-6 lg:px-16 pt-24 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <motion.div {...fade(0)} className="mb-12">
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: 'var(--grey-600)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--grey-400)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey-600)')}
          >
            ← {t('agentPage.back')}
          </Link>
        </motion.div>

        {/* Split layout — min-h-[80vh] with both cols vertically centered */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 min-h-[80vh] lg:items-center">

          {/* LEFT — text content */}
          <div className="flex-1 min-w-0 lg:pr-16 flex flex-col justify-center">
            <motion.p {...fade(1)} className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--grey-600)' }}>
              AI {agent.role[lang].split(' ').slice(1).join(' ').toUpperCase()}
            </motion.p>

            <motion.div {...fade(2)} className="flex items-center gap-3 mb-3">
              <h1
                className="font-display font-extrabold leading-none text-6xl md:text-7xl lg:text-8xl"
                style={{ color: agent.color }}
              >
                {agent.name}
              </h1>
              <span className="w-3 h-3 rounded-full animate-pulse flex-shrink-0" style={{ background: agent.color }} />
            </motion.div>

            {/* Tagline */}
            <motion.p {...fade(3)} className="text-xl font-medium text-white mb-4">
              {agent.tagline[lang]}
            </motion.p>

            {/* Description */}
            <motion.p {...fade(4)} className="text-base leading-relaxed mb-6" style={{ color: 'var(--grey-400)' }}>
              {agent.description[lang]}
            </motion.p>

            {/* Metrics — 3-col grid */}
            <motion.div {...fade(5)} className="grid grid-cols-3 gap-6 mb-8">
              {agent.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <p className="font-display font-bold text-3xl text-white mb-1">{m.value}</p>
                  <p className="text-sm" style={{ color: 'var(--grey-400)' }}>{m.label[lang]}</p>
                </div>
              ))}
            </motion.div>

            {/* Channel chips */}
            <motion.div {...fade(6)} className="flex flex-wrap gap-2 mt-6">
              {agent.channels.map((ch) => (
                <span
                  key={ch}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: `${agent.color}12`,
                    border: `1px solid ${agent.color}28`,
                    color: agent.color,
                  }}
                >
                  {ch}
                </span>
              ))}
            </motion.div>

            {/* Pricing row */}
            <motion.div {...fade(7)} className="mt-8 flex items-end gap-8">
              <div>
                <p className="text-sm mb-2" style={{ color: 'var(--grey-400)' }}>{t('agentPage.setup')}</p>
                <p className="font-display font-bold text-2xl text-white">{agent.setup}</p>
              </div>
              <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <p className="text-sm mb-2" style={{ color: 'var(--grey-400)' }}>{t('agentPage.monthly')}</p>
                <p className="font-display font-bold text-4xl" style={{ color: agent.color }}>
                  {agent.monthly[lang]}
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div {...fade(8)} className="mt-8">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-xl font-medium text-white transition-all duration-200"
                style={{ background: agent.color }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'brightness(1.15)'
                  e.currentTarget.style.boxShadow = `0 0 32px ${agent.color}50`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {t('agentPage.hire')} {agent.name} →
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Spline 3D, hidden on mobile */}
          <div className="hidden lg:flex w-[480px] xl:w-[540px] flex-shrink-0 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                height: '560px',
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${agent.color}14 0%, transparent 70%)`,
                border: `1px solid ${agent.color}18`,
              }}
            >
              <motion.div
                className="w-full h-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <SplineScene className="w-full h-[500px]" />
              </motion.div>

              {/* Colour glow underneath */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-14 blur-3xl pointer-events-none"
                style={{ background: `${agent.color}35` }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
