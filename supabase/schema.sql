-- Supabase Schema for Al-Sadiq Education House
-- Run this in your Supabase project's SQL Editor (Dashboard -> SQL Editor -> New Query)

-- 1. Create table for Admissions Applications
create table if not exists public.admissions (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  father_name text not null,
  class_applying text not null,
  dob date,
  phone text not null,
  address text,
  prev_school text,
  notes text,
  status text default 'pending', -- pending, approved, reviewed, contacted
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create table for Contact Inquiries
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  subject text,
  message text not null,
  status text default 'unread', -- unread, read, replied
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Enable Row Level Security (RLS)
alter table public.admissions enable row level security;
alter table public.contact_inquiries enable row level security;

-- 4. Policies: Allow anonymous public visitors to submit applications/inquiries
create policy "Allow public to submit admissions"
  on public.admissions
  for insert
  to anon, authenticated
  with check (true);

create policy "Allow public to submit contact inquiries"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);

-- 5. Policies: Only authenticated users (admins) can view submitted data
create policy "Allow authenticated users to read admissions"
  on public.admissions
  for select
  to authenticated
  using (true);

create policy "Allow authenticated users to read contact inquiries"
  on public.contact_inquiries
  for select
  to authenticated
  using (true);
