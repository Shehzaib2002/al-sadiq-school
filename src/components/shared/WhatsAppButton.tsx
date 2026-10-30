import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

interface WhatsAppButtonProps {
  lang?: string
}

export default function WhatsAppButton({ lang = 'en' }: WhatsAppButtonProps) {
  const message =
    lang === 'ur'
      ? 'السلام علیکم، میں الصادق ایجوکیشن ہاؤس میں داخلے کے بارے میں پوچھنا چاہتا ہوں۔'
      : 'Assalam o Alaikum, I want to enquire about admission at Al-Sadiq Education House.'

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-3 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap">
        {lang === 'ur' ? 'واٹس ایپ' : 'WhatsApp'}
      </span>
    </a>
  )
}

