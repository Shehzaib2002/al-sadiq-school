import { Calendar, Bell, Award, Sparkles, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { getDictionary, type Locale } from '@/lib/dictionary'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import PageBanner from '@/components/shared/PageBanner'
import SectionHeading from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ur' }]
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const isUrdu = lang === 'ur'

  const notices = [
    {
      date: 'March 2025',
      dateUr: 'مارچ 2025',
      category: isUrdu ? 'داخلہ نوٹس' : 'Admissions',
      title: isUrdu ? 'تعلیمی سال 2025-26 کے لیے داخلوں کا آغاز' : 'Admissions Open for Academic Year 2025-2026',
      desc: isUrdu
        ? 'پری ایئر سے لے کر آٹھویں جماعت تک داخلہ فارم جمع کروانے کا سلسلہ جاری ہے۔ محدود نشستوں پر ترجیحی بنیادوں پر داخلے کیے جائیں گے۔'
        : 'Enrollment forms for Pre-Year up to Class 8 are now available. Parents are advised to submit applications early due to limited batch capacities.',
      important: true,
    },
    {
      date: 'April 2025',
      dateUr: 'اپریل 2025',
      category: isUrdu ? 'امتحانات' : 'Examinations',
      title: isUrdu ? 'سالانہ امتحانات کے شاندار نتائج اور پوزیشن ہولڈرز کا اعلان' : 'Annual Exam Results & Position Holders Ceremony',
      desc: isUrdu
        ? 'سالانہ امتحانات میں الصادق ایجوکیشن ہاؤس کے طلباء کی 95 فیصد سے زائد کامیابی اور نمایاں پوزیشن حاصل کرنے والے طلباء کو خصوصی شیلڈز دی گئیں۔'
        : 'Congratulations to our top achievers across primary and middle wings. Over 95% pass rate recorded with remarkable cadet merit scores.',
      important: false,
    },
    {
      date: 'May 2025',
      dateUr: 'مئی 2025',
      category: isUrdu ? 'تقریبات' : 'Events',
      title: isUrdu ? 'یومِ دفاع اور سالانہ تقریری مقابلہ' : 'Annual Speech & Declamation Contest 2025',
      desc: isUrdu
        ? 'طلباء نے اردو اور انگریزی تقاریر میں شاندار اعتماد کا مظاہرہ کیا، والدین کی کثیر تعداد نے شرکت کی۔'
        : 'Students demonstrated outstanding bilingual articulation in the inter-house declamation championship with enthusiastic parental attendance.',
      important: false,
    },
  ]

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main className="min-h-screen bg-[#F8F9FA]">
        <PageBanner
          title={isUrdu ? 'خبریں، اعلانات اور تقریبات' : 'News & Announcements'}
          subtitle={isUrdu ? 'اسکول کی تازہ ترین سرگرمیاں، امتحانی نوٹس اور آئندہ تقریبات' : 'Stay up-to-date with institutional notifications, exam gazettes, and campus milestones.'}
          breadcrumbs={[
            { label: dict.nav.home, href: `/${lang}` },
            { label: dict.nav.news },
          ]}
          lang={lang}
        />

        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="space-y-6">
              {notices.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:border-gold-500/50 hover:shadow-md',
                    item.important && 'border-l-4 border-l-gold-500',
                    isUrdu && 'text-right'
                  )}
                >
                  <div className={cn('flex flex-wrap items-center justify-between gap-3 mb-3', isUrdu && 'flex-row-reverse')}>
                    <span className="text-xs font-bold text-navy-900 bg-gold-400/20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Calendar size={13} />
                      <span>{isUrdu ? item.dateUr : item.date}</span>
                    </span>
                  </div>

                  <h3 className={cn('text-xl md:text-2xl font-bold text-navy-950 mb-3', isUrdu && 'font-urdu')}>
                    {item.title}
                  </h3>

                  <p className={cn('text-slate-600 leading-relaxed text-sm md:text-base mb-4', isUrdu && 'font-urdu')}>
                    {item.desc}
                  </p>

                  <div className={cn('flex items-center text-xs font-semibold text-gold-600', isUrdu && 'flex-row-reverse')}>
                    <Link
                      href={`/${lang}/admissions`}
                      className={cn('inline-flex items-center gap-1 hover:underline', isUrdu && 'flex-row-reverse font-urdu')}
                    >
                      <span>{isUrdu ? 'مزید معلومات اور تفصیلات' : 'Read details & take action'}</span>
                      <ChevronRight size={14} className={cn(isUrdu && 'rotate-180')} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

