import Link from 'next/link'
import { BookOpen, GraduationCap, Microscope, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import { getDictionary, type Locale } from '@/lib/dictionary'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import PageBanner from '@/components/shared/PageBanner'
import SectionHeading from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ur' }]
}

export default async function AcademicsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const isUrdu = lang === 'ur'

  const content = {
    en: {
      bannerTitle: 'Academic Excellence (Pre-Year to 8th Class)',
      bannerSubtitle: 'A balanced syllabus uniting modern science, English proficiency, and foundational Quranic studies.',
      levelsTitle: 'Structured Grade Levels',
      cadetFeaturesTitle: 'Cadet-School Training System',
      cadetFeatures: [
        { title: 'Morning Assembly & Drill', desc: 'Daily physical exercises, national anthem, Quran recitation, and discipline marching.' },
        { title: 'Science & Computer Practical Basics', desc: 'Hands-on exposure to computer fundamentals and science experiments from primary classes.' },
        { title: 'Spoken English & Urdu Expression', desc: 'Focus on bilingual fluency, speech contests, and assertive presentation skills.' },
        { title: 'Tajweed & Islamic Ethics', desc: 'Daily sessions dedicated to Nazra Quran, Kalmas, Masnoon Duas, and Sunnah manners.' },
      ],
      gradesList: [
        {
          tag: 'Early Years',
          name: 'Pre-Year & Play Group',
          ages: 'Ages 3 – 4',
          desc: 'Gentle play-way learning, phonics, fine motor skills, Urdu haroof, and social confidence.',
          subjects: ['English Phonics', 'Urdu Haroof', 'Basic Numbers', 'Islamic Duas', 'Art & Activity'],
        },
        {
          tag: 'Foundation Stage',
          name: 'Kindergarten (KG-1 & KG-2)',
          ages: 'Ages 4 – 6',
          desc: 'Sentence building, basic mathematics, writing discipline, Nazra basics, and vocabulary.',
          subjects: ['English Reading & Writing', 'Urdu Writing', 'Arithmetic', 'General Knowledge', 'Moral Etiquettes'],
        },
        {
          tag: 'Primary Division',
          name: 'Classes 1st to 5th',
          ages: 'Ages 6 – 11',
          desc: 'Comprehensive syllabus aligned with modern educational standards and strong assessment criteria.',
          subjects: ['English & Grammar', 'Urdu Literature', 'Mathematics', 'General Science', 'Islamiat & Nazra', 'Social Studies'],
        },
        {
          tag: 'Middle Wing (Cadet Prep)',
          name: 'Classes 6th to 8th',
          ages: 'Ages 11 – 14',
          desc: 'Intensive academic conditioning targeting FBISE/BISE preparation and Cadet College admission entry tests.',
          subjects: ['Advanced Mathematics', 'Physics / Chemistry / Biology (General Science)', 'English Composition', 'Computer Science', 'History & Geography', 'Arabic & Islamic Studies'],
        },
      ]
    },
    ur: {
      bannerTitle: 'تعلیمی نصاب اور نظام (پری ایئر تا آٹھویں جماعت)',
      bannerSubtitle: 'جدید سائنسی و انگریزی تعلیم اور لازمی قرآنی علوم کا مثالی امتزاج۔',
      levelsTitle: 'تعلیمی مراحل کی تفصیل',
      cadetFeaturesTitle: 'کیڈٹ طرز کا نظامِ تربیت',
      cadetFeatures: [
        { title: 'صبح کی اسمبلی اور پریڈ ڈرل', desc: 'روزانہ کی جسمانی ورزش، قومی ترانہ، تلاوتِ کلام پاک اور منظم مارچنگ۔' },
        { title: 'سائنس اور کمپیوٹر کے بنیادی تجربات', desc: 'پرائمری کلاسوں سے ہی کمپیوٹر کے عملی استعمال اور سائنسی مشاہدات کی تربیت۔' },
        { title: 'انگریزی و اردو میں بول چال کی روانی', desc: 'تقریری مقابلے، تحریری مشق اور خود اعتمادی سے اظہارِ خیال۔' },
        { title: 'تجوید القرآن اور اخلاقیات', desc: 'ناظرہ قرآن مع تجوید، کلمات، مسنون دعائیں اور سنتِ نبوی کے مطابق آدابِ زندگی۔' },
      ],
      gradesList: [
        {
          tag: 'ابتدائی سال',
          name: 'پری ایئر اور پلے گروپ',
          ages: 'عمر 3 تا 4 سال',
          desc: 'کھیل کھیل میں بنیادی حروف، صوتیات (Phonics)، سماجی میل جول اور اعتماد کی تربیت۔',
          subjects: ['انگریزی فونیکس', 'اردو حروفِ تہجی', 'ابتدائی گنتی', 'مسنون دعائیں', 'آرٹ و ڈرائنگ'],
        },
        {
          tag: 'بنیادی مرحلہ',
          name: 'کنڈرگارٹن (KG-1 اور KG-2)',
          ages: 'عمر 4 تا 6 سال',
          desc: 'جملے بنانے، خوشخطی، بنیادی ریاضی اور ناظرہ قرآن کی ابتدائی تختیوں کی تعلیم۔',
          subjects: ['انگریزی پڑھنا اور لکھنا', 'اردو خوشخطی', 'ریاضی', 'جنرل نالج', 'اسلامی آداب'],
        },
        {
          tag: 'پرائمری ونگ',
          name: 'پہلی تا پانچویں جماعت',
          ages: 'عمر 6 تا 11 سال',
          desc: 'قومی اور جدید معیار کے مطابق جامع سائنسی، لسانی اور فکری نصاب۔',
          subjects: ['انگریزی و گرائمر', 'اردو ادب', 'ریاضی', 'جنرل سائنس', 'اسلامیات و ناظرہ', 'معاشرتی علوم'],
        },
        {
          tag: 'مڈل ونگ (کیڈٹ انٹری ٹیسٹ کی تیاری)',
          name: 'چھٹی تا آٹھویں جماعت',
          ages: 'عمر 11 تا 14 سال',
          desc: 'بورڈ امتحانات اور ملک کے مایہ ناز کیڈٹ کالجز کے داخلہ ٹیسٹ کے لیے خصوصی تیاری۔',
          subjects: ['اعلیٰ ریاضی', 'فزکس، کیمسٹری، بیالوجی (جنرل سائنس)', 'انگریزی مضمون نگاری', 'کمپیوٹر سائنس', 'تاریخ و جغرافیہ', 'عربی و اسلامی علوم'],
        },
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
            { label: dict.nav.academics },
          ]}
          lang={lang}
        />

        {/* Cadet Features Strip */}
        <section className="py-16 bg-navy-950 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading
              label={isUrdu ? 'طرزِ تربیت' : 'Cadet Culture'}
              title={content.cadetFeaturesTitle}
              center
              light
              lang={lang}
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.cadetFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 transition-colors',
                    isUrdu && 'text-right'
                  )}
                >
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className={cn('text-lg font-bold text-white mb-2', isUrdu && 'font-urdu')}>
                    {feat.title}
                  </h3>
                  <p className={cn('text-white/70 text-sm leading-relaxed', isUrdu && 'font-urdu')}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grade Breakdown */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading
              label={isUrdu ? 'کلاسز اور نصاب' : 'Class Sections'}
              title={content.levelsTitle}
              center
              lang={lang}
              className="mb-14"
            />

            <div className="space-y-8">
              {content.gradesList.map((grade, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'p-6 md:p-8 rounded-2xl border border-slate-200 bg-[#FAFBFD] shadow-sm hover:border-gold-500/60 transition-all',
                    isUrdu && 'text-right'
                  )}
                >
                  <div className={cn('flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4', isUrdu && 'md:flex-row-reverse')}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-100/70 px-3 py-1 rounded-full inline-block mb-2">
                        {grade.tag}
                      </span>
                      <h3 className={cn('text-2xl font-black text-navy-950', isUrdu && 'font-urdu')}>
                        {grade.name}
                      </h3>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-navy-700 bg-navy-100/60 px-4 py-2 rounded-xl w-fit">
                      {grade.ages}
                    </span>
                  </div>

                  <p className={cn('text-slate-600 text-base mb-6 leading-relaxed', isUrdu && 'font-urdu')}>
                    {grade.desc}
                  </p>

                  <div>
                    <h4 className={cn('text-xs font-bold uppercase tracking-wider text-slate-500 mb-3', isUrdu && 'font-urdu')}>
                      {isUrdu ? 'اہم مضامین:' : 'Core Subjects:'}
                    </h4>
                    <div className={cn('flex flex-wrap gap-2', isUrdu && 'flex-row-reverse')}>
                      {grade.subjects.map((subj, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-navy-900 shadow-2xs"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-navy-950 to-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className={cn(isUrdu && 'text-right font-urdu')}>
                <h3 className="text-2xl font-bold mb-2">
                  {isUrdu ? 'کیا آپ اپنے بچے کا مستقبل تابناک بنانا چاہتے ہیں؟' : 'Ready to secure your child’s seat?'}
                </h3>
                <p className="text-white/70 text-sm">
                  {isUrdu ? 'الصادق ایجوکیشن ہاؤس میں داخلے جاری ہیں۔ معلومات یا داخلہ فارم کے لیے رابطہ کریں۔' : 'Limited seats available in Pre-Year to 8th Class. Apply online or visit campus.'}
                </p>
              </div>
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold shrink-0">
                <Link href={`/${lang}/admissions`} className={cn('flex items-center gap-2', isUrdu && 'flex-row-reverse font-urdu')}>
                  <span>{dict.nav.applyNow}</span>
                  <ArrowRight size={16} className={cn(isUrdu && 'rotate-180')} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

