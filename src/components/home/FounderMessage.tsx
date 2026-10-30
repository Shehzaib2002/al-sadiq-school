import Image from 'next/image'
import { Quote } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'

interface FounderMessageProps {
  lang: string
}

const founderData = {
  en: {
    sectionLabel: "Founder's Message",
    title: 'A Word from Our Founder & Director',
    name: 'Mr. Muhammad Amin Ahmad Raza',
    title_role: 'Founder & Director, Al-Sadiq Education House',
    quote:
      'Education is not merely the accumulation of knowledge — it is the building of character, the awakening of the conscience, and the preparation of young hearts to serve their faith, their families, and their nation with integrity and excellence.',
    message: [
      'When I founded Al-Sadiq Education House, I carried a simple but profound dream: that every child in our village of 58 GB Jaranwala deserves access to education that is not just academically sound, but morally uplifting and spiritually grounding.',
      'We believe in discipline not as a restriction, but as a gift we give to our children — the gift of structure, purpose, and the habits of excellence. Every day, our dedicated teachers pour their hearts into shaping not just students, but future leaders of Pakistan.',
      'I invite every parent to join our family. Together, we will build a generation that makes Al-Sadiq, our community, and our beloved Pakistan proud.',
    ],
  },
  ur: {
    sectionLabel: 'بانی کا پیغام',
    title: 'ہمارے بانی و ڈائریکٹر کا پیغام',
    name: 'جناب محمد امین احمد رضا',
    title_role: 'بانی و ڈائریکٹر، الصادق ایجوکیشن ہاؤس',
    quote:
      'تعلیم صرف علم کا حصول نہیں — یہ کردار کی تعمیر، ضمیر کی بیداری، اور نوجوان دلوں کو اپنے دین، اپنے خاندان اور اپنے وطن کی خدمت کے لیے دیانتداری اور عمدگی کے ساتھ تیار کرنا ہے۔',
    message: [
      'جب میں نے الصادق ایجوکیشن ہاؤس کی بنیاد رکھی، تو میرے دل میں ایک سادہ مگر گہرا خواب تھا: کہ 58 جی بی جڑانوالہ کے ہمارے گاؤں کا ہر بچہ ایسی تعلیم حاصل کرے جو نہ صرف علمی لحاظ سے مضبوط ہو بلکہ اخلاقی اور روحانی لحاظ سے بھی بلند کرنے والی ہو۔',
      'ہم نظم و ضبط کو پابندی نہیں بلکہ ایک تحفے کے طور پر دیکھتے ہیں جو ہم اپنے بچوں کو دیتے ہیں — ڈھانچے، مقصد اور عمدگی کی عادات کا تحفہ۔ ہر روز، ہمارے محنتی اساتذہ اپنے دل کی گہرائیوں سے نہ صرف طلباء بلکہ پاکستان کے مستقبل کے رہنماؤں کو تشکیل دیتے ہیں۔',
      'میں ہر والدین کو ہمارے خاندان میں شامل ہونے کی دعوت دیتا ہوں۔ مل کر، ہم ایک ایسی نسل تعمیر کریں گے جو الصادق، ہماری کمیونٹی اور ہمارے پیارے پاکستان کا نام روشن کرے۔',
    ],
  },
}

export default function FounderMessage({ lang }: FounderMessageProps) {
  const isUrdu = lang === 'ur'
  const data = isUrdu ? founderData.ur : founderData.en

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B192C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeading
          label={data.sectionLabel}
          title={data.title}
          center
          lang={lang}
          className="mb-14"
        />

        <div className={cn('grid lg:grid-cols-5 gap-10 items-start', isUrdu && 'direction-rtl')}>
          {/* Left: Portrait */}
          <div className={cn('lg:col-span-2 flex flex-col items-center', isUrdu && 'lg:order-2')}>
            <div className="relative">
              {/* Gold ring frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-gold-500/30" />
              <div className="absolute -inset-1 rounded-xl border border-gold-500/10" />

              {/* Photo */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder.png"
                  alt={data.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 288px"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900/80 to-transparent" />
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max text-center bg-navy-900 text-white rounded-xl px-5 py-2.5 shadow-lg shadow-navy-900/30">
                <p className={cn('font-bold text-sm leading-tight', isUrdu && 'font-urdu')}>{data.name}</p>
                <p className={cn('text-gold-400 text-xs mt-0.5', isUrdu && 'font-urdu')}>{data.title_role}</p>
              </div>
            </div>
          </div>

          {/* Right: Message */}
          <div className={cn('lg:col-span-3 pt-4', isUrdu && 'lg:order-1')}>
            {/* Pull quote */}
            <div className={cn('relative bg-navy-900 rounded-2xl p-6 mb-8', isUrdu && 'text-right')}>
              <Quote
                size={36}
                className={cn(
                  'absolute text-gold-500/30',
                  isUrdu ? '-top-3 right-5 rotate-180' : '-top-3 left-5'
                )}
                fill="currentColor"
              />
              <p className={cn('text-white/90 text-base md:text-lg font-medium leading-relaxed italic', isUrdu && 'font-urdu not-italic')}>
                "{data.quote}"
              </p>
            </div>

            {/* Message paragraphs */}
            <div className={cn('space-y-4', isUrdu && 'text-right')}>
              {data.message.map((para, i) => (
                <p key={i} className={cn('text-slate-600 leading-relaxed', isUrdu && 'font-urdu')}>
                  {para}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className={cn('mt-8 pt-6 border-t border-slate-100 flex items-center gap-4', isUrdu && 'flex-row-reverse')}>
              <div className={cn('flex-1', isUrdu && 'text-right')}>
                <p className={cn('font-bold text-navy-900', isUrdu && 'font-urdu')}>{data.name}</p>
                <p className={cn('text-gold-600 text-sm', isUrdu && 'font-urdu')}>{data.title_role}</p>
              </div>
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-gold-500/30 ring-offset-2">
                  <Image
                    src="/images/founder.png"
                    alt={data.name}
                    width={64}
                    height={64}
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

