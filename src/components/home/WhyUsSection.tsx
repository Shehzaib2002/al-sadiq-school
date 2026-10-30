import { Shield, Award, BookOpen, Dumbbell, Heart, Users } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'

interface WhyUsSectionProps {
  lang: string
  dict: {
    whyUs: {
      sectionLabel: string
      title: string
      subtitle: string
      discipline: { title: string; desc: string }
      academics: { title: string; desc: string }
      quran: { title: string; desc: string }
      sports: { title: string; desc: string }
      safe: { title: string; desc: string }
      village: { title: string; desc: string }
    }
  }
}

const FEATURE_ICONS = [Shield, Award, BookOpen, Dumbbell, Heart, Users]
const FEATURE_KEYS = ['discipline', 'academics', 'quran', 'sports', 'safe', 'village'] as const

export default function WhyUsSection({ lang, dict }: WhyUsSectionProps) {
  const isUrdu = lang === 'ur'
  const { whyUs } = dict

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeading
          label={whyUs.sectionLabel}
          title={whyUs.title}
          subtitle={whyUs.subtitle}
          center
          light
          lang={lang}
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_KEYS.map((key, i) => {
            const Icon = FEATURE_ICONS[i]
            const feature = whyUs[key]
            return (
              <div
                key={key}
                className={cn(
                  'group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm',
                  'hover:border-gold-500/40 hover:bg-white/8 transition-all duration-300',
                  isUrdu && 'text-right'
                )}
              >
                <div className={cn('w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors', isUrdu && 'ml-auto')}>
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className={cn('font-bold text-white text-base mb-2', isUrdu && 'font-urdu')}>
                  {feature.title}
                </h3>
                <p className={cn('text-white/50 text-sm leading-relaxed', isUrdu && 'font-urdu')}>
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

