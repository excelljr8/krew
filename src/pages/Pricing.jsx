import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'

export default function Pricing() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  return (
    <div style={{ minHeight: '100vh', paddingTop: '112px', paddingBottom: '128px', position: 'relative' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
        top: '-150px', right: '-200px',
      }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ position: 'relative', zIndex: 1 }}>

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '72px' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '16px' }}>
            {t('pricing.label')}
          </p>
          <h1 className="display font-extrabold" style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            letterSpacing: '-0.03em', lineHeight: 1,
            color: '#F1F5F9', marginBottom: '16px',
          }}>
            {t('pricing.title')}
          </h1>
          <p style={{ fontSize: '16px', maxWidth: '500px', color: '#64748B', lineHeight: '1.6' }}>
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Agent cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ marginBottom: '20px' }}>
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                background: '#0f172a',
                border: `1px solid rgba(${agent.colorRgb}, ${agent.id === 'max' ? '0.35' : '0.18'})`,
                borderRadius: '16px', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'border-color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.55)`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, ${agent.id === 'max' ? '0.35' : '0.18'})`)}
            >
              {/* Colored top strip */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${agent.color}, rgba(${agent.colorRgb}, 0.15))` }} />

              {/* Most popular badge */}
              {agent.id === 'max' && (
                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    fontSize: '10px', padding: '3px 9px', borderRadius: '99px',
                    background: `rgba(${agent.colorRgb}, 0.12)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.35)`,
                    color: agent.color, fontWeight: 700, letterSpacing: '0.04em',
                  }}>
                    ★ MÁS POPULAR
                  </span>
                </div>
              )}

              <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Agent header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <div>
                    <h2 className="display font-extrabold" style={{ fontSize: '24px', color: agent.color, marginBottom: '4px' }}>
                      {agent.name}
                    </h2>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'monospace', color: '#475569' }}>
                      {agent.role[lang]}
                    </p>
                  </div>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                    background: `rgba(${agent.colorRgb}, 0.12)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.25)`,
                    color: agent.color, fontFamily: 'Syne, sans-serif',
                    fontWeight: 800, fontSize: '18px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {agent.initial}
                  </div>
                </div>

                {/* Pricing block */}
                <div style={{
                  display: 'flex', borderRadius: '12px', overflow: 'hidden',
                  border: `1px solid rgba(${agent.colorRgb}, 0.15)`,
                  marginBottom: '28px',
                }}>
                  <div style={{ flex: 1, padding: '16px 20px', background: `rgba(${agent.colorRgb}, 0.04)` }}>
                    <p style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#475569', marginBottom: '6px' }}>
                      {t('pricing.setup')}
                    </p>
                    <p className="display font-bold" style={{ fontSize: '22px', color: '#F1F5F9' }}>{agent.setup}</p>
                  </div>
                  <div style={{ width: '1px', background: `rgba(${agent.colorRgb}, 0.15)` }} />
                  <div style={{ flex: 1, padding: '16px 20px', background: `rgba(${agent.colorRgb}, 0.04)` }}>
                    <p style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#475569', marginBottom: '6px' }}>
                      {t('pricing.monthly')}
                    </p>
                    <p className="display font-extrabold" style={{ fontSize: '26px', color: agent.color, lineHeight: 1 }}>
                      {agent.monthly[lang]}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul style={{ flex: 1, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {agent.includes[lang].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#94A3B8' }}>
                      <span style={{
                        width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                        background: `rgba(${agent.colorRgb}, 0.12)`,
                        border: `1px solid rgba(${agent.colorRgb}, 0.25)`,
                        color: agent.color, fontSize: '10px', fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 20px', borderRadius: '10px',
                    background: agent.color, color: '#fff',
                    fontWeight: 600, fontSize: '14px',
                    textDecoration: 'none', alignSelf: 'flex-start',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = 'brightness(1.12)'
                    e.currentTarget.style.boxShadow = `0 0 24px rgba(${agent.colorRgb}, 0.5)`
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = 'none'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  {t('pricing.hire')} {agent.name} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ marginBottom: '56px' }}>
          {[
            { label: t('pricing.pack2'), badge: t('pricing.discount15'), accent: false, delay: 0.32 },
            { label: t('pricing.packFull'), badge: t('pricing.discount25'), tag: t('pricing.bestValue'), accent: true, delay: 0.4 },
          ].map((pack) => (
            <motion.div
              key={pack.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: pack.delay }}
              style={{
                background: pack.accent ? '#0f172a' : '#0f172a',
                border: pack.accent ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px', padding: '32px',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {pack.accent && (
                <div style={{
                  position: 'absolute', inset: '0 0 auto 0', height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.7), transparent)',
                }} />
              )}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px', position: 'relative', zIndex: 1 }}>
                <h3 className="display font-bold" style={{ fontSize: '20px', color: '#F1F5F9' }}>{pack.label}</h3>
                {pack.tag && (
                  <span style={{
                    fontSize: '12px', padding: '4px 10px', borderRadius: '99px',
                    background: 'rgba(99,102,241,0.15)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: '#818CF8', fontWeight: 500,
                  }}>
                    {pack.tag}
                  </span>
                )}
              </div>
              <p style={{ fontSize: '14px', color: '#475569', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                {t('pricing.consult')}
              </p>
              <span style={{
                display: 'inline-block', padding: '6px 14px', borderRadius: '99px',
                background: pack.accent ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.05)',
                border: pack.accent ? '1px solid rgba(99,102,241,0.28)' : '1px solid rgba(255,255,255,0.08)',
                color: pack.accent ? '#818CF8' : '#94A3B8',
                fontSize: '14px', fontWeight: 500,
                position: 'relative', zIndex: 1,
              }}>
                {pack.badge}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '14px', marginBottom: '40px', maxWidth: '520px', color: '#475569', lineHeight: '1.6' }}
        >
          {t('pricing.note')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <Link
            to="/book"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366F1, #7C3AED)',
              boxShadow: '0 0 24px rgba(99,102,241,0.35)',
              color: '#fff', fontWeight: 600, fontSize: '14px',
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.55)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.35)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {t('pricing.cta')} →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
