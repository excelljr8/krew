import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function AgentRow({ agent, index }) {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/agents/${agent.id}`}
        style={{ textDecoration: 'none', display: 'block' }}
      >
        <div
          style={{
            display: 'grid', gridTemplateColumns: '220px 1fr auto',
            alignItems: 'center', gap: '24px',
            padding: '20px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '0',
            transition: 'all 0.15s',
            margin: '0 -20px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#0f172a'
            e.currentTarget.style.borderRadius = '12px'
            e.currentTarget.style.borderBottomColor = 'transparent'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderRadius = '0'
            e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.06)'
          }}
        >
          {/* Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
              background: `rgba(${agent.colorRgb}, 0.12)`,
              border: `1px solid rgba(${agent.colorRgb}, 0.25)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: agent.color, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '16px',
            }}>
              {agent.initial}
            </div>
            <div>
              <p style={{ fontFamily: 'Syne, sans-serif', color: '#F1F5F9', fontWeight: 700, fontSize: '15px', lineHeight: 1, marginBottom: '3px' }}>
                {agent.name}
              </p>
              <p style={{ color: '#475569', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {agent.role[lang]}
              </p>
            </div>
          </div>

          {/* Tagline + channels */}
          <div style={{ minWidth: 0 }}>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.4, marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {agent.tagline[lang]}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {agent.channels.map((ch) => (
                <span
                  key={ch}
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.08)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.18)`,
                    color: agent.color,
                    padding: '3px 9px', borderRadius: '99px',
                    fontSize: '11px', fontWeight: 500,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* Price + arrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: '#334155', marginBottom: '3px' }}>desde</p>
              <p style={{ fontFamily: 'Syne, sans-serif', color: agent.color, fontWeight: 700, fontSize: '17px', lineHeight: 1 }}>
                {agent.monthly[lang]}
              </p>
            </div>
            <span style={{ color: '#334155', fontSize: '16px', transition: 'transform 0.2s', display: 'block' }}>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
