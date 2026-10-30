import { Phone, MapPin, Mail, Clock, MessageCircle } from 'lucide-react'
import { getDictionary, type Locale } from '@/lib/dictionary'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import PageBanner from '@/components/shared/PageBanner'
import ContactForm from '@/components/contact/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ur' }]
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const isUrdu = lang === 'ur'

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main className="min-h-screen bg-[#F8F9FA]">
        <PageBanner
          title={isUrdu ? 'ہم سے رابطہ کریں' : 'Contact Us & Campus Location'}
          subtitle={isUrdu ? 'الصادق ایجوکیشن ہاؤس 58 جی بی جڑانوالہ، فیصل آباد — ہم آپ کے سوالات کا جواب دینے کے لیے حاضر ہیں۔' : 'Al-Sadiq Education House, 58 GB Jaranwala, Faisalabad Division. Reach out to us directly.'}
          breadcrumbs={[
            { label: dict.nav.home, href: `/${lang}` },
            { label: dict.nav.contact },
          ]}
          lang={lang}
        />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Contact Details (5 cols) */}
              <div className={cn('lg:col-span-5 space-y-6', isUrdu && 'text-right font-urdu')}>
                <div className="bg-navy-950 text-white p-6 md:p-8 rounded-2xl border border-gold-500/20 shadow-md">
                  <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-white/10">
                    {isUrdu ? 'اسکول کی معلومات' : 'Campus Information'}
                  </h3>

                  <ul className="space-y-6">
                    <li className={cn('flex items-start gap-4', isUrdu && 'flex-row-reverse')}>
                      <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gold-300 font-bold tracking-wider mb-1">
                          {isUrdu ? 'اسکول کا پتہ' : 'Campus Address'}
                        </p>
                        <p className="text-sm text-white/90 leading-relaxed font-medium">
                          {isUrdu ? '58 جی بی، جڑانوالہ، ضلع فیصل آباد، پنجاب، پاکستان' : '58 GB, Jaranwala, Faisalabad Division, Punjab, Pakistan'}
                        </p>
                      </div>
                    </li>

                    <li className={cn('flex items-start gap-4', isUrdu && 'flex-row-reverse')}>
                      <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gold-300 font-bold tracking-wider mb-1">
                          {isUrdu ? 'فون و واٹس ایپ' : 'Phone & WhatsApp'}
                        </p>
                        <a
                          href={`tel:${SITE_CONFIG.whatsappDisplay}`}
                          className="text-base text-gold-400 font-bold hover:underline"
                        >
                          {SITE_CONFIG.whatsappDisplay}
                        </a>
                      </div>
                    </li>

                    <li className={cn('flex items-start gap-4', isUrdu && 'flex-row-reverse')}>
                      <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gold-300 font-bold tracking-wider mb-1">
                          {isUrdu ? 'ای میل' : 'Official Email'}
                        </p>
                        <p className="text-sm text-white/90">
                          {SITE_CONFIG.email}
                        </p>
                      </div>
                    </li>

                    <li className={cn('flex items-start gap-4', isUrdu && 'flex-row-reverse')}>
                      <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gold-300 font-bold tracking-wider mb-1">
                          {isUrdu ? 'دفتری اوقات' : 'Visiting Hours'}
                        </p>
                        <p className="text-sm text-white/90">
                          {dict.contact.hours}
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm transition-colors shadow-lg shadow-green-600/30"
                    >
                      <MessageCircle size={18} />
                      <span>{isUrdu ? 'براہِ راست واٹس ایپ پر رابطہ کریں' : 'Instant Chat on WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Form (7 cols) */}
              <div className="lg:col-span-7">
                <ContactForm lang={lang} />
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

