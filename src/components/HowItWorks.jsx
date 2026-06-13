import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const stepIcons = [
  // Chat bubble — "tell us your business"
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>,
  // Gear — "we configure"
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>,
  // Zap — "installed in days"
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  // Bar chart — "focus on growing"
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>,
]

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('how.steps', { returnObjects: true })

  return (
    <section style={{ padding: '112px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px' }}
        >
          <div>
            <p style={{
              fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'monospace', color: '#475569', marginBottom: '16px',
            }}>
              {t('how.label')}
            </p>
            <h2 className="display font-extrabold" style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              letterSpacing: '-0.03em',
              color: '#F1F5F9',
              lineHeight: 1,
              maxWidth: '14ch',
            }}>
              {t('how.heading')}
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: '#475569', maxWidth: '320px', lineHeight: 1.6 }}>
            Sin meses de integración. Sin equipos de IT. Empiezas a ver resultados la primera semana.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div style={{ position: 'relative' }}>
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block" style={{
            position: 'absolute',
            top: '32px',
            left: 'calc(12.5% + 20px)',
            right: 'calc(12.5% + 20px)',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(99,102,241,0.4), rgba(34,211,238,0.4))',
            zIndex: 0,
          }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ position: 'relative', zIndex: 1 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s, transform 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none' }}
              >
                {/* Ghost step number */}
                <div style={{
                  position: 'absolute', top: '-8px', right: '16px',
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: '88px', lineHeight: 1, color: 'rgba(99,102,241,0.04)',
                  letterSpacing: '-0.05em', userSelect: 'none', pointerEvents: 'none',
                  zIndex: 0,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Step icon */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: 'rgba(99,102,241,0.1)',
                      border: '1px solid rgba(99,102,241,0.22)',
                      color: '#818CF8',
                      flexShrink: 0,
                    }}>
                      {stepIcons[i]}
                    </div>
                    <span style={{
                      fontFamily: 'monospace', fontSize: '11px', color: '#334155',
                      fontWeight: 600, letterSpacing: '0.08em',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '15px', marginBottom: '10px', lineHeight: 1.35 }}>
                    {step.title}
                  </p>
                  <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.65', flex: 1 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
