import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'

export default function Pricing() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase font-mono mb-4" style={{ color: 'var(--t4)' }}>
            {t('pricing.label')}
          </p>
          <h1
            className="display font-extrabold leading-none mb-4"
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              letterSpacing: '-0.03em',
              color: 'var(--t1)',
            }}
          >
            {t('pricing.title')}
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'var(--t3)' }}>
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Agent pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl relative overflow-hidden transition-all duration-200 flex flex-col"
              style={{
                padding: '28px 32px',
                background: 'var(--s1)',
                border: `1px solid rgba(${agent.colorRgb}, 0.15)`,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.35)`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.15)`)}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: agent.color }} />

              <div className="flex items-start justify-between mb-7">
                <div>
                  <h2
                    className="display font-extrabold text-2xl mb-1"
                    style={{ color: agent.color }}
                  >
                    {agent.name}
                  </h2>
                  <p className="text-xs uppercase tracking-widest font-mono" style={{ color: 'var(--t4)' }}>
                    {agent.role[lang]}
                  </p>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.1)`,
                    color: agent.color,
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  {agent.initial}
                </div>
              </div>

              <div className="flex items-end gap-8 mb-7">
                <div>
                  <p className="text-xs mb-1.5 font-mono uppercase tracking-widest" style={{ color: 'var(--t4)' }}>
                    {t('pricing.setup')}
                  </p>
                  <p className="display font-bold text-xl" style={{ color: 'var(--t1)' }}>{agent.setup}</p>
                </div>
                <div className="w-px self-stretch" style={{ background: 'var(--b1)' }} />
                <div>
                  <p className="text-xs mb-1.5 font-mono uppercase tracking-widest" style={{ color: 'var(--t4)' }}>
                    {t('pricing.monthly')}
                  </p>
                  <p
                    className="display font-extrabold"
                    style={{ fontSize: '34px', lineHeight: 1, color: agent.color }}
                  >
                    {agent.monthly[lang]}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {agent.includes[lang].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--t3)' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: agent.color }} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 self-start"
                style={{ background: agent.color }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'brightness(1.12)'
                  e.currentTarget.style.boxShadow = `0 0 20px rgba(${agent.colorRgb}, 0.4)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {t('pricing.hire')} {agent.name} →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {[
            {
              label: t('pricing.pack2'),
              badge: t('pricing.discount15'),
              accent: false,
              delay: 0.32,
            },
            {
              label: t('pricing.packFull'),
              badge: t('pricing.discount25'),
              tag: t('pricing.bestValue'),
              accent: true,
              delay: 0.4,
            },
          ].map((pack) => (
            <motion.div
              key={pack.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: pack.delay }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: pack.accent
                  ? 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.03) 100%)'
                  : 'var(--s1)',
                border: pack.accent
                  ? '1px solid rgba(99,102,241,0.25)'
                  : '1px solid var(--b1)',
              }}
            >
              {pack.accent && (
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)' }}
                />
              )}
              <div className="flex items-start justify-between mb-2">
                <h3 className="display font-bold text-lg" style={{ color: 'var(--t1)' }}>{pack.label}</h3>
                {pack.tag && (
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(99,102,241,0.15)',
                      border: '1px solid rgba(99,102,241,0.3)',
                      color: 'var(--accent2)',
                    }}
                  >
                    {pack.tag}
                  </span>
                )}
              </div>
              <p className="text-sm mb-5" style={{ color: 'var(--t4)' }}>{t('pricing.consult')}</p>
              <span
                className="inline-flex px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: 'var(--accent2)',
                }}
              >
                {pack.badge}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm mb-10 max-w-xl"
          style={{ color: 'var(--t4)' }}
        >
          {t('pricing.note')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200"
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
            {t('pricing.cta')}
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
