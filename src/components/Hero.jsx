import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const activityItems = [
  { agentId: 'sara', action: 'Lead calificado', detail: 'María García · hace 2m' },
  { agentId: 'max',  action: 'Ticket #847 resuelto', detail: 'Respuesta en 8s · hace 1m' },
  { agentId: 'aria', action: 'Cita confirmada', detail: 'Dr. López · 4:30 PM' },
  { agentId: 'cole', action: 'Reporte Q2 generado', detail: 'Ventas · ahora mismo' },
]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      style={{ minHeight: '100vh', paddingTop: '64px', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <div style={{
          position: 'absolute', width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)',
          top: '-250px', left: '-200px',
        }} />
        <div style={{
          position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)',
          bottom: '-80px', right: '10%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 40% 40%, black 10%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 40% 40%, black 10%, transparent 75%)',
        }} />
      </div>

      <div
        className="max-w-7xl mx-auto px-6 lg:px-14 w-full"
        style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 64px)', gap: '64px', paddingTop: '80px', paddingBottom: '80px' }}
      >
        {/* ── LEFT SIDE ── */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>

          {/* Badge */}
          <motion.div {...rise(0.05)} style={{ marginBottom: '32px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '99px',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.28)',
              color: '#818CF8', fontSize: '12px', fontWeight: 500,
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#6366F1', boxShadow: '0 0 8px rgba(99,102,241,0.9)',
                display: 'inline-block', flexShrink: 0,
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Krew — AI Employees
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...rise(0.12)} className="display font-extrabold" style={{
            fontSize: 'clamp(48px, 6vw, 96px)',
            letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '24px',
          }}>
            <span style={{ color: '#F1F5F9' }}>Tu próximo<br />empleado no<br /></span>
            <span style={{
              background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 50%, #22D3EE 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              es humano.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p {...rise(0.2)} style={{
            fontSize: '17px', lineHeight: '1.7', marginBottom: '40px',
            maxWidth: '420px', color: '#64748B', fontWeight: 400,
          }}>
            Agentes de IA con roles reales — ventas, soporte, recepción, operaciones.
            Instalados en tu negocio en días.
          </motion.p>

          {/* CTAs */}
          <motion.div {...rise(0.28)} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
            <Link
              to="/agents"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 24px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366F1, #7C3AED)',
                boxShadow: '0 0 28px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
                color: '#fff', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 44px rgba(99,102,241,0.6), inset 0 1px 0 rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 28px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'none' }}
            >
              {t('hero.cta')} →
            </Link>
            <Link
              to="/pricing"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 24px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#94A3B8', fontWeight: 500, fontSize: '14px', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F1F5F9'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            >
              Ver precios
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div {...rise(0.35)} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { value: '4', label: 'agentes disponibles' },
              { value: '24/7', label: 'sin interrupciones' },
              { value: '< 7 días', label: 'de instalación' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 20px', flexShrink: 0 }} />}
                <span className="display" style={{ fontSize: '17px', color: '#F1F5F9', fontWeight: 800, marginRight: '7px' }}>{stat.value}</span>
                <span style={{ fontSize: '13px', color: '#475569' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT SIDE — Live Activity Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
          style={{ flex: '0 0 380px', width: '380px' }}
        >
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
          }}>
            {/* Panel header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', boxShadow: '0 0 8px rgba(52,211,153,0.7)', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
                <span style={{ color: '#94A3B8', fontSize: '13px', fontWeight: 500 }}>Actividad en tiempo real</span>
              </div>
              <span style={{
                fontSize: '11px', padding: '3px 8px', borderRadius: '99px',
                background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
                color: '#34D399', fontWeight: 500,
              }}>4 activos</span>
            </div>

            {/* Activity items */}
            <div style={{ padding: '12px' }}>
              {activityItems.map((item, i) => {
                const agent = agents.find(a => a.id === item.agentId)
                return (
                  <motion.div
                    key={item.agentId}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '12px 14px', borderRadius: '12px',
                      marginBottom: i < activityItems.length - 1 ? '6px' : 0,
                      background: `rgba(${agent.colorRgb}, 0.05)`,
                      border: `1px solid rgba(${agent.colorRgb}, 0.12)`,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `rgba(${agent.colorRgb}, 0.1)`; e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.25)` }}
                    onMouseLeave={e => { e.currentTarget.style.background = `rgba(${agent.colorRgb}, 0.05)`; e.currentTarget.style.borderColor = `rgba(${agent.colorRgb}, 0.12)` }}
                  >
                    {/* Avatar */}
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                      background: `rgba(${agent.colorRgb}, 0.15)`,
                      border: `1px solid rgba(${agent.colorRgb}, 0.3)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: agent.color, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '14px',
                    }}>
                      {agent.initial}
                    </div>
                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '2px' }}>
                        <span style={{ color: agent.color, fontWeight: 700, fontSize: '13px', fontFamily: 'Syne, sans-serif' }}>
                          {agent.name}
                        </span>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: agent.color, flexShrink: 0, opacity: 0.8 }} />
                      </div>
                      <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.action}
                      </p>
                      <p style={{ color: '#334155', fontSize: '11px', margin: '2px 0 0', lineHeight: 1 }}>
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Footer */}
            <div style={{
              padding: '14px 20px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <div style={{ display: 'flex', gap: '-4px' }}>
                {agents.map((a, i) => (
                  <div key={a.id} style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: `rgba(${a.colorRgb}, 0.2)`,
                    border: `2px solid #0f172a`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginLeft: i > 0 ? '-6px' : 0,
                    color: a.color, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '9px',
                  }}>
                    {a.initial}
                  </div>
                ))}
              </div>
              <span style={{ fontSize: '12px', color: '#475569' }}>Todos los agentes operativos</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
