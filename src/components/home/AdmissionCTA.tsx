import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'

interface AdmissionCTAProps {
  lang: string
  dict: {
    admissions: {
      sectionLabel: string
      title: string
      subtitle: string
      cta: string
      step1: string
      step1Desc: string
      step2: string
      step2Desc: string
      step3: string
      step3Desc: string
      step4: string
      step4Desc: string
    }
  }
}

export default function AdmissionCTA({ lang, dict }: AdmissionCTAProps) {
  const isUrdu = lang === 'ur'
  const { admissions } = dict

  const steps = [
    { title: admissions.step1, desc: admissions.step1Desc },
    { title: admissions.step2, desc: admissions.step2Desc },
    { title: admissions.step3, desc: admissions.step3Desc },
    { title: admissions.step4, desc: admissions.step4Desc },
  ]

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className={cn('grid lg:grid-cols-2 gap-14 items-center')}>
          {/* Left: Steps */}
          <div>
            <SectionHeading
              label={admissions.sectionLabel}
              title={admissions.title}
              subtitle={admissions.subtitle}
              lang={lang}
              className={cn('mb-10', isUrdu && 'text-right')}
            />

            <div className="space-y-5">
              {steps.map((step, i) => (
                <div key={i} className={cn('flex gap-4', isUrdu && 'flex-row-reverse')}>
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-9 h-9 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-navy-900/10 mt-1 flex-1 min-h-[20px]" />
                    )}
                  </div>
                  <div className={cn('pb-4', isUrdu && 'text-right')}>
                    <h4 className={cn('font-bold text-navy-900 mb-1', isUrdu && 'font-urdu')}>
                      {step.title}
                    </h4>
                    <p className={cn('text-slate-500 text-sm leading-relaxed', isUrdu && 'font-urdu')}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className={cn(isUrdu && 'font-urdu')}>
                  {isUrdu ? 'داخلہ کھلا ہے' : 'Admissions Open'}
                </span>
              </div>

              <h3 className={cn('text-2xl font-bold mb-2', isUrdu && 'font-urdu text-right')}>
                {isUrdu ? 'آج ہی درخواست دیں' : 'Apply Today'}
              </h3>
              <p className={cn('text-white/60 text-sm mb-6', isUrdu && 'font-urdu text-right')}>
                {isUrdu
                  ? 'محدود نشستیں دستیاب ہیں — جلدی کریں!'
                  : 'Limited seats available — act fast!'}
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  isUrdu ? 'پری ایئر سے کلاس 8 تک' : 'Pre-Year to Class 8',
                  isUrdu ? 'تجربہ کار اساتذہ' : 'Experienced Faculty',
                  isUrdu ? 'قرآن کی تعلیم شامل' : 'Quran Education Included',
                  isUrdu ? 'محفوظ اور نظم و ضبط والا ماحول' : 'Safe & Disciplined Environment',
                ].map((item) => (
                  <li key={item} className={cn('flex items-center gap-3 text-sm text-white/80', isUrdu && 'flex-row-reverse font-urdu')}>
                    <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold shadow-lg shadow-gold-500/25"
              >
                <Link href={`/${lang}/admissions`} className={cn('flex items-center justify-center gap-2', isUrdu && 'font-urdu flex-row-reverse')}>
                  {admissions.cta}
                  <ArrowRight size={16} className={cn(isUrdu && 'rotate-180')} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

