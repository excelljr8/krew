import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import AgentCard from '../components/AgentCard'
import { agents } from '../data/agents'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />
      <HowItWorks />

      {/* Team preview */}
      <section
        className="py-24 px-6 lg:px-16"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--grey-600)' }}>
              {t('agents.label')}
            </p>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl max-w-xl">
              {t('agents.subtitle')}
            </h2>
          </motion.div>

          {/* 2-col grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {agents.map((agent, i) => (
              <AgentCard key={agent.id} agent={agent} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <Link
              to="/agents"
              className="px-6 py-3 rounded-xl text-sm transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--grey-400)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = 'var(--grey-400)'
              }}
            >
              Ver el equipo completo →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="rounded-3xl text-center relative overflow-hidden"
              style={{
                padding: '80px 48px',
                background: 'rgba(91,91,214,0.06)',
                border: '1px solid rgba(91,91,214,0.2)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(91,91,214,0.6), transparent)' }}
              />
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6">
                ¿Listo para tu primer agente?
              </h2>
              <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--grey-400)' }}>
                30 minutos. Sin compromiso. Te mostramos cómo encaja Krew en tu negocio.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white transition-all duration-200"
                style={{ background: 'var(--indigo)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--indigo-light)'
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(91,91,214,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--indigo)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {t('pricing.cta')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
