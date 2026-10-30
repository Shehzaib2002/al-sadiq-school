'use client'

import { BookOpen, Users, Dumbbell } from 'lucide-react'

// Beautiful SVG placeholder images for when real photos aren't yet available
const placeholders = {
  classroom: {
    icon: BookOpen,
    gradient: 'from-blue-600 to-blue-800',
    label: 'Classroom',
    labelUr: 'کمرہ جماعت',
    desc: 'Students learning together',
  },
  'sports-day': {
    icon: Dumbbell,
    gradient: 'from-emerald-600 to-emerald-800',
    label: 'Sports Day',
    labelUr: 'کھیل کا دن',
    desc: 'Annual sports competition',
  },
  'quran-class': {
    icon: BookOpen,
    gradient: 'from-amber-600 to-amber-800',
    label: 'Quran Class',
    labelUr: 'قرآن کلاس',
    desc: 'Islamic education',
  },
}

export default function PlaceholderImage({
  type,
  className = '',
}: {
  type: keyof typeof placeholders
  className?: string
}) {
  const p = placeholders[type]
  const Icon = p.icon
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${p.gradient} ${className}`}>
      <Icon size={48} className="text-white/30 mb-3" />
      <p className="text-white/70 text-sm font-semibold">{p.label}</p>
      <p className="text-white/40 text-xs mt-1">{p.desc}</p>
    </div>
  )
}

