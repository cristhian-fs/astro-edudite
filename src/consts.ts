import type { IconMap, SocialLink, Site, Tech } from '@/types'

export const SITE: Site = {
  title: 'Cristhian F.',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://astro-erudite.vercel.app',
  author: 'jktrn',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
  featuredCraftCount: 8,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/craft',
    label: 'craft',
  },
  {
    href: '/tags',
    label: 'tags',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/cristhian-fs',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/cristhianuix',
    label: 'Twitter',
  },
  {
    href: 'mailto:cristhianfernandolp@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export const TECHSTACK: Tech[] = [
  {
    name: 'Astro',
    href: 'https://astro.build/',
    icon: 'astro',
    highlightColor: 'oklch(0.7036_0.2857_324.51)',
  },
  {
    name: 'React',
    href: 'https://react.dev/',
    icon: 'react',
  },
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    icon: 'next',
  },
  {
    name: 'Tailwindcss',
    href: 'https://tailwindcss.com/',
    icon: 'tailwind',
  },
  {
    name: 'Prisma',
    href: 'https://www.prisma.io/',
    icon: 'prisma',
  },
  {
    name: 'Drizzle',
    href: 'https://orm.drizzle.team/',
    icon: 'drizzle',
  },
  {
    name: 'Firebase',
    href: 'https://firebase.google.com/',
    icon: 'firebase',
  },
  // {
  //   name: 'Hono',
  //   href: 'https://hono.dev/',
  //   icon: 'hono',
  // },
  {
    name: 'Javascript',
    icon: 'javascript',
  },
  {
    name: 'Typescript',
    icon: 'typescript',
  },
]
