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
            background: '#0b1524',
            border: `1px solid rgba(${agent.colorRgb}, 0.18)`,
            borderRadius: '20px',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            position: 'relative',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.45)`
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = `0 24px 56px rgba(0,0,0,0.5), 0 0 0 1px rgba(${agent.colorRgb}, 0.1), 0 0 40px rgba(${agent.colorRgb}, 0.05)`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.18)`
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {/* Top color strip */}
          <div style={{ height: '4px', background: `linear-gradient(90deg, ${agent.color}, rgba(${agent.colorRgb},0.15))`, flexShrink: 0 }} />

          <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                  background: `rgba(${agent.colorRgb}, 0.12)`,
                  border: `1px solid rgba(${agent.colorRgb}, 0.28)`,
                  color: agent.color, fontFamily: 'Syne, sans-serif',
                  fontWeight: 800, fontSize: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {agent.initial}
                </div>
                <div>
                  <p style={{ color: agent.color, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '22px', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {agent.name}
                  </p>
                  <p style={{ color: '#475569', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.09em', marginTop: '4px' }}>
                    {agent.role[lang]}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#F1F5F9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '19px', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {agent.monthly[lang]}
                </p>
                <p style={{ color: '#334155', fontSize: '11px', marginTop: '3px' }}>al mes</p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '20px' }} />

            {/* Tagline */}
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', marginBottom: '24px', flex: 1 }}>
              {agent.tagline[lang]}
            </p>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '18px' }}>
              {agent.metrics.map((m) => (
                <div
                  key={m.value}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    padding: '11px 8px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: '#F1F5F9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: 1, marginBottom: '4px' }}>
                    {m.value}
                  </div>
                  <div style={{ color: '#475569', fontSize: '10px', lineHeight: 1.3 }}>
                    {m.label[lang]}
                  </div>
                </div>
              ))}
            </div>

            {/* Channels */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
              {agent.channels.map((ch) => (
                <span
                  key={ch}
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.07)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.18)`,
                    color: agent.color,
                    padding: '4px 10px', borderRadius: '99px',
                    fontSize: '11px', fontWeight: 500,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', borderRadius: '10px',
              background: `rgba(${agent.colorRgb}, 0.07)`,
              border: `1px solid rgba(${agent.colorRgb}, 0.15)`,
            }}>
              <span style={{ color: agent.color, fontSize: '13px', fontWeight: 600 }}>
                {t('agents.cta')}
              </span>
              <span style={{ color: agent.color, fontSize: '16px' }}>→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
