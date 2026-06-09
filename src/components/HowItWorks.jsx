import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const steps = t('how.steps', { returnObjects: true })

  return (
    <section ref={ref} className="py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Label + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--grey-600)' }}>
            {t('how.label')}
          </p>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
            {t('how.heading')}
          </h2>
        </motion.div>

        {/* Steps — 4-col grid with gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-8 transition-colors duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              <div
                className="font-display font-bold text-5xl select-none leading-none"
                style={{ color: 'var(--indigo)' }}
              >
                {step.number}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mt-4">
                {step.title}
              </h3>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--grey-400)' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
