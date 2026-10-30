'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface NavbarProps {
  lang: string
  dict: {
    nav: Record<string, string>
  }
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const makeHref = (href: string) => `/${lang}${href === '/' ? '' : href}`
  const otherLang = lang === 'en' ? 'ur' : 'en'
  const otherLangLabel = lang === 'en' ? 'اردو' : 'EN'

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-navy-950 border-b border-gold-500/20 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-9 text-xs text-gold-200/70">
          <span className={cn(lang === 'ur' && 'font-urdu')}>
            {lang === 'ur' ? SITE_CONFIG.locationUrdu : SITE_CONFIG.location}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.whatsappDisplay}`}
              className="flex items-center gap-1 hover:text-gold-400 transition-colors"
            >
              <Phone size={11} />
              {SITE_CONFIG.whatsappDisplay}
            </a>
            <span className="text-gold-500/30">|</span>
            <Link
              href={`/${otherLang}`}
              className="hover:text-gold-400 transition-colors font-medium"
            >
              {otherLangLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-navy-900/98 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-navy-900'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={makeHref('/')} className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              <Image
                src="/logo.png"
                alt="Al-Sadiq Education House"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm md:text-base leading-tight">
                Al-Sadiq Education House
              </p>
              <p className={cn('text-gold-400 text-[10px] md:text-xs', lang === 'ur' && 'font-urdu')}>
                {lang === 'ur' ? '58 جی بی، جڑانوالہ، فیصل آباد' : '58 GB. Jaranwala, Faisalabad'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={makeHref(link.href)}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    'text-white/80 hover:text-gold-400 hover:bg-white/5',
                    lang === 'ur' && 'font-urdu'
                  )}
                >
                  {dict.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Lang switcher mobile */}
            <Link
              href={`/${otherLang}`}
              className="lg:hidden text-gold-400 text-sm font-medium px-2 py-1 rounded border border-gold-400/30 hover:bg-gold-400/10 transition-colors"
            >
              {otherLangLabel}
            </Link>

            <Button
              asChild
              size="sm"
              className="hidden sm:flex bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs md:text-sm"
            >
              <Link href={makeHref('/admissions')} className={cn(lang === 'ur' && 'font-urdu')}>
                {dict.nav.applyNow}
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors">
                {open ? <X size={22} /> : <Menu size={22} />}
              </SheetTrigger>
              <SheetContent
                side={lang === 'ur' ? 'left' : 'right'}
                className="bg-navy-900 border-navy-700 w-72 p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-white/10 flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/logo.png"
                        alt="Al-Sadiq"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Al-Sadiq Education House</p>
                      <p className="text-gold-400 text-xs">58 GB, Jaranwala</p>
                    </div>
                  </div>
                  <nav className="flex-1 p-4">
                    <ul className="space-y-1">
                      {NAV_LINKS.map((link) => (
                        <li key={link.key}>
                          <Link
                            href={makeHref(link.href)}
                            onClick={() => setOpen(false)}
                            className={cn(
                              'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                              'text-white/80 hover:text-gold-400 hover:bg-white/5',
                              lang === 'ur' && 'font-urdu text-right'
                            )}
                          >
                            {dict.nav[link.key]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-4 border-t border-white/10">
                    <Button
                      asChild
                      className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold"
                    >
                      <Link href={makeHref('/admissions')} onClick={() => setOpen(false)}>
                        {dict.nav.applyNow}
                      </Link>
                    </Button>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 mt-3 text-green-400 text-sm hover:text-green-300 transition-colors"
                    >
                      <Phone size={14} />
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  )
}

