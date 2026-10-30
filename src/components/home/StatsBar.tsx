import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface StatsBarProps {
  lang: string
  dict: {
    stats: Record<string, string>
  }
}

export default function StatsBar({ lang, dict }: StatsBarProps) {
  const isUrdu = lang === 'ur'

  return (
    <section className="bg-navy-900 border-y border-gold-500/20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.key}
              className={cn(
                'flex flex-col items-center text-center p-4 relative',
                i !== STATS.length - 1 && 'lg:border-r border-white/10'
              )}
            >
              <span className="text-4xl md:text-5xl font-extrabold text-gold-400 tabular-nums">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className={cn('text-white/60 text-sm mt-1.5', isUrdu && 'font-urdu')}>
                {dict.stats[stat.key]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

