'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Shield, BookOpen, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  lang: string
  dict: {
    hero: Record<string, string>
  }
}

export default function HeroSection({ lang, dict }: HeroSectionProps) {
  const isUrdu = lang === 'ur'
  const { hero } = dict

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Al-Sadiq Education House Campus"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/97 via-navy-950/85 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40" />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" style={{ right: '25%' }} />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className={cn('grid lg:grid-cols-2 gap-12 items-center')}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isUrdu ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={cn(isUrdu && 'text-right')}
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/40 hover:bg-gold-500/30 mb-6 text-xs font-semibold px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-400 mr-2 animate-pulse inline-block" />
                <span className={cn(isUrdu && 'font-urdu')}>{hero.badge}</span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={cn('text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4', isUrdu && 'font-urdu')}
            >
              {hero.title}{' '}
              <span className="text-gold-400 relative">
                {hero.titleHighlight}
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gold-400/50 rounded" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={cn('text-gold-300/80 font-semibold text-sm md:text-base mb-4 tracking-wide', isUrdu && 'font-urdu')}
            >
              {hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={cn('text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl', isUrdu && 'font-urdu')}
            >
              {hero.description}
            </motion.p>

            {/* Motto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className={cn('flex items-center gap-3 mb-8', isUrdu && 'flex-row-reverse justify-end')}
            >
              <Shield size={16} className="text-gold-500 shrink-0" />
              <span className={cn('text-gold-500 text-xs font-bold uppercase tracking-widest', isUrdu && 'font-urdu tracking-normal')}>
                {hero.motto}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={cn('flex flex-wrap gap-3', isUrdu && 'flex-row-reverse')}
            >
              <Button
                asChild size="lg"
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 shadow-lg shadow-gold-500/25"
              >
                <Link href={`/${lang}/admissions`} className={cn('flex items-center gap-2', isUrdu && 'font-urdu flex-row-reverse')}>
                  {hero.cta1}
                  <ArrowRight size={16} className={cn(isUrdu && 'rotate-180')} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 bg-transparent"
              >
                <Link href={`/${lang}/academics`} className={cn(isUrdu && 'font-urdu')}>
                  {hero.cta2}
                </Link>
              </Button>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className={cn('flex flex-wrap gap-2 mt-8', isUrdu && 'flex-row-reverse')}
            >
              {[
                { icon: BookOpen, label: isUrdu ? 'پری ایئر تا کلاس 8' : 'Pre-Year to Class 8' },
                { icon: Award, label: isUrdu ? 'معیاری تعلیم' : 'Quality Education' },
                { icon: Shield, label: isUrdu ? 'محفوظ ماحول' : 'Safe Environment' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs text-white/80">
                  <Icon size={12} className="text-gold-400 shrink-0" />
                  <span className={cn(isUrdu && 'font-urdu')}>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Logo Crest (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gold-500/10 blur-3xl scale-125" />
              <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-gold-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-60 h-60">
                  <Image
                    src="/logo.png"
                    alt="Al-Sadiq Education House Crest"
                    fill
                    className="object-contain"
                    priority
                    style={{ filter: 'brightness(0) invert(1) sepia(0.6) saturate(2.5) hue-rotate(5deg)' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs"
        >
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
