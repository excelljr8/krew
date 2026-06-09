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
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/agents/${agent.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div
          style={{
            background: '#0f172a',
            border: `1px solid rgba(${agent.colorRgb}, 0.2)`,
            borderRadius: '16px',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.5)`
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(${agent.colorRgb}, 0.12)`
            e.currentTarget.style.background = '#131e35'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.2)`
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.background = '#0f172a'
          }}
        >
          {/* Top color strip */}
          <div style={{ height: '3px', background: `linear-gradient(90deg, ${agent.color}, rgba(${agent.colorRgb},0.2))`, flexShrink: 0 }} />

          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  background: `rgba(${agent.colorRgb}, 0.15)`,
                  border: `1px solid rgba(${agent.colorRgb}, 0.3)`,
                  color: agent.color, fontFamily: 'Syne, sans-serif',
                  fontWeight: 800, fontSize: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {agent.initial}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: agent.color, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', lineHeight: 1 }}>
                      {agent.name}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: agent.color, flexShrink: 0 }} />
                  </div>
                  <p style={{ color: '#475569', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '3px' }}>
                    {agent.role[lang]}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ color: '#F1F5F9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: 1 }}>
                  {agent.monthly[lang]}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '20px' }} />

            {/* Tagline */}
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', marginBottom: '20px', flex: 1 }}>
              {agent.tagline[lang]}
            </p>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
              {agent.metrics.map((m) => (
                <div
                  key={m.value}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '8px',
                    padding: '10px 6px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: '#F1F5F9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={{ color: '#475569', fontSize: '10px', marginTop: '4px', lineHeight: 1.3 }}>
                    {m.label[lang]}
                  </div>
                </div>
              ))}
            </div>

            {/* Channels */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {agent.channels.map((ch) => (
                <span
                  key={ch}
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.08)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.2)`,
                    color: agent.color,
                    padding: '4px 10px', borderRadius: '99px',
                    fontSize: '12px', fontWeight: 500,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ color: agent.color, fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              {t('agents.cta')} →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
