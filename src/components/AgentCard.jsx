import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function AgentCard({ agent, index = 0 }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link to={`/agents/${agent.id}`} className="block h-full group">
        <div
          className="h-full flex flex-col overflow-hidden transition-all duration-300 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid rgba(${agent.colorRgb}, 0.2)`,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.5)`
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(${agent.colorRgb}, 0.15)`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.2)`
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {/* Colored header */}
          <div
            className="relative flex items-end px-7 pt-7 pb-5 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(${agent.colorRgb}, 0.18) 0%, rgba(${agent.colorRgb}, 0.06) 100%)`,
              borderBottom: `1px solid rgba(${agent.colorRgb}, 0.15)`,
            }}
          >
            {/* Big decorative initial */}
            <span
              className="absolute right-4 top-1 font-display font-extrabold select-none pointer-events-none"
              style={{
                fontSize: '80px',
                lineHeight: 1,
                color: agent.color,
                opacity: 0.12,
              }}
            >
              {agent.initial}
            </span>

            {/* Avatar + name */}
            <div className="relative z-10 flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-lg flex-shrink-0"
                style={{ background: `rgba(${agent.colorRgb}, 0.2)`, color: agent.color }}
              >
                {agent.initial}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-display font-extrabold text-2xl leading-none"
                    style={{ color: agent.color }}
                  >
                    {agent.name}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                    style={{ background: agent.color }}
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest mt-0.5" style={{ color: 'var(--grey-600)' }}>
                  {agent.role[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-7">
            {/* Tagline */}
            <p className="text-[15px] leading-relaxed mb-5 flex-1" style={{ color: 'var(--grey-400)' }}>
              {agent.tagline[lang]}
            </p>

            {/* Channels */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {agent.channels.map((ch) => (
                <span
                  key={ch}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.1)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.22)`,
                    color: agent.color,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div
              className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
              style={{ color: agent.color }}
            >
              {t('agents.cta')}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
