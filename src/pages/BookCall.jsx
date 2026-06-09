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
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-2xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest uppercase font-mono mb-4" style={{ color: 'var(--t4)' }}>
            Krew
          </p>
          <h1
            className="display font-extrabold leading-none mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              letterSpacing: '-0.03em',
              color: 'var(--t1)',
            }}
          >
            {t('book.title')}
          </h1>
          <p className="text-base" style={{ color: 'var(--t3)' }}>
            {t('book.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{ background: 'var(--s1)', border: '1px solid var(--b1)' }}
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
