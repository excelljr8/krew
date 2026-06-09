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
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--grey-600)' }}>
            Krew
          </p>
          <h1 className="font-display font-extrabold text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            {t('book.title')}
          </h1>
          <p className="text-lg" style={{ color: 'var(--grey-400)' }}>
            {t('book.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
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
