import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function BookCall() {
  const { t } = useTranslation()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => { if (document.head.contains(script)) document.head.removeChild(script) }
  }, [])

  return (
    <div style={{ minHeight: '100vh', paddingTop: '112px', paddingBottom: '128px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)',
        top: '-100px', left: '50%', transform: 'translateX(-50%)',
      }} aria-hidden="true" />

      <div className="max-w-2xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '16px' }}>
            Krew
          </p>
          <h1 className="display font-extrabold" style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            letterSpacing: '-0.03em', lineHeight: 1,
            color: '#F1F5F9', marginBottom: '16px',
          }}>
            {t('book.title')}
          </h1>
          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: '1.65' }}>
            {t('book.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden' }}
        >
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/krew/intro"
            style={{ minHeight: '700px' }}
          />
        </motion.div>

      </div>
    </div>
  )
}
