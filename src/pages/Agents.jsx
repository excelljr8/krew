import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AgentRow from '../components/AgentRow'
import { agents } from '../data/agents'

export default function Agents() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase font-mono mb-4" style={{ color: 'var(--t4)' }}>
            Krew
          </p>
          <h1
            className="display font-extrabold leading-none mb-5"
            style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              letterSpacing: '-0.03em',
              color: 'var(--t1)',
            }}
          >
            {t('agents.title')}
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'var(--t3)' }}>
            {t('agents.subtitle')}
          </p>
        </motion.div>

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
    </div>
  )
}
