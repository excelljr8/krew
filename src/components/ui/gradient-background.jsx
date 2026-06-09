import { GrainGradient } from '@paper-design/shaders-react'

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <GrainGradient
        style={{ height: '100%', width: '100%' }}
        colorBack="hsl(0, 0%, 4%)"
        softness={0.76}
        intensity={0.3}
        noise={0.05}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={0.4}
        colors={['hsl(240, 60%, 20%)', 'hsl(260, 50%, 15%)', 'hsl(230, 70%, 10%)']}
      />
    </div>
  )
}
