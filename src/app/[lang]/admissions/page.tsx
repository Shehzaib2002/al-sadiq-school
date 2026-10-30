import Link from 'next/link'
import { FileText, Phone, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react'
import { getDictionary, type Locale } from '@/lib/dictionary'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import PageBanner from '@/components/shared/PageBanner'
import SectionHeading from '@/components/shared/SectionHeading'
import AdmissionForm from '@/components/admissions/AdmissionForm'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ur' }]
}

export default async function AdmissionsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const isUrdu = lang === 'ur'

  const content = {
    en: {
      bannerTitle: 'Admissions Open 2025 – 2026',
      bannerSubtitle: 'Pre-Year to Class 8th — Admissions are currently underway for boys and girls.',
      stepsTitle: 'Admission Procedure',
      feeTitle: 'Affordable & Value-Based Fee Policy',
      feeDesc: 'As an institution rooted in 58 GB Jaranwala, we maintain highly affordable, transparent fee structures tailored for rural families without compromising our cadet standard of education.',
      criteriaTitle: 'Required Documents',
      criteria: [
        'Photocopy of NADRA B-Form or Union Council Birth Certificate',
        'Photocopy of Father / Guardian CNIC',
        '2 Passport-size photographs of the student (blue background)',
        'School Leaving Certificate / Previous Progress Report (for Class 1 to 8)',
      ],
      faqs: [
        { q: 'What is the age requirement for Pre-Year / Nursery?', a: 'Children who are 3.5 years or older by March are eligible for Pre-Year enrollment.' },
        { q: 'Is there a written entry test?', a: 'For Pre-Year and KG, an informal observation is conducted. For Classes 1 through 8, a basic assessment in English, Urdu, and Math is taken to determine appropriate class placement.' },
        { q: 'How can parents pay school fees?', a: 'Fees are paid monthly via designated school bank challan or directly at the school accounts counter.' },
      ]
    },
    ur: {
      bannerTitle: 'داخلے جاری ہیں 2025 – 2026',
      bannerSubtitle: 'پری ایئر سے کلاس ہشتم (8th) تک داخلے جاری ہیں — محدود نشستیں دستیاب ہیں۔',
      stepsTitle: 'داخلہ حاصل کرنے کا طریقہ کار',
      feeTitle: 'مناسب و شفاف فیس کا نظام',
      feeDesc: '58 جی بی جڑانوالہ کی مقامی کمیونٹی کے لیے، ہم نے کیڈٹ معیار کی اعلیٰ تعلیم کے باوجود فیس کو ہر خاندان کی استطاعت کے مطابق رکھا ہے تاکہ کوئی بچہ تعلیم سے محروم نہ رہے۔',
      criteriaTitle: 'داخلے کے لیے ضروری دستاویزات',
      criteria: [
        'نادرہ ب-فارم یا یونین کونسل کے پیدائشی سرٹیفکیٹ کی کاپی',
        'والد یا سرپرست کے شناختی کارڈ کی فوٹو کاپی',
        'طالب علم کی 2 عدد تازہ ترین پاسپورٹ سائز تصاویر (نیلے پس منظر کے ساتھ)',
        'سابقہ اسکول کا رزلٹ کارڈ یا اسکول چھوڑنے کا سرٹیفکیٹ (پہلی تا آٹھویں جماعت کے لیے)',
      ],
      faqs: [
        { q: 'پری ایئر / نرسری کے لیے بچے کی عمر کتنی ہونی چاہیے؟', a: 'مارچ کے مہینے تک بچے کی عمر کم از کم ساڑھے تین (3.5) سال ہونی چاہیے۔' },
        { q: 'کیا داخلے کے لیے کوئی تحریری ٹیسٹ ہوتا ہے؟', a: 'پری ایئر اور کے جی کے لیے زبانی و مشاہداتی جانچ ہوتی ہے، جبکہ پہلی سے آٹھویں کلاس کے لیے بنیادی انگریزی، اردو اور ریاضی کا آسان ٹیسٹ لیا جاتا ہے۔' },
        { q: 'فیس ادا کرنے کا کیا طریقہ ہے؟', a: 'فیس ہر ماہ باقاعدگی سے اسکول کے اکاؤنٹس آفس میں یا نامزد بینک چالان کے ذریعے ادا کی جا سکتی ہے۔' },
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
            { label: dict.nav.admissions },
          ]}
          lang={lang}
        />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Form (7 cols) */}
              <div className="lg:col-span-7">
                <AdmissionForm lang={lang} />
              </div>

              {/* Right Column: Information & Guidelines (5 cols) */}
              <div className={cn('lg:col-span-5 space-y-8', isUrdu && 'text-right font-urdu')}>
                {/* Documents Needed Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <FileText size={20} className="text-gold-500" />
                    <span>{content.criteriaTitle}</span>
                  </h3>
                  <ul className="space-y-3">
                    {content.criteria.map((item, idx) => (
                      <li key={idx} className={cn('flex items-start gap-3 text-sm text-slate-600', isUrdu && 'flex-row-reverse')}>
                        <CheckCircle size={16} className="text-gold-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Contact Card */}
                <div className="bg-navy-950 text-white p-6 md:p-8 rounded-2xl border border-gold-500/30">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {isUrdu ? 'داخلہ ہیلپ لائن' : 'Admission Helpline'}
                  </h3>
                  <p className="text-xs text-white/70 mb-4">
                    {isUrdu ? 'کسی بھی سوال یا رہنمائی کے لیے ہمارے دفتر سے بلا جھجھک رابطہ کریں:' : 'For quick telephone inquiries or to visit campus in person:'}
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.whatsappDisplay}`}
                    className={cn('inline-flex items-center gap-2 text-xl font-bold text-gold-400 hover:text-gold-300 transition-colors', isUrdu && 'flex-row-reverse')}
                  >
                    <Phone size={20} />
                    <span>{SITE_CONFIG.whatsappDisplay}</span>
                  </a>
                  <p className="text-xs text-white/50 mt-2">
                    {isUrdu ? 'اوقات: پیر تا ہفتہ صبح 7:30 تا دوپہر 2:00' : 'Office Hours: Mon – Sat (7:30 AM – 2:00 PM)'}
                  </p>
                </div>

                {/* FAQs Accordion */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <HelpCircle size={20} className="text-gold-500" />
                    <span>{isUrdu ? 'عام پوچھے جانے والے سوالات' : 'Frequently Asked Questions'}</span>
                  </h3>
                  <div className="space-y-4">
                    {content.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-slate-100 pb-3 last:border-none">
                        <h4 className="text-sm font-bold text-navy-900 mb-1">
                          {faq.q}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

