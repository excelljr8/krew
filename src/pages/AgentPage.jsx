import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'
import { SplineScene } from '../components/ui/spline-scene'

const up = (i) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
})

export default function AgentPage() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const agent = agents.find((a) => a.id === id)

  if (!agent) return <Navigate to="/agents" replace />

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <motion.div {...up(0)} className="mb-12">
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-150"
            style={{ color: 'var(--t4)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--t2)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--t4)')}
          >
            ← {t('agentPage.back')}
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-center">

          {/* LEFT */}
          <div className="flex-1 min-w-0 lg:pr-8 flex flex-col">

            <motion.p {...up(1)} className="text-xs tracking-widest uppercase font-mono mb-4" style={{ color: 'var(--t4)' }}>
              {agent.role[lang]}
            </motion.p>

            <motion.div {...up(2)} className="flex items-center gap-4 mb-5">
              <h1
                className="display font-extrabold leading-none"
                style={{
                  fontSize: 'clamp(64px, 9vw, 104px)',
                  color: agent.color,
                  letterSpacing: '-0.03em',
                }}
              >
                {agent.name}
              </h1>
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0"
                style={{ background: agent.color }}
              />
            </motion.div>

            <motion.p {...up(3)} className="text-lg font-medium mb-4 max-w-lg leading-snug" style={{ color: 'var(--t1)' }}>
              {agent.tagline[lang]}
            </motion.p>

            <motion.p {...up(4)} className="text-sm leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--t3)' }}>
              {agent.description[lang]}
            </motion.p>

            {/* Metrics */}
            <motion.div {...up(5)} className="grid grid-cols-3 gap-3 mb-6">
              {agent.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.07)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.18)`,
                  }}
                >
                  <p
                    className="display font-bold mb-1"
                    style={{ fontSize: '26px', lineHeight: 1, color: 'var(--t1)' }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--t3)' }}>{m.label[lang]}</p>
                </div>
              ))}
            </motion.div>

            {/* Channels */}
            <motion.div {...up(6)} className="flex flex-wrap gap-2 mb-10">
              {agent.channels.map((ch) => (
                <span
                  key={ch}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.1)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.25)`,
                    color: agent.color,
                  }}
                >
                  {ch}
                </span>
              ))}
            </motion.div>

            {/* Pricing */}
            <motion.div
              {...up(7)}
              className="flex items-end gap-10 mb-10 pb-10"
              style={{ borderBottom: '1px solid var(--b1)' }}
            >
              <div>
                <p className="text-xs mb-1.5 font-mono uppercase tracking-widest" style={{ color: 'var(--t4)' }}>
                  {t('agentPage.setup')}
                </p>
                <p className="display font-bold text-2xl" style={{ color: 'var(--t1)' }}>{agent.setup}</p>
              </div>
              <div className="w-px self-stretch" style={{ background: 'var(--b1)' }} />
              <div>
                <p className="text-xs mb-1.5 font-mono uppercase tracking-widest" style={{ color: 'var(--t4)' }}>
                  {t('agentPage.monthly')}
                </p>
                <p
                  className="display font-extrabold"
                  style={{ fontSize: '40px', lineHeight: 1, color: agent.color }}
                >
                  {agent.monthly[lang]}
                </p>
              </div>
            </motion.div>

            <motion.div {...up(8)}>
              <Link
                to="/book"
                className="inline-flex items-center gap-3 py-3.5 px-8 rounded-xl font-semibold text-white text-sm transition-all duration-200"
                style={{ background: agent.color }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'brightness(1.15)'
                  e.currentTarget.style.boxShadow = `0 0 32px rgba(${agent.colorRgb}, 0.45)`
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                {t('agentPage.hire')} {agent.name} →
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Spline */}
          <div className="hidden lg:flex w-[480px] xl:w-[540px] flex-shrink-0 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                height: '560px',
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, rgba(${agent.colorRgb}, 0.09) 0%, transparent 65%)`,
                border: `1px solid rgba(${agent.colorRgb}, 0.12)`,
              }}
            >
              <motion.div
                className="w-full h-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  filter: agent.hueRotate !== 0
                    ? `hue-rotate(${agent.hueRotate}deg) saturate(1.3) brightness(1.05)`
                    : 'none',
                }}
              >
                <SplineScene className="w-full h-full" />
              </motion.div>
              <div
                className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                style={{ background: `linear-gradient(to top, rgba(${agent.colorRgb}, 0.1) 0%, transparent 100%)` }}
              />
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-48 h-6 blur-2xl pointer-events-none"
                style={{ background: `rgba(${agent.colorRgb}, 0.3)` }}
              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}
