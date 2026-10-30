'use client'

import { useState } from 'react'
import { Send, CheckCircle2, Phone, Calendar, User, BookOpen, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'

interface AdmissionFormProps {
  lang: string
}

export default function AdmissionForm({ lang }: AdmissionFormProps) {
  const isUrdu = lang === 'ur'
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    classApplying: 'Pre-Year',
    dob: '',
    phone: '',
    address: '58 GB Jaranwala',
    prevSchool: '',
    notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // 1. Record application in Supabase (if connected)
    if (supabase) {
      try {
        await supabase.from('admissions').insert([
          {
            student_name: formData.studentName,
            father_name: formData.fatherName,
            class_applying: formData.classApplying,
            dob: formData.dob || null,
            phone: formData.phone,
            address: formData.address || null,
            prev_school: formData.prevSchool || null,
            notes: formData.notes || null,
          },
        ])
      } catch (err) {
        console.warn('Supabase admissions submission notice:', err)
      }
    }

    // 2. Open WhatsApp pre-filled with the admission request for direct instant confirmation!
    const msg = isUrdu
      ? `*نیا داخلہ درخواست - الصادق ایجوکیشن ہاؤس*\n` +
        `طالب علم کا نام: ${formData.studentName}\n` +
        `والد کا نام: ${formData.fatherName}\n` +
        `مطلوبہ کلاس: ${formData.classApplying}\n` +
        `تاریخ پیدائش: ${formData.dob}\n` +
        `فون نمبر: ${formData.phone}\n` +
        `پتہ: ${formData.address}\n` +
        `سابقہ اسکول: ${formData.prevSchool || 'کوئی نہیں'}\n` +
        `اضافی تفصیلات: ${formData.notes || 'کوئی نہیں'}`
      : `*New Admission Inquiry - Al-Sadiq Education House*\n` +
        `Student Name: ${formData.studentName}\n` +
        `Father/Guardian Name: ${formData.fatherName}\n` +
        `Class Applying For: ${formData.classApplying}\n` +
        `Date of Birth: ${formData.dob}\n` +
        `Phone/WhatsApp: ${formData.phone}\n` +
        `Address/Village: ${formData.address}\n` +
        `Previous School: ${formData.prevSchool || 'N/A'}\n` +
        `Notes: ${formData.notes || 'N/A'}`

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(whatsappUrl, '_blank')
    setSubmitting(false)
    setSubmitted(true)
  }

  const classes = [
    'Pre-Year (Play Group)',
    'KG-1',
    'KG-2',
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
  ]

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-xl">
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={36} />
          </div>
          <h3 className={cn('text-2xl font-bold text-navy-950 mb-2', isUrdu && 'font-urdu')}>
            {isUrdu ? 'درخواست کامیابی سے بھیج دی گئی ہے!' : 'Application Sent Successfully!'}
          </h3>
          <p className={cn('text-slate-600 max-w-md mx-auto mb-6', isUrdu && 'font-urdu')}>
            {isUrdu
              ? 'آپ کی تفصیلات واٹس ایپ کے ذریعے ہمارے دفتر کو موصول ہو گئی ہیں۔ ہم جلد آپ سے رابطہ کریں گے۔'
              : 'Your details have been forwarded to the school administration via WhatsApp. Our admission officer will contact you shortly.'}
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="border-navy-900 text-navy-900"
          >
            {isUrdu ? 'نیا فارم بھریں' : 'Submit Another Application'}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={cn('space-y-6', isUrdu && 'direction-rtl text-right')}>
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className={cn('text-xl font-extrabold text-navy-950', isUrdu && 'font-urdu')}>
              {isUrdu ? 'آن لائن داخلہ فارم' : 'Online Admission Form'}
            </h3>
            <p className={cn('text-xs text-slate-500 mt-1', isUrdu && 'font-urdu')}>
              {isUrdu
                ? 'فارم پُر کر کے بھیجیں، براہ راست اسکول واٹس ایپ پر تفصیلات جائیں گی۔'
                : 'Fill out this form to submit your inquiry directly to school administration.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Student Name */}
            <div>
              <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
                {isUrdu ? 'طالب علم کا نام *' : "Student's Full Name *"}
              </label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder={isUrdu ? 'مثال: علی احمد' : 'e.g. Ali Ahmad'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
              />
            </div>

            {/* Father Name */}
            <div>
              <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
                {isUrdu ? 'والد / سرپرست کا نام *' : "Father / Guardian Name *"}
              </label>
              <input
                type="text"
                required
                value={formData.fatherName}
                onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                placeholder={isUrdu ? 'مثال: محمد احمد' : 'e.g. Muhammad Ahmad'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
              />
            </div>

            {/* Class */}
            <div>
              <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
                {isUrdu ? 'مطلوبہ کلاس *' : 'Class Applying For *'}
              </label>
              <select
                value={formData.classApplying}
                onChange={(e) => setFormData({ ...formData, classApplying: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm bg-white"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
                {isUrdu ? 'تاریخ پیدائش' : 'Date of Birth'}
              </label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
                {isUrdu ? 'فون / واٹس ایپ نمبر *' : 'Phone / WhatsApp Number *'}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0300-1234567"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
              />
            </div>

            {/* Address */}
            <div>
              <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
                {isUrdu ? 'گاؤں / رہائشی پتہ' : 'Village / Address'}
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder={isUrdu ? '58 جی بی جڑانوالہ' : '58 GB Jaranwala, etc.'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
              />
            </div>
          </div>

          {/* Previous School */}
          <div>
            <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
              {isUrdu ? 'سابقہ اسکول کا نام (اگر کوئی ہے)' : 'Previous School Attended (If any)'}
            </label>
            <input
              type="text"
              value={formData.prevSchool}
              onChange={(e) => setFormData({ ...formData, prevSchool: e.target.value })}
              placeholder={isUrdu ? 'اسکول کا نام اور آخری جماعت' : 'Name of last school and class passed'}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
            />
          </div>

          {/* Extra Notes */}
          <div>
            <label className={cn('block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider', isUrdu && 'font-urdu tracking-normal')}>
              {isUrdu ? 'کوئی اضافی سوال یا نوٹ' : 'Any Specific Question / Note'}
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={isUrdu ? 'اگر کوئی سوال ہے تو یہاں لکھیں...' : 'Any questions about bus route, syllabus, timings, etc.'}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-sm"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-6 text-base shadow-lg shadow-gold-500/20"
          >
            <span className={cn('flex items-center justify-center gap-2', isUrdu && 'flex-row-reverse font-urdu')}>
              {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              <span>
                {submitting
                  ? (isUrdu ? 'ارسال ہو رہا ہے...' : 'Submitting...')
                  : (isUrdu ? 'درخواست فارم جمع کروائیں (واٹس ایپ)' : 'Submit Application via WhatsApp')}
              </span>
            </span>
          </Button>

          <p className="text-center text-xs text-slate-400">
            {isUrdu
              ? 'مطلوبہ دستاویزات: بے فارم / پیدائشی سرٹیفکیٹ، والد کا شناختی کارڈ، 2 پاسپورٹ سائز تصاویر'
              : 'Required at time of admission: B-Form, Father CNIC copy, 2 Passport-sized photos'}
          </p>
        </form>
      )}
    </div>
  )
}

