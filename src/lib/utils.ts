import type { Lang } from '@/i18n/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatDateByLocale(date: Date, locale: Lang) {
  switch(locale){
    case 'pt-br':
      return format(date, "d 'de' MMMM',' yyyy", { locale: ptBR })
    case 'en':
      return format(date, "MMM d',' yyyy")
    default:
      return format(date, "MMM d',' yyyy")
  }
}

export function calculateWordCountFromHtml(
  html: string | null | undefined,
): number {
  if (!html) return 0
  const textOnly = html.replace(/<[^>]+>/g, '')
  return textOnly.split(/\s+/).filter(Boolean).length
}

export function readingTime(wordCount: number, locale: Lang): string {
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 200))
  switch (locale) {
    case 'pt-br':
      return `${readingTimeMinutes} min de leitura`
    case 'en':
      return `${readingTimeMinutes} min read`
    default:
      return `${readingTimeMinutes} min read`
  }
}

export function getHeadingMargin(depth: number): string {
  const margins: Record<number, string> = {
    3: 'ml-4',
    4: 'ml-8',
    5: 'ml-12',
    6: 'ml-16',
  }
  return margins[depth] || ''
}

export const removeLangPrefix = (str: string) => {
  const parts = str.split('/');
  return parts.slice(1).join('/');
}