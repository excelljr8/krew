import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t } = useTranslation()

  const title = t('hero.title')
  const words = title.split(' ')
  const lastWord = words[words.length - 1]
  const firstPart = words.slice(0, -1).join(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 text-center">
        {/* Pill badge */}
        <motion.div variants={fade} custom={0} initial="hidden" animate="show" className="mb-8">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{
              background: 'rgba(91,91,214,0.1)',
              border: '1px solid rgba(91,91,214,0.3)',
              color: 'var(--indigo-light)',
            }}
          >
            AI Employees · Instalados en días
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
          className="font-display font-extrabold leading-none tracking-tight mb-6 text-6xl md:text-7xl lg:text-8xl"
        >
          {firstPart}{' '}
          <span style={{ color: 'var(--indigo)' }}>{lastWord}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fade}
          custom={2}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: 'var(--grey-400)' }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fade}
          custom={3}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/agents"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-medium text-white transition-all duration-200"
            style={{ background: 'var(--indigo)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--indigo-light)'
              e.currentTarget.style.boxShadow = '0 0 32px rgba(91,91,214,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--indigo)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {t('hero.cta')}
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-medium transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--grey-400)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'var(--grey-400)'
            }}
          >
            {t('nav.book')}
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.p
          variants={fade}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-10 text-sm"
          style={{ color: 'var(--grey-600)' }}
        >
          {t('hero.social_proof')}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--grey-800)' }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--grey-800), transparent)' }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
