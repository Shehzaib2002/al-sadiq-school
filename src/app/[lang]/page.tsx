import { getDictionary, type Locale } from '@/lib/dictionary'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import AboutSnippet from '@/components/home/AboutSnippet'
import FounderMessage from '@/components/home/FounderMessage'
import GradeCards from '@/components/home/GradeCards'
import WhyUsSection from '@/components/home/WhyUsSection'
import GalleryPreview from '@/components/home/GalleryPreview'
import AdmissionCTA from '@/components/home/AdmissionCTA'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ur' }]
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main>
        <HeroSection lang={lang} dict={dict} />
        <StatsBar lang={lang} dict={dict} />
        <AboutSnippet lang={lang} dict={dict} />
        <FounderMessage lang={lang} />
        <GradeCards lang={lang} dict={dict} />
        <WhyUsSection lang={lang} dict={dict} />
        <GalleryPreview lang={lang} />
        <AdmissionCTA lang={lang} dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
      <WhatsAppButton lang={lang} />
    </>
  )
}
