import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageBannerProps {
  title: string
  subtitle?: string
  breadcrumbs: { label: string; href?: string }[]
  lang: string
}

export default function PageBanner({ title, subtitle, breadcrumbs, lang }: PageBannerProps) {
  const isUrdu = lang === 'ur'

  return (
    <section className="relative bg-navy-950 py-16 md:py-20 overflow-hidden border-b border-gold-500/20">
      {/* Background with cadet styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-90" />
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full border border-gold-500/40" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 rounded-full border border-gold-500/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={cn('flex flex-col items-center text-center', isUrdu && 'font-urdu')}>
          {/* Breadcrumbs */}
          <nav className={cn('flex items-center gap-2 text-xs md:text-sm text-gold-300/80 mb-4', isUrdu && 'flex-row-reverse')}>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight size={14} className={cn(isUrdu && 'rotate-180')} />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/60">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/70 max-w-2xl text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="w-16 h-1 bg-gold-500 rounded-full mt-6" />
        </div>
      </div>
    </section>
  )
}

