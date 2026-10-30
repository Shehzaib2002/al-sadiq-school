import Link from 'next/link'
import { ArrowRight, Target, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'

interface AboutSnippetProps {
  lang: string
  dict: {
    about: Record<string, string>
  }
}

export default function AboutSnippet({ lang, dict }: AboutSnippetProps) {
  const isUrdu = lang === 'ur'
  const { about } = dict

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className={cn('grid lg:grid-cols-2 gap-14 items-center', isUrdu && 'direction-rtl')}>
          {/* Left: Visual Panel */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-navy-900 aspect-[4/3] flex items-center justify-center shadow-2xl">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800" />
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23C5A059%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
              </div>
              {/* Crest centered */}
              <div className="relative z-10 p-10">
                <img
                  src="/logo.png"
                  alt="Al-Sadiq Crest"
                  className="w-48 h-48 object-contain mx-auto"
                  style={{ filter: 'brightness(0) invert(1) sepia(0.5) saturate(3) hue-rotate(10deg)' }}
                />
              </div>
              {/* Gold border accent */}
              <div className="absolute inset-0 rounded-2xl border border-gold-500/30 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gold-500 text-navy-950 rounded-2xl px-5 py-3 shadow-lg shadow-gold-500/30">
              <p className="text-2xl font-extrabold leading-none">15+</p>
              <p className="text-xs font-semibold opacity-80 mt-0.5">
                {isUrdu ? 'سال کی عمدگی' : 'Years of Excellence'}
              </p>
            </div>
          </div>

          {/* Right: Text */}
          <div className={cn('order-1 lg:order-2', isUrdu && 'text-right')}>
            <SectionHeading
              label={about.sectionLabel}
              title={about.title}
              lang={lang}
            />
            <p className={cn('text-slate-500 leading-relaxed mt-5 mb-8', isUrdu && 'font-urdu')}>
              {about.description}
            </p>

            {/* Mission / Vision Cards */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Target, key: 'mission', textKey: 'missionText' },
                { icon: Eye, key: 'vision', textKey: 'visionText' },
              ].map(({ icon: Icon, key, textKey }) => (
                <div key={key} className={cn('flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm', isUrdu && 'flex-row-reverse')}>
                  <div className="w-10 h-10 rounded-lg bg-navy-900/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-navy-900" />
                  </div>
                  <div className={cn(isUrdu && 'text-right')}>
                    <h4 className={cn('font-bold text-navy-900 text-sm mb-1', isUrdu && 'font-urdu')}>
                      {about[key]}
                    </h4>
                    <p className={cn('text-slate-500 text-sm leading-relaxed', isUrdu && 'font-urdu')}>
                      {about[textKey]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-navy-900 hover:bg-navy-800 text-white">
              <Link href={`/${lang}/about`} className={cn('flex items-center gap-2', isUrdu && 'font-urdu flex-row-reverse')}>
                {about.readMore}
                <ArrowRight size={16} className={cn(isUrdu && 'rotate-180')} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

