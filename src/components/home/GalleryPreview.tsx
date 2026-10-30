'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Images, BookOpen, Dumbbell, Moon } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'

interface GalleryPreviewProps {
  lang: string
}

const GALLERY_ITEMS = [
  {
    src: '/images/classroom.jpg',
    alt: 'Students in classroom',
    gridClass: 'col-span-2 row-span-2',
    label: 'Classroom',
    labelUr: 'کمرہ جماعت',
    fallbackGradient: 'from-blue-700 to-blue-900',
    FallbackIcon: BookOpen,
  },
  {
    src: '/images/sports-day.jpg',
    alt: 'Sports Day event',
    gridClass: 'col-span-1',
    label: 'Sports Day',
    labelUr: 'کھیل کا دن',
    fallbackGradient: 'from-emerald-700 to-emerald-900',
    FallbackIcon: Dumbbell,
  },
  {
    src: '/images/quran-class.jpg',
    alt: 'Quran education class',
    gridClass: 'col-span-1',
    label: 'Quran Class',
    labelUr: 'قرآن کلاس',
    fallbackGradient: 'from-amber-700 to-amber-900',
    FallbackIcon: Moon,
  },
  {
    src: '/images/morning-assembly.jpg',
    alt: 'Cadet morning parade and assembly',
    gridClass: 'col-span-1',
    label: 'Cadet Parade',
    labelUr: 'مارننگ پریڈ',
    fallbackGradient: 'from-navy-700 to-navy-900',
    FallbackIcon: Images,
  },
  {
    src: '/images/founder.png',
    alt: 'School Founder & Director',
    gridClass: 'col-span-1',
    label: 'Our Director',
    labelUr: 'ہمارے ڈائریکٹر',
    fallbackGradient: 'from-slate-700 to-slate-900',
    FallbackIcon: Images,
  },
]

function GalleryCard({
  item,
  isUrdu,
}: {
  item: (typeof GALLERY_ITEMS)[0]
  isUrdu: boolean
}) {
  const [hasError, setHasError] = useState(false)
  const { FallbackIcon } = item

  return (
    <div className={cn('relative overflow-hidden rounded-xl group cursor-pointer bg-navy-950', item.gridClass)}>
      {/* Fallback gradient shown only if image fails to load */}
      {hasError ? (
        <div className={cn('absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br', item.fallbackGradient)}>
          <FallbackIcon size={36} className="text-white/30 mb-2" />
          <span className={cn('text-white/60 text-xs font-medium', isUrdu && 'font-urdu')}>{isUrdu ? item.labelUr : item.label}</span>
        </div>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
          onError={() => setHasError(true)}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/50 transition-all duration-300 flex items-end p-3 md:p-4 z-10">
        <span className={cn('text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow', isUrdu && 'font-urdu w-full text-right')}>
          {isUrdu ? item.labelUr : item.label}
        </span>
      </div>
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold-500/50 transition-colors duration-300 pointer-events-none z-20" />
    </div>
  )
}

export default function GalleryPreview({ lang }: GalleryPreviewProps) {
  const isUrdu = lang === 'ur'

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className={cn('flex items-end justify-between mb-10 flex-wrap gap-4', isUrdu && 'flex-row-reverse')}>
          <SectionHeading
            label={isUrdu ? 'گیلری' : 'Gallery'}
            title={isUrdu ? 'زندگی الصادق میں' : 'Life at Al-Sadiq'}
            subtitle={isUrdu ? 'ہمارے اسکول کی جھلکیاں' : 'A glimpse into our school life'}
            lang={lang}
          />
          <Link
            href={`/${lang}/gallery`}
            className={cn('flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors shrink-0', isUrdu && 'flex-row-reverse font-urdu')}
          >
            <Images size={16} />
            {isUrdu ? 'تمام تصاویر دیکھیں' : 'View All Photos'}
            <ArrowRight size={14} className={cn(isUrdu && 'rotate-180')} />
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={i} item={item} isUrdu={isUrdu} />
          ))}
        </div>
      </div>
    </section>
  )
}
