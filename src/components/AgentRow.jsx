import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function AgentRow({ agent, index }) {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/agents/${agent.id}`}
        className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 py-6 px-0 transition-all duration-150"
        style={{ borderBottom: '1px solid var(--b1)' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--s1)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        {/* Left — identity */}
        <div className="flex items-center gap-4 sm:w-56 flex-shrink-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{
              background: `rgba(${agent.colorRgb}, 0.12)`,
              border: `1px solid rgba(${agent.colorRgb}, 0.25)`,
              color: agent.color,
              fontFamily: 'Syne, sans-serif',
            }}
          >
            {agent.initial}
          </div>
          <div>
            <p
              className="text-base font-bold leading-none mb-0.5"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--t1)' }}
            >
              {agent.name}
            </p>
            <p className="text-xs" style={{ color: 'var(--t4)' }}>{agent.role[lang]}</p>
          </div>
        </div>

        {/* Center — tagline + channels */}
        <div className="flex-1 min-w-0 sm:px-8">
          <p className="text-sm leading-snug mb-2 truncate" style={{ color: 'var(--t2)' }}>
            {agent.tagline[lang]}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {agent.channels.map((ch) => (
              <span
                key={ch}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: `rgba(${agent.colorRgb}, 0.08)`,
                  color: 'var(--t3)',
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Right — price + arrow */}
        <div className="flex items-center gap-6 flex-shrink-0 sm:pl-8">
          <div className="text-right">
            <p className="text-xs mb-0.5" style={{ color: 'var(--t4)' }}>desde</p>
            <p
              className="font-bold leading-none"
              style={{ color: agent.color, fontFamily: 'Syne, sans-serif', fontSize: '18px' }}
            >
              {agent.monthly[lang]}
            </p>
          </div>
          <span
            className="text-sm transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: 'var(--t4)' }}
          >
            →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
