import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('how.steps', { returnObjects: true })

  return (
    <section
      className="py-28"
      style={{ borderBottom: '1px solid var(--b1)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase font-mono mb-4" style={{ color: 'var(--t4)' }}>
            {t('how.label')}
          </p>
          <h2
            className="display font-extrabold leading-none"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.03em',
              color: 'var(--t1)',
              maxWidth: '14ch',
            }}
          >
            {t('how.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 pr-8 lg:pr-12"
              style={{
                borderLeft: i > 0 ? '1px solid var(--b1)' : 'none',
                paddingLeft: i > 0 ? '2rem' : 0,
              }}
            >
              <p
                className="display font-extrabold mb-6 leading-none"
                style={{ fontSize: '56px', color: 'var(--b2)', letterSpacing: '-0.04em' }}
              >
                {step.number}
              </p>
              <p className="font-semibold mb-2" style={{ color: 'var(--t1)', fontSize: '15px' }}>
                {step.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--t3)' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
