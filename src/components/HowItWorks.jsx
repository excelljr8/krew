import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

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
          style={{ marginBottom: '64px' }}
        >
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
            maxWidth: '16ch',
          }}>
            {t('how.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#0f172a',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Step badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '12px',
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.25)',
                color: '#818CF8',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '15px',
                marginBottom: '28px', flexShrink: 0,
              }}>
                {step.number}
              </div>

              <p style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '15px', marginBottom: '10px', lineHeight: 1.3 }}>
                {step.title}
              </p>
              <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.65', flex: 1 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
