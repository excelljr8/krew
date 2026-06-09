import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import AgentRow from '../components/AgentRow'
import { agents } from '../data/agents'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />

      {/* Agent list */}
      <section
        className="py-24"
        style={{ borderBottom: '1px solid var(--b1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-14">

          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs tracking-widest uppercase font-mono mb-3" style={{ color: 'var(--t4)' }}>
                {t('agents.label')}
              </p>
              <h2
                className="display font-extrabold leading-none"
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  letterSpacing: '-0.03em',
                  color: 'var(--t1)',
                }}
              >
                El equipo
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/agents"
                className="text-sm transition-colors duration-150 hidden sm:block"
                style={{ color: 'var(--t3)' }}
                onMouseEnter={e => (e.target.style.color = 'var(--t1)')}
                onMouseLeave={e => (e.target.style.color = 'var(--t3)')}
              >
                Ver todos →
              </Link>
            </motion.div>
          </div>

          {/* Table header */}
          <div
            className="hidden sm:grid grid-cols-[224px_1fr_auto] gap-4 pb-3 mb-1 text-xs tracking-widest uppercase font-mono"
            style={{ color: 'var(--t4)', borderBottom: '1px solid var(--b1)' }}
          >
            <span>Agente</span>
            <span>Descripción</span>
            <span className="pr-8">Precio</span>
          </div>

          {agents.map((agent, i) => (
            <AgentRow key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>

      <HowItWorks />

      {/* Final CTA */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl relative overflow-hidden"
            style={{
              padding: 'clamp(48px, 6vw, 80px)',
              background: 'var(--s1)',
              border: '1px solid var(--b1)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }}
            />
            <div className="max-w-xl">
              <h2
                className="display font-extrabold leading-none mb-5"
                style={{
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  letterSpacing: '-0.03em',
                  color: 'var(--t1)',
                }}
              >
                ¿Listo para tu<br />
                <span style={{ color: 'var(--accent)' }}>primer agente?</span>
              </h2>
              <p className="text-base mb-8" style={{ color: 'var(--t3)' }}>
                30 minutos. Sin compromiso. Te mostramos cómo encaja Krew en tu negocio.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200"
                style={{ background: 'var(--accent)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--accent2)'
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.45)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'none'
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
