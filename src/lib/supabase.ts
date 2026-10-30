import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface AdmissionSubmission {
  id?: string
  student_name: string
  father_name: string
  class_applying: string
  dob?: string
  phone: string
  address?: string
  prev_school?: string
  notes?: string
  created_at?: string
}

export interface ContactSubmission {
  id?: string
  name: string
  phone: string
  email?: string
  subject?: string
  message: string
  created_at?: string
}
