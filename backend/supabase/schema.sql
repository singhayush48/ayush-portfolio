-- Run this once in Supabase Dashboard → SQL Editor.
-- The Express backend uses a server-only secret key, so it can access these
-- tables while browser clients remain blocked by Row Level Security.

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  featured boolean not null default false,
  github_url text,
  live_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null,
  message text not null check (char_length(message) between 10 and 2000),
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.contact_messages enable row level security;

insert into public.projects (title, slug, description, featured, github_url, live_url)
values
  ('NewspayX', 'newspayx', 'Online newspaper subscription billing platform with Razorpay payments.', true, 'https://github.com/singhayush48/news-payment-app', 'https://news-payment-app-w6e8.vercel.app/login'),
  ('Vaani', 'vaani', 'Real-time chat application built on Node.js, PostgreSQL and Socket.IO.', true, 'https://github.com/singhayush48/Chat-app', 'https://vaani-chat-app-delta.vercel.app/login')
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  featured = excluded.featured,
  github_url = excluded.github_url,
  live_url = excluded.live_url;
