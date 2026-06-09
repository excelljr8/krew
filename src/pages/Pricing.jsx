import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'

export default function Pricing() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  return (
    <div className="min-h-screen px-6 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--grey-600)' }}>
            {t('pricing.label')}
          </p>
          <h1 className="font-display font-extrabold text-white text-5xl md:text-6xl mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-lg" style={{ color: 'var(--grey-400)' }}>
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Agent cards — 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div
                className="rounded-2xl relative overflow-hidden transition-all duration-200 h-full"
                style={{
                  padding: '32px',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${agent.color}22`,
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${agent.color}45`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = `${agent.color}22`)}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: agent.color }} />

                {/* Name + avatar */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="font-display font-extrabold text-2xl mb-1" style={{ color: agent.color }}>
                      {agent.name}
                    </h2>
                    <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--grey-600)' }}>
                      {agent.role[lang]}
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold"
                    style={{ background: `${agent.color}15`, color: agent.color }}
                  >
                    {agent.initial}
                  </div>
                </div>

                {/* Prices — stacked with more space */}
                <div className="flex gap-10 mb-8 items-end">
                  <div>
                    <p className="text-sm mb-2" style={{ color: 'var(--grey-400)' }}>
                      {t('pricing.setup')}
                    </p>
                    <p className="font-display font-bold text-2xl text-white">{agent.setup}</p>
                  </div>
                  <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  <div>
                    <p className="text-sm mb-2" style={{ color: 'var(--grey-400)' }}>
                      {t('pricing.monthly')}
                    </p>
                    <p className="font-display font-bold text-4xl" style={{ color: agent.color }}>
                      {agent.monthly[lang]}
                    </p>
                  </div>
                </div>

                {/* Includes */}
                <ul className="space-y-2.5 mb-8">
                  {agent.includes[lang].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--grey-400)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: agent.color }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200"
                  style={{ background: agent.color }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.12)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
                >
                  {t('pricing.hire')} {agent.name} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pack cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3 className="font-display font-bold text-white text-xl mb-2">{t('pricing.pack2')}</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--grey-600)' }}>{t('pricing.consult')}</p>
            <span
              className="inline-flex px-3 py-1.5 rounded-full text-sm font-medium"
              style={{ background: 'rgba(91,91,214,0.12)', border: '1px solid rgba(91,91,214,0.25)', color: 'var(--indigo-light)' }}
            >
              {t('pricing.discount15')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(91,91,214,0.1) 0%, rgba(91,91,214,0.03) 100%)',
              border: '1px solid rgba(91,91,214,0.28)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(91,91,214,0.7), transparent)' }}
            />
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display font-bold text-white text-xl">{t('pricing.packFull')}</h3>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: 'rgba(91,91,214,0.15)', border: '1px solid rgba(91,91,214,0.3)', color: 'var(--indigo-light)' }}
              >
                {t('pricing.bestValue')}
              </span>
            </div>
            <p className="text-sm mb-6" style={{ color: 'var(--grey-600)' }}>{t('pricing.consult')}</p>
            <span
              className="inline-flex px-3 py-1.5 rounded-full text-sm font-medium"
              style={{ background: 'rgba(91,91,214,0.2)', border: '1px solid rgba(91,91,214,0.4)', color: '#A5B4FC' }}
            >
              {t('pricing.discount25')}
            </span>
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-sm text-center mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--grey-600)' }}
        >
          {t('pricing.note')}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white transition-all duration-200"
            style={{ background: 'var(--indigo)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--indigo-light)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(91,91,214,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--indigo)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {t('pricing.cta')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
