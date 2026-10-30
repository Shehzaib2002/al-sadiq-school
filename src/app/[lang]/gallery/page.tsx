import Image from 'next/image'
import Link from 'next/link'
import { Images, Sparkles, Trophy, Calendar, BookOpen, Heart } from 'lucide-react'
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

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const isUrdu = lang === 'ur'

  const albums = [
    {
      title: isUrdu ? 'کیمپس اور مارننگ پریڈ' : 'Cadet Assembly & Morning Parade',
      category: isUrdu ? 'کیمپس لائف' : 'Campus Life',
      image: '/images/morning-assembly.jpg',
      desc: isUrdu ? 'طلباء کا کیڈٹ طرز کا نظم و ضبط، صبح کی اسمبلی اور چست پریڈ' : 'Disciplined cadet-style morning assembly, national anthem, and parade drill',
    },
    {
      title: isUrdu ? 'اسکول کی قیادت اور رہنمائی' : 'Founder & Leadership',
      category: isUrdu ? 'قیادت' : 'Leadership',
      image: '/images/founder.png',
      desc: isUrdu ? 'جناب محمد امین احمد رضا کی بصیرت اور سرپرستی' : 'Mr. Muhammad Amin Ahmad Raza and executive educational direction',
    },
    {
      title: isUrdu ? 'جدید کلاس رومز اور تدریس' : 'Classrooms & Academic Learning',
      category: isUrdu ? 'تعلیمی سرگرمیاں' : 'Academics',
      image: '/images/classroom.jpg',
      desc: isUrdu ? 'روشن، آرام دہ کمرہ ہائے جماعت اور اساتذہ کی ذاتی توجہ' : 'Modern, bright classrooms with dedicated one-on-one student attention',
    },
    {
      title: isUrdu ? 'سالانہ اسپورٹس ڈے اور دوڑ' : 'Annual Sports Day & Athletics',
      category: isUrdu ? 'کھیل و سرگرمیاں' : 'Sports',
      image: '/images/sports-day.jpg',
      desc: isUrdu ? 'ایتھلیٹکس، ریلے ریس اور جسمانی فٹنس کے پرجوش مقابلے' : 'Track races, fitness drills, team sportsmanship, and student medals',
    },
    {
      title: isUrdu ? 'قرآن خوانی، تجوید و سیرت کانفرنس' : 'Quranic Studies & Tajweed',
      category: isUrdu ? 'دینی و اخلاقی تربیت' : 'Islamic Studies',
      image: '/images/quran-class.jpg',
      desc: isUrdu ? 'روزانہ ناظرہ قرآن، تجوید کی درستگی اور اخلاقی تربیت کے حلقات' : 'Daily Nazra Quran with proper Tajweed, Hadith recitation, and character guidance',
    },
    {
      title: isUrdu ? 'سائنسی تجربات و کمپیوٹر لیب' : 'Science Laboratory & Practical',
      category: isUrdu ? 'سائنس و ٹیکنالوجی' : 'STEM Labs',
      image: '/images/science-lab.jpg',
      desc: isUrdu ? 'عملی سائنسی تجربات، کمپیوٹر ٹریننگ اور تخلیقی سوچ کی بیداری' : 'Hands-on practical experiments, scientific apparatus, and analytical thinking',
    },
    {
      title: isUrdu ? 'تقاریر و مباحثے کے مقابلے' : 'Declamations & Stage Debates',
      category: isUrdu ? 'ہم نصابی سرگرمیاں' : 'Co-Curricular',
      image: '/images/speech-contest.jpg',
      desc: isUrdu ? 'اردو و انگریزی تقریری مقابلے اور طلباء میں خود اعتمادی کا فروغ' : 'Bilingual speech contests, public speaking confidence, and awards',
    },
    {
      title: isUrdu ? 'کیمپس اور سرسبز ماحول' : 'Campus Environment & Grounds',
      category: isUrdu ? 'کیمپس لائف' : 'Campus Life',
      image: '/images/hero-bg.jpg',
      desc: isUrdu ? 'کشادہ عمارت، محفوظ ماحول اور جدید تعلیمی سہولیات' : 'Secure, spacious school grounds providing an inspiring academic atmosphere',
    },
  ]

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main className="min-h-screen bg-[#F8F9FA]">
        <PageBanner
          title={isUrdu ? 'تصویری گیلری' : 'School Photo Gallery'}
          subtitle={isUrdu ? 'الصادق ایجوکیشن ہاؤس کے یادگار لمحات، تقریبات اور سرگرمیوں کا خوبصورت ریکارڈ' : 'Memorable moments, academic milestones, and cadet campus events at 58 GB Jaranwala.'}
          breadcrumbs={[
            { label: dict.nav.home, href: `/${lang}` },
            { label: dict.nav.gallery },
          ]}
          lang={lang}
        />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-xs text-gold-400 text-xs font-bold px-3 py-1 rounded-full border border-gold-500/30">
                      {item.category}
                    </div>
                  </div>
                  <div className={cn('p-6 flex-1 flex flex-col justify-between', isUrdu && 'text-right font-urdu')}>
                    <div>
                      <h3 className="text-xl font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note about official photographs */}
            <div className="mt-14 p-6 rounded-2xl bg-gold-50 border border-gold-200 text-center">
              <p className={cn('text-sm text-gold-900 font-medium', isUrdu && 'font-urdu')}>
                {isUrdu
                  ? 'طلباء کے والدین اور سرپرست مزید تصاویر اور تقریبات کی ویڈیوز کے لیے اسکول کے فیس بک پیج اور واٹس ایپ چینل سے بھی منسلک رہ سکتے ہیں۔'
                  : 'Parents and community members are encouraged to visit our official Facebook page and campus office for the complete seasonal photo archives.'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

