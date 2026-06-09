import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AgentCard from '../components/AgentCard'
import { agents } from '../data/agents'

export default function Agents() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--grey-600)' }}>
            Krew
          </p>
          <h1 className="font-display font-extrabold text-white mb-4" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
            {t('agents.title')}
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--grey-400)' }}>
            {t('agents.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
