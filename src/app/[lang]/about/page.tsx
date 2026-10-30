import Image from 'next/image'
import Link from 'next/link'
import { Award, Compass, Heart, Shield, CheckCircle2, BookOpen } from 'lucide-react'
import { getDictionary, type Locale } from '@/lib/dictionary'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import PageBanner from '@/components/shared/PageBanner'
import SectionHeading from '@/components/shared/SectionHeading'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ur' }]
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const isUrdu = lang === 'ur'

  const content = {
    en: {
      bannerTitle: 'About Al-Sadiq Education House',
      bannerSubtitle: 'A legacy of discipline, moral character, and top-tier academic grooming in 58 GB Jaranwala.',
      historyTitle: 'Our Heritage & Journey',
      historyP1: 'Founded under the leadership of Mr. Muhammad Amin Ahmad Raza, Al-Sadiq Education House was established with a singular mission: to bring cadet-college-standard educational discipline and holistic growth to 58 GB Jaranwala and surrounding areas in Faisalabad division.',
      historyP2: 'Over 15+ years, we have transitioned hundreds of young children from foundational pre-schoolers to confident, principled 8th graders equipped to thrive in premier colleges, armed forces cadet colleges, and professional secondary institutions.',
      directorTitle: "Founder & Director's Profile",
      directorRole: 'Founder & Director',
      directorBio: 'Mr. Muhammad Amin Ahmad Raza envisioned a school where rural talent receives world-class moral, religious, and academic grooming. His active daily mentorship ensures that every student adheres to military-level punctuality, high Islamic ethics, and deep intellectual curiosity.',
      pillarsTitle: 'Our Cadet-Standard Pillars',
      pillars: [
        { icon: Shield, title: 'Discipline & Punctuality', desc: 'Cadet drill routines, time management, and orderly conduct instill lifelong habits of leadership.' },
        { icon: BookOpen, title: 'Academic Rigor', desc: 'Concept-based science and mathematics curriculum preparing students for future competitive exams.' },
        { icon: Heart, title: 'Moral & Religious Grooming', desc: 'Nazra Quran, Tajweed, daily prayers, and character-building embedded in everyday routine.' },
        { icon: Compass, title: 'Holistic Sports & Activity', desc: 'Physical fitness, outdoor games, declamations, and leadership clubs.' },
      ]
    },
    ur: {
      bannerTitle: 'الصادق ایجوکیشن ہاؤس کا تعارف',
      bannerSubtitle: '58 جی بی جڑانوالہ میں نظم و ضبط، اخلاقی کردار اور معیاری تعلیم کی تابناک تاریخ۔',
      historyTitle: 'ہماری تاریخ اور سفر',
      historyP1: 'جناب محمد امین احمد رضا کی بصیرت انگیز قیادت میں، الصادق ایجوکیشن ہاؤس کی بنیاد ایک بنیادی مشن کے ساتھ رکھی گئی: کہ 58 جی بی جڑانوالہ اور فیصل آباد ڈویژن کے قریبی علاقوں میں کیڈٹ کالج کے معیار کا نظم و ضبط اور جامع تعلیم فراہم کی جائے۔',
      historyP2: '15 سال سے زائد کے اس سفر میں ہم نے سینکڑوں طلباء کو ابتدائی کلاسوں سے لے کر آٹھویں جماعت تک ایسے پراعتماد اور باکردار نوجوانوں کے روپ میں تیار کیا ہے جو ملک کے نامور کیڈٹ کالجز اور اعلیٰ تعلیمی اداروں میں کامیابی سے داخلہ حاصل کر رہے ہیں۔',
      directorTitle: 'بانی و ڈائریکٹر کا تعارف',
      directorRole: 'بانی و ڈائریکٹر',
      directorBio: 'جناب محمد امین احمد رضا کا خواب تھا کہ گاؤں اور دیہی علاقوں کے باصلاحیت بچوں کو بہترین اسلامی، اخلاقی اور سائنسی تربیت دی جائے۔ ان کی روزانہ کی رہنمائی میں ہر بچہ فوجی نظم و ضبط، بلند اخلاق اور علم کا شیدائی بنتا ہے۔',
      pillarsTitle: 'ہمارے کیڈٹ اسکول کے بنیادی ستون',
      pillars: [
        { icon: Shield, title: 'نظم و ضبط اور وقت کی پابندی', desc: 'پریڈ کی مشق، وقت کی قدر اور منظم روٹین بچوں میں قائدانہ صفات بیدار کرتی ہے۔' },
        { icon: BookOpen, title: 'مضبوط تعلیمی معیار', desc: 'سائنس اور ریاضی کی جدید و تصوراتی تعلیم جو طلباء کو آئندہ بڑے امتحانات کے لیے تیار کرتی ہے۔' },
        { icon: Heart, title: 'اخلاقی و دینی تربیت', desc: 'ناظرہ قرآن بمع تجوید، نماز کا اہتمام اور روزمرہ کی نشستوں میں کردار سازی۔' },
        { icon: Compass, title: 'کھیل اور ہم نصابی سرگرمیاں', desc: 'جسمانی صحت، تقریری مقابلے، سائنس نمائش اور ذہنی نشوونما کی سرگرمیاں۔' },
      ]
    }
  }[isUrdu ? 'ur' : 'en']

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main className="min-h-screen bg-[#F8F9FA]">
        <PageBanner
          title={content.bannerTitle}
          subtitle={content.bannerSubtitle}
          breadcrumbs={[
            { label: dict.nav.home, href: `/${lang}` },
            { label: dict.nav.about },
          ]}
          lang={lang}
        />

        {/* History / Mission Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className={cn('grid lg:grid-cols-2 gap-12 items-center', isUrdu && 'direction-rtl')}>
              <div className={cn(isUrdu && 'text-right')}>
                <SectionHeading
                  label={isUrdu ? 'تاریخ و سفر' : 'Our Story'}
                  title={content.historyTitle}
                  lang={lang}
                  className="mb-6"
                />
                <p className={cn('text-slate-600 text-base md:text-lg leading-relaxed mb-4', isUrdu && 'font-urdu')}>
                  {content.historyP1}
                </p>
                <p className={cn('text-slate-600 text-base leading-relaxed mb-6', isUrdu && 'font-urdu')}>
                  {content.historyP2}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="p-4 bg-navy-50 rounded-xl border border-navy-100">
                    <p className="text-2xl font-black text-navy-900">15+</p>
                    <p className="text-xs text-slate-600 mt-1">{isUrdu ? 'سال کا تجربہ' : 'Years of Trust'}</p>
                  </div>
                  <div className="p-4 bg-gold-50 rounded-xl border border-gold-200">
                    <p className="text-2xl font-black text-gold-600">500+</p>
                    <p className="text-xs text-slate-600 mt-1">{isUrdu ? 'زیر تعلیم و فارغ طلباء' : 'Successful Students'}</p>
                  </div>
                </div>
              </div>

              {/* Campus Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] border-4 border-white">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Al-Sadiq Education House Campus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs md:text-sm font-medium">
                  {SITE_CONFIG.location}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder & Director Highlight */}
        <section className="py-16 md:py-20 bg-navy-950 text-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className={cn('grid lg:grid-cols-3 gap-10 items-center', isUrdu && 'direction-rtl')}>
              <div className="flex justify-center">
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-gold-500 shadow-2xl">
                  <Image
                    src="/images/founder.png"
                    alt="Mr. Muhammad Amin Ahmad Raza"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className={cn('lg:col-span-2', isUrdu && 'text-right font-urdu')}>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full inline-block mb-3">
                  {content.directorRole}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
                  Mr. Muhammad Amin Ahmad Raza
                </h2>
                <p className="text-gold-300 text-sm font-semibold mb-6">
                  {isUrdu ? 'بانی و ڈائریکٹر، الصادق ایجوکیشن ہاؤس 58 جی بی' : 'Founder & Director, Al-Sadiq Education House'}
                </p>
                <p className="text-white/80 leading-relaxed text-base md:text-lg mb-6">
                  {content.directorBio}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-gold-300">
                    <CheckCircle2 size={16} />
                    <span>{isUrdu ? 'کیڈٹ طرز کا نظم و ضبط' : 'Cadet-Grade Discipline'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gold-300">
                    <CheckCircle2 size={16} />
                    <span>{isUrdu ? 'قرآنی و سائنسی ہم آہنگی' : 'Quranic & Scientific Curriculum'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cadet Pillars */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading
              label={isUrdu ? 'ہماری خصوصیات' : 'Institutional Pillars'}
              title={content.pillarsTitle}
              center
              lang={lang}
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={idx}
                    className={cn(
                      'p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow',
                      isUrdu && 'text-right'
                    )}
                  >
                    <div className={cn('w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4', isUrdu && 'ml-auto')}>
                      <Icon size={24} />
                    </div>
                    <h3 className={cn('font-bold text-navy-950 text-lg mb-2', isUrdu && 'font-urdu')}>
                      {pillar.title}
                    </h3>
                    <p className={cn('text-slate-600 text-sm leading-relaxed', isUrdu && 'font-urdu')}>
                      {pillar.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

