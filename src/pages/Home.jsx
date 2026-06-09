import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import AgentCard from '../components/AgentCard'
import { agents } from '../data/agents'

const stats = [
  { value: '500+', label: 'contactos al día' },
  { value: '< 10s', label: 'tiempo de respuesta' },
  { value: '24/7', label: 'sin interrupciones' },
  { value: '80%', label: 'tickets auto-resueltos' },
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />

      {/* Stats trust bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  flex: '1 1 0', minWidth: '120px',
                  padding: '28px 20px', textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div className="display font-extrabold" style={{ fontSize: '28px', color: '#F1F5F9', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '4px' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '12px', color: '#475569' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Agents grid */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '12px' }}>
                {t('agents.label')}
              </p>
              <h2 className="display font-extrabold" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1, color: '#F1F5F9' }}>
                El equipo
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="hidden sm:block">
              <Link
                to="/agents"
                style={{ fontSize: '14px', color: '#475569', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.target.style.color = '#F1F5F9')}
                onMouseLeave={e => (e.target.style.color = '#475569')}
              >
                Ver todos →
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {agents.map((agent, i) => (
              <AgentCard key={agent.id} agent={agent} index={i} />
            ))}
          </div>

        </div>
      </section>

      <HowItWorks />

      {/* Final CTA */}
      <section style={{ padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }} aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: '#0f172a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: 'clamp(48px, 6vw, 80px)',
              position: 'relative', overflow: 'hidden',
              display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between',
            }}
          >
            <div style={{ position: 'absolute', inset: '0 0 auto 0', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.7), transparent)' }} />
            <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '-150px', right: '-100px', pointerEvents: 'none' }} />

            <div style={{ maxWidth: '480px', position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '20px' }}>
                Empieza hoy
              </p>
              <h2 className="display font-extrabold" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1, color: '#F1F5F9', marginBottom: '16px' }}>
                ¿Listo para tu<br />
                <span style={{ background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 50%, #22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  primer agente?
                </span>
              </h2>
              <p style={{ fontSize: '16px', color: '#64748B', lineHeight: '1.65' }}>
                30 minutos. Sin compromiso. Te mostramos cómo encaja Krew en tu negocio.
              </p>
            </div>

            <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
              <Link
                to="/book"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '16px 32px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6366F1, #7C3AED)',
                  boxShadow: '0 0 28px rgba(99,102,241,0.4)',
                  color: '#fff', fontWeight: 600, fontSize: '15px',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 48px rgba(99,102,241,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 28px rgba(99,102,241,0.4)'; e.currentTarget.style.transform = 'none' }}
              >
                {t('pricing.cta')} →
              </Link>
              <p style={{ fontSize: '12px', color: '#334155', textAlign: 'center', marginTop: '12px' }}>
                Sin tarjeta de crédito
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
