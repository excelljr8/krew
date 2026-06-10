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

const industries = [
  { icon: '🏥', name: 'Clínicas & Salud',     agents: ['ARIA', 'MAX'],  colorRgb: '244,114,182', desc: 'Citas, recordatorios y soporte continuo' },
  { icon: '⚖️', name: 'Legal & Consultoría',  agents: ['SARA', 'COLE'], colorRgb: '99,102,241',  desc: 'Prospección y operaciones automatizadas' },
  { icon: '🛍️', name: 'E-commerce',           agents: ['MAX', 'COLE'],  colorRgb: '34,211,238',  desc: 'Soporte 24/7 y operaciones sin parar' },
  { icon: '🏢', name: 'Agencias & SaaS',      agents: ['SARA', 'COLE'], colorRgb: '52,211,153',  desc: 'Pipeline automático y reportes en vivo' },
  { icon: '🍽️', name: 'Restaurantes',         agents: ['ARIA', 'MAX'],  colorRgb: '251,191,36',  desc: 'Reservas y atención al instante' },
  { icon: '🏡', name: 'Real Estate',          agents: ['SARA', 'ARIA'], colorRgb: '129,140,248', desc: 'Leads cualificados y citas coordinadas' },
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />

      {/* Stats trust bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  flex: '1 1 0', minWidth: '120px',
                  padding: '32px 20px', textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  position: 'relative',
                }}
              >
                <div className="display font-extrabold" style={{
                  fontSize: '30px', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px',
                  background: 'linear-gradient(135deg, #F1F5F9 60%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
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

      {/* Industries */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '60px' }}
          >
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '12px' }}>
              Sectores
            </p>
            <h2 className="display font-extrabold" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1, color: '#F1F5F9', maxWidth: '18ch' }}>
              Adaptado a tu sector
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '24px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${ind.colorRgb},0.3)`; e.currentTarget.style.background = '#111827' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#0f172a' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '24px', width: '44px', height: '44px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `rgba(${ind.colorRgb}, 0.08)`,
                    borderRadius: '11px',
                    flexShrink: 0,
                  }}>
                    {ind.icon}
                  </span>
                  <div>
                    <p style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '15px', lineHeight: 1.2 }}>{ind.name}</p>
                    <p style={{ color: '#475569', fontSize: '12px', marginTop: '2px' }}>{ind.desc}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                  {ind.agents.map(name => (
                    <span key={name} style={{
                      fontSize: '10px', padding: '2px 8px', borderRadius: '99px',
                      background: `rgba(${ind.colorRgb}, 0.08)`,
                      border: `1px solid rgba(${ind.colorRgb}, 0.2)`,
                      color: `rgb(${ind.colorRgb})`, fontWeight: 600, fontFamily: 'monospace',
                    }}>
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
