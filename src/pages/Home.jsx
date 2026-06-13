import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import AgentCard from '../components/AgentCard'
import { agents } from '../data/agents'

const stats = [
  { value: '500+', label: 'contactos/día' },
  { value: '<10s', label: 'tiempo de respuesta' },
  { value: '24/7', label: 'sin interrupciones' },
  { value: '80%', label: 'resolución automática' },
]

const industries = [
  { initial: 'CS', name: 'Clínicas & Salud',    agents: ['ARIA', 'MAX'],  colorRgb: '244,114,182', desc: 'Citas, recordatorios y soporte continuo' },
  { initial: 'LC', name: 'Legal & Consultoría', agents: ['SARA', 'COLE'], colorRgb: '99,102,241',  desc: 'Prospección y operaciones automatizadas' },
  { initial: 'EC', name: 'E-commerce',          agents: ['MAX', 'COLE'],  colorRgb: '34,211,238',  desc: 'Soporte 24/7 y operaciones sin parar' },
  { initial: 'AS', name: 'Agencias & SaaS',     agents: ['SARA', 'COLE'], colorRgb: '52,211,153',  desc: 'Pipeline automático y reportes en vivo' },
  { initial: 'RE', name: 'Restaurantes',        agents: ['ARIA', 'MAX'],  colorRgb: '251,191,36',  desc: 'Reservas y atención al instante' },
  { initial: 'RI', name: 'Real Estate',         agents: ['SARA', 'ARIA'], colorRgb: '129,140,248', desc: 'Leads cualificados y citas coordinadas' },
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />

      {/* Stats trust bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.012)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  flex: '1 1 0', minWidth: '120px',
                  padding: '30px 24px', textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <div className="display font-extrabold" style={{
                  fontSize: '28px', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '5px',
                  background: 'linear-gradient(135deg, #F1F5F9 50%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '11px', color: '#475569', letterSpacing: '0.03em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Agents grid */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px', gap: '24px' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '14px' }}>
                {t('agents.label')}
              </p>
              <h2 className="display font-extrabold" style={{
                fontSize: 'clamp(38px, 4.5vw, 60px)',
                letterSpacing: '-0.03em', lineHeight: 1,
                color: '#F1F5F9',
              }}>
                El equipo
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="hidden sm:flex"
              style={{ alignItems: 'center', gap: '8px', flexShrink: 0 }}
            >
              <Link
                to="/agents"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '13px', color: '#475569', textDecoration: 'none',
                  padding: '8px 16px', borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F1F5F9'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'transparent' }}
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
      <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '14px' }}>
                Sectores
              </p>
              <h2 className="display font-extrabold" style={{
                fontSize: 'clamp(38px, 4.5vw, 60px)',
                letterSpacing: '-0.03em', lineHeight: 1,
                color: '#F1F5F9',
              }}>
                Adaptado a<br/>tu sector
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              style={{ fontSize: '15px', color: '#475569', maxWidth: '300px', lineHeight: 1.65 }}
            >
              Krew encaja en cualquier negocio con volumen de interacciones.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{
                  background: '#0b1524',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.22s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `rgba(${ind.colorRgb}, 0.28)`
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.3)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <p style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '15px', lineHeight: 1.25, marginBottom: '5px' }}>{ind.name}</p>
                    <p style={{ color: '#475569', fontSize: '12px', lineHeight: 1.5 }}>{ind.desc}</p>
                  </div>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0, marginLeft: '12px',
                    background: `rgba(${ind.colorRgb}, 0.1)`,
                    border: `1px solid rgba(${ind.colorRgb}, 0.2)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: `rgb(${ind.colorRgb})`,
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '10px',
                    letterSpacing: '0.02em',
                  }}>
                    {ind.initial}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                  {ind.agents.map(name => (
                    <span key={name} style={{
                      fontSize: '10px', padding: '3px 8px', borderRadius: '99px',
                      background: `rgba(${ind.colorRgb}, 0.08)`,
                      border: `1px solid rgba(${ind.colorRgb}, 0.2)`,
                      color: `rgb(${ind.colorRgb})`, fontWeight: 600, fontFamily: 'monospace',
                      letterSpacing: '0.04em',
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
      <section style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 65%)',
        }} aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #0d1526 0%, #0b1220 100%)',
              border: '1px solid rgba(99,102,241,0.18)',
              borderRadius: '24px',
              padding: 'clamp(52px, 7vw, 88px)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Gradient top line */}
            <div style={{ position: 'absolute', inset: '0 0 auto 0', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.8), transparent)' }} />
            {/* Glow */}
            <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '-200px', right: '-100px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ maxWidth: '500px' }}>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'monospace', color: '#475569', marginBottom: '20px' }}>
                  Empieza hoy
                </p>
                <h2 className="display font-extrabold" style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  letterSpacing: '-0.03em', lineHeight: 1,
                  color: '#F1F5F9', marginBottom: '18px',
                }}>
                  ¿Listo para tu<br />
                  <span style={{ background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 45%, #22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    primer agente?
                  </span>
                </h2>
                <p style={{ fontSize: '16px', color: '#64748B', lineHeight: '1.65', marginBottom: '28px' }}>
                  30 minutos. Sin compromiso. Te mostramos cómo encaja Krew en tu negocio.
                </p>
                {/* Feature list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Sin contrato a largo plazo', 'Tu agente activo en menos de 7 días', 'Soporte dedicado en el onboarding'].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                        background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#818CF8', fontSize: '10px',
                      }}>✓</div>
                      <span style={{ fontSize: '14px', color: '#64748B' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <Link
                  to="/book"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '16px 36px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #6366F1, #7C3AED)',
                    boxShadow: '0 0 32px rgba(99,102,241,0.45), inset 0 1px 0 rgba(255,255,255,0.12)',
                    color: '#fff', fontWeight: 600, fontSize: '15px',
                    textDecoration: 'none', transition: 'all 0.2s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 52px rgba(99,102,241,0.65), inset 0 1px 0 rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.45), inset 0 1px 0 rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'none' }}
                >
                  {t('pricing.cta')} →
                </Link>
                <p style={{ fontSize: '12px', color: '#334155', textAlign: 'center' }}>
                  Sin tarjeta de crédito · Respuesta en 24h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
