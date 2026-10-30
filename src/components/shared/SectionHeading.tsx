import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  lang?: string
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  light = false,
  lang = 'en',
  className,
}: SectionHeadingProps) {
  const isUrdu = lang === 'ur'

  return (
    <div className={cn(center && 'text-center', isUrdu && 'text-right', className)}>
      {label && (
        <span
          className={cn(
            'inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full',
            'bg-gold-500/10 text-gold-500 border border-gold-500/20',
            isUrdu && 'font-urdu tracking-normal'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold leading-tight mb-3',
          light ? 'text-white' : 'text-navy-900',
          isUrdu && 'font-urdu'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed max-w-2xl',
            light ? 'text-white/70' : 'text-slate-500',
            center && 'mx-auto',
            isUrdu && 'font-urdu'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

