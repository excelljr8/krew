import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { agents } from '../data/agents'

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const allActivities = [
  { agentId: 'sara', action: 'Lead calificado',       detail: 'María García · hace 2m' },
  { agentId: 'max',  action: 'Ticket #847 resuelto',  detail: 'Respuesta en 8s · hace 1m' },
  { agentId: 'aria', action: 'Cita confirmada',       detail: 'Dr. López · 4:30 PM hoy' },
  { agentId: 'cole', action: 'Reporte Q2 generado',   detail: 'Ventas · ahora mismo' },
  { agentId: 'sara', action: 'Email automatizado',    detail: 'Carlos R. · hace 30s' },
  { agentId: 'max',  action: 'Chat resuelto',         detail: 'Web · resp. en <5s' },
  { agentId: 'aria', action: 'Llamada gestionada',    detail: 'Nueva cita confirmada' },
  { agentId: 'cole', action: 'Alerta procesada',      detail: 'Stock bajo → Slack' },
]

export default function Hero() {
  const { t } = useTranslation()
  const uidRef = useRef(allActivities.length)
  const idxRef = useRef(allActivities.length)

  const [items, setItems] = useState(() =>
    allActivities.slice(0, 4).map((a, i) => ({ ...a, uid: i }))
  )

  useEffect(() => {
    const id = setInterval(() => {
      const next = allActivities[idxRef.current % allActivities.length]
      const item = { ...next, uid: uidRef.current }
      idxRef.current++
      uidRef.current++
      setItems(prev => [item, ...prev.slice(0, 3)])
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{ minHeight: '100vh', paddingTop: '64px', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <div style={{
          position: 'absolute', width: '900px', height: '900px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 60%)',
          top: '-300px', left: '-250px',
        }} />
        <div style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 65%)',
          bottom: '-100px', right: '5%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 40% 40%, black 10%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 70% 65% at 40% 40%, black 10%, transparent 75%)',
        }} />
      </div>

      <div
        className="max-w-7xl mx-auto px-6 lg:px-14 w-full"
        style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 64px)', gap: '72px', paddingTop: '80px', paddingBottom: '80px' }}
      >
        {/* ── LEFT ── */}
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

        {/* ── RIGHT — Animated Live Activity Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
          style={{ flex: '0 0 390px', width: '390px' }}
        >
          <div style={{
            background: '#0b1220',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
          }}>
            {/* Window bar */}
            <div style={{
              padding: '12px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(255,255,255,0.015)',
            }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
              <span style={{ flex: 1, textAlign: 'center', fontSize: '11px', color: '#334155', fontFamily: 'monospace' }}>krew.ai — dashboard</span>
            </div>

            {/* Panel header */}
            <div style={{
              padding: '14px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#34D399', boxShadow: '0 0 10px rgba(52,211,153,0.8)',
                  display: 'inline-block', animation: 'pulse 2s ease-in-out infinite',
                }} />
                <span style={{ color: '#94A3B8', fontSize: '12px', fontWeight: 500, fontFamily: 'monospace' }}>actividad en tiempo real</span>
              </div>
              <span style={{
                fontSize: '10px', padding: '2px 8px', borderRadius: '99px',
                background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.22)',
                color: '#34D399', fontWeight: 600, fontFamily: 'monospace',
              }}>4 activos</span>
            </div>

            {/* Animated activity items */}
            <div style={{ padding: '10px 10px', minHeight: '292px', overflow: 'hidden' }}>
              <AnimatePresence initial={false}>
                {items.map((item) => {
                  const agent = agents.find(a => a.id === item.agentId)
                  return (
                    <motion.div
                      key={item.uid}
                      initial={{ opacity: 0, y: -18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '11px',
                        padding: '11px 13px', borderRadius: '11px',
                        marginBottom: '6px',
                        background: `rgba(${agent.colorRgb}, 0.05)`,
                        border: `1px solid rgba(${agent.colorRgb}, 0.12)`,
                      }}
                    >
                      <div style={{
                        width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
                        background: `rgba(${agent.colorRgb}, 0.15)`,
                        border: `1px solid rgba(${agent.colorRgb}, 0.3)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: agent.color, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '13px',
                      }}>
                        {agent.initial}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '2px' }}>
                          <span style={{ color: agent.color, fontWeight: 700, fontSize: '12px', fontFamily: 'Syne, sans-serif' }}>
                            {agent.name}
                          </span>
                          <span style={{
                            width: '5px', height: '5px', borderRadius: '50%',
                            background: agent.color, flexShrink: 0, opacity: 0.9,
                            animation: 'pulse 2s ease-in-out infinite',
                          }} />
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0, lineHeight: 1.35, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.action}
                        </p>
                        <p style={{ color: '#334155', fontSize: '10px', margin: '2px 0 0', lineHeight: 1, fontFamily: 'monospace' }}>
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div style={{
              padding: '12px 18px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ display: 'flex' }}>
                  {agents.map((a, i) => (
                    <div key={a.id} style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: `rgba(${a.colorRgb}, 0.2)`,
                      border: `2px solid #0b1220`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginLeft: i > 0 ? '-6px' : 0,
                      color: a.color, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '8px',
                    }}>
                      {a.initial}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '11px', color: '#475569' }}>Todos operativos</span>
              </div>
              <span style={{ fontSize: '10px', color: '#22D3EE', fontFamily: 'monospace', opacity: 0.7 }}>live ●</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
