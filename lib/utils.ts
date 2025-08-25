import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWpDate(
  wpDate: string,
  options: Intl.DateTimeFormatOptions = {},
  locale: string = 'en-US',
): string {
  if (!wpDate) return '';

  const date = new Date(wpDate);
  if (isNaN(date.getTime())) return '';

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString(locale, { ...defaultOptions, ...options });
}

export function generateTOC(content: string) {
  const headings = content.match(/<h[2-6][^>]*>.*?<\/h[2-6]>/g) || [];
  return headings.map((h, i) => {
    const level = parseInt(h.match(/<h(\d)/)?.[1] || '2');
    const text = h.replace(/<[^>]*>/g, '').trim();
    const id = `heading-${i}`;
    return { id, text, level };
  });
}
