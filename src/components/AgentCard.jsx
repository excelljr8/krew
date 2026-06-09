import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function AgentCard({ agent, index = 0 }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <Link to={`/agents/${agent.id}`} className="block h-full group">
        <div
          className="h-full flex flex-col relative overflow-hidden transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '32px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
            e.currentTarget.style.boxShadow = `0 0 40px rgba(0,0,0,0.5)`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: agent.color, borderRadius: '16px 16px 0 0' }}
          />

          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-base mb-5 flex-shrink-0"
            style={{
              background: `${agent.color}20`,
              color: agent.color,
            }}
          >
            {agent.initial}
          </div>

          {/* Name + status */}
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-display font-extrabold"
              style={{ fontSize: '28px', color: agent.color, lineHeight: 1 }}
            >
              {agent.name}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: agent.color }}
            />
          </div>

          {/* Role */}
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--grey-600)' }}>
            {agent.role[lang]}
          </p>

          {/* Tagline */}
          <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--grey-400)' }}>
            {agent.tagline[lang]}
          </p>

          {/* Channels */}
          <div className="flex flex-wrap gap-2 mb-6">
            {agent.channels.map((ch) => (
              <span
                key={ch}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  background: `${agent.color}12`,
                  border: `1px solid ${agent.color}28`,
                  color: agent.color,
                }}
              >
                {ch}
              </span>
            ))}
          </div>

          {/* CTA */}
          <span
            className="text-sm font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
            style={{ color: agent.color }}
          >
            {t('agents.cta')}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
