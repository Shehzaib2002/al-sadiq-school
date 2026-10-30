import { Baby, Smile, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'

interface GradeCardsProps {
  lang: string
  dict: {
    grades: {
      sectionLabel: string
      title: string
      subtitle: string
      preYear: { title: string; subtitle: string; desc: string }
      kg: { title: string; subtitle: string; desc: string }
      primary: { title: string; subtitle: string; desc: string }
      middle: { title: string; subtitle: string; desc: string }
    }
  }
}

const GRADE_ICONS = [Baby, Smile, BookOpen, GraduationCap]
const GRADE_COLORS = [
  'from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40',
  'from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40',
  'from-gold-500/10 to-gold-600/5 border-gold-500/20 hover:border-gold-500/40',
  'from-navy-500/10 to-navy-600/5 border-navy-500/20 hover:border-navy-500/40',
]
const ICON_COLORS = ['text-blue-500', 'text-emerald-500', 'text-gold-500', 'text-navy-600']
const GRADE_KEYS = ['preYear', 'kg', 'primary', 'middle'] as const

export default function GradeCards({ lang, dict }: GradeCardsProps) {
  const isUrdu = lang === 'ur'
  const { grades } = dict

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          label={grades.sectionLabel}
          title={grades.title}
          subtitle={grades.subtitle}
          center
          lang={lang}
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRADE_KEYS.map((key, i) => {
            const Icon = GRADE_ICONS[i]
            const grade = grades[key]
            return (
              <Link
                key={key}
                href={`/${lang}/academics`}
                className={cn(
                  'group relative flex flex-col p-6 rounded-2xl border bg-gradient-to-br transition-all duration-300',
                  'hover:shadow-lg hover:-translate-y-1',
                  GRADE_COLORS[i],
                  isUrdu && 'text-right'
                )}
              >
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-6xl font-black opacity-5 text-navy-900 select-none group-hover:opacity-10 transition-opacity">
                  {i + 1}
                </span>

                <div className={cn('w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4', isUrdu && 'ml-auto')}>
                  <Icon size={22} className={ICON_COLORS[i]} />
                </div>

                <h3 className={cn('font-bold text-navy-900 text-lg leading-tight', isUrdu && 'font-urdu')}>
                  {grade.title}
                </h3>
                <p className={cn('text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3', isUrdu && 'font-urdu tracking-normal')}>
                  {grade.subtitle}
                </p>
                <p className={cn('text-slate-500 text-sm leading-relaxed flex-1', isUrdu && 'font-urdu')}>
                  {grade.desc}
                </p>

                <div className={cn('flex items-center gap-1 mt-4 text-xs font-semibold text-navy-700 group-hover:gap-2 transition-all', isUrdu && 'flex-row-reverse justify-end')}>
                  <span className={cn(isUrdu && 'font-urdu')}>
                    {isUrdu ? 'مزید جانیں' : 'Learn More'}
                  </span>
                  <ArrowRight size={12} className={cn(isUrdu && 'rotate-180')} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

