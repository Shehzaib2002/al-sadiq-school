'use client'

import { useState } from 'react'
import { Send, Phone, MapPin, Mail, Clock, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  lang: string
}

export default function ContactForm({ lang }: ContactFormProps) {
  const isUrdu = lang === 'ur'
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    // 1. Record inquiry in Supabase (if connected)
    if (supabase) {
      try {
        await supabase.from('contact_inquiries').insert([
          {
            name: formData.name,
            phone: formData.phone,
            subject: formData.subject || null,
            message: formData.message,
          },
        ])
      } catch (err) {
        console.warn('Supabase contact submission notice:', err)
      }
    }

    const msg = isUrdu
      ? `*رابطہ پیغام - الصادق ایجوکیشن ہاؤس*\n` +
        `نام: ${formData.name}\n` +
        `فون نمبر: ${formData.phone}\n` +
        `موضوع: ${formData.subject || 'عمومی سوال'}\n` +
        `پیغام: ${formData.message}`
      : `*Contact Inquiry - Al-Sadiq Education House*\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Subject: ${formData.subject || 'General Inquiry'}\n` +
        `Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(whatsappUrl, '_blank')
    setSending(false)
    setSent(true)
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
      {sent ? (
        <div className="text-center py-10">
          <CheckCircle2 size={40} className="text-green-500 mx-auto mb-3" />
          <h3 className={cn('text-xl font-bold text-navy-950 mb-2', isUrdu && 'font-urdu')}>
            {isUrdu ? 'آپ کا پیغام واٹس ایپ پر ارسال ہو گیا ہے' : 'Message Sent to WhatsApp!'}
          </h3>
          <p className={cn('text-slate-600 text-sm mb-4', isUrdu && 'font-urdu')}>
            {isUrdu ? 'ہماری ٹیم جلد آپ سے رابطہ کرے گی۔' : 'Our team will respond to your message promptly.'}
          </p>
          <Button onClick={() => setSent(false)} variant="outline">
            {isUrdu ? 'دوسرا پیغام بھیجیں' : 'Send Another Message'}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={cn('space-y-4', isUrdu && 'direction-rtl text-right')}>
          <h3 className={cn('text-xl font-bold text-navy-950 mb-4', isUrdu && 'font-urdu')}>
            {isUrdu ? 'ہمیں پیغام بھیجیں' : 'Send Us a Direct Message'}
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              {isUrdu ? 'آپ کا نام *' : 'Your Name *'}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={isUrdu ? 'نام درج کریں' : 'Full Name'}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              {isUrdu ? 'فون / موبائل نمبر *' : 'Phone / Mobile Number *'}
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="0300-5470330"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              {isUrdu ? 'موضوع' : 'Subject'}
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={isUrdu ? 'داخلہ، فیس، ٹرانسپورٹ وغیرہ' : 'Admissions, Fee, Transport, etc.'}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              {isUrdu ? 'آپ کا پیغام *' : 'Your Message *'}
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={isUrdu ? 'تفصیل یہاں تحریر کریں...' : 'Write your questions or notes here...'}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
            />
          </div>

          <Button
            type="submit"
            disabled={sending}
            className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-5"
          >
            <span className={cn('flex items-center justify-center gap-2', isUrdu && 'flex-row-reverse font-urdu')}>
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              <span>
                {sending
                  ? (isUrdu ? 'ارسال ہو رہا ہے...' : 'Sending...')
                  : (isUrdu ? 'پیغام ارسال کریں (بذریعہ واٹس ایپ)' : 'Send via WhatsApp')}
              </span>
            </span>
          </Button>
        </form>
      )}
    </div>
  )
}

