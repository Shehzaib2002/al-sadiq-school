'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Share2, MessageCircle, Clock } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface FooterProps {
  lang: string
  dict: {
    nav: Record<string, string>
    footer: Record<string, string>
    contact: Record<string, string>
  }
}

export default function Footer({ lang, dict }: FooterProps) {
  const makeHref = (href: string) => `/${lang}${href === '/' ? '' : href}`
  const isUrdu = lang === 'ur'

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <Link href={makeHref('/')} className="flex items-center gap-3 mb-4">
            <div className="relative w-14 h-14">
              <Image
                src="/logo.png"
                alt="Al-Sadiq"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm leading-tight">Al-Sadiq</p>
              <p className="font-bold text-gold-400 text-sm leading-tight">Education House</p>
            </div>
          </Link>
          <p className={cn('text-white/60 text-sm leading-relaxed mb-4', isUrdu && 'font-urdu text-right')}>
            {dict.footer.tagline}
          </p>
          <p className={cn('text-gold-400 text-xs font-medium tracking-wider', isUrdu && 'font-urdu text-right')}>
            {isUrdu ? SITE_CONFIG.mottoUrdu : SITE_CONFIG.motto}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={cn('text-gold-400 font-bold text-sm uppercase tracking-wider mb-5', isUrdu && 'font-urdu text-right')}>
            {dict.footer.quickLinks}
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={makeHref(link.href)}
                  className={cn(
                    'text-white/60 hover:text-gold-400 text-sm transition-colors flex items-center gap-2',
                    isUrdu && 'font-urdu flex-row-reverse'
                  )}
                >
                  <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                  {dict.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={cn('text-gold-400 font-bold text-sm uppercase tracking-wider mb-5', isUrdu && 'font-urdu text-right')}>
            {dict.footer.contactUs}
          </h3>
          <ul className="space-y-3">
            <li className={cn('flex items-start gap-3 text-sm text-white/60', isUrdu && 'flex-row-reverse')}>
              <MapPin size={15} className="text-gold-500 shrink-0 mt-0.5" />
              <span className={cn(isUrdu && 'font-urdu text-right')}>{dict.contact.address}</span>
            </li>
            <li>
              <a
                href={`tel:${SITE_CONFIG.whatsappDisplay}`}
                className={cn('flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors', isUrdu && 'flex-row-reverse')}
              >
                <Phone size={15} className="text-gold-500 shrink-0" />
                {SITE_CONFIG.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className={cn('flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors', isUrdu && 'flex-row-reverse')}
              >
                <Mail size={15} className="text-gold-500 shrink-0" />
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className={cn('flex items-center gap-3 text-sm text-white/60', isUrdu && 'flex-row-reverse')}>
              <Clock size={15} className="text-gold-500 shrink-0" />
              <span className={cn(isUrdu && 'font-urdu')}>{dict.contact.hours}</span>
            </li>
          </ul>
        </div>

        {/* Social + WhatsApp */}
        <div>
          <h3 className={cn('text-gold-400 font-bold text-sm uppercase tracking-wider mb-5', isUrdu && 'font-urdu text-right')}>
            {dict.footer.followUs}
          </h3>
          <div className="space-y-3">
            <a
              href={SITE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors text-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <Share2 size={16} />
              </div>
              Facebook Page
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors text-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <span className={cn(isUrdu && 'font-urdu')}>{dict.contact.whatsapp}</span>
            </a>
          </div>

          <div className="mt-8 p-4 rounded-xl border border-gold-500/20 bg-gold-500/5">
            <p className={cn('text-white/60 text-xs mb-2', isUrdu && 'font-urdu text-right')}>
              {isUrdu ? 'داخلے کے بارے میں پوچھیں' : 'Enquire about admissions'}
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Assalam o Alaikum, I want to enquire about admission at Al-Sadiq Education House.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2025 Al-Sadiq Education House. {dict.footer.rights}</p>
          <p className={cn(isUrdu && 'font-urdu')}>{dict.footer.location}</p>
        </div>
      </div>
    </footer>
  )
}
