import { wordpress } from '@/lib/wordpress';
import type { MetadataRoute } from 'next';

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

const baseUrl = 'https://www.mdpabel.com';
const currentDate = new Date();

const staticRoutes: {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}[] = [
  { path: '/', changeFrequency: 'yearly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/services/malware-removal',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/services/fix-website-errors',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/services/website-maintenance',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/services/website-development',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/hire-me', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/templates', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/refund-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/malware-log', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/newsletter', changeFrequency: 'monthly', priority: 0.5 },
];

type Route = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified?: Date;
};

const blogSitemap = async (): Promise<Route[]> => {
  const blogs = await wordpress.getPosts();

  return blogs.posts.map((blog) => ({
    path: `/blog/${blog.slug}`,
    lastModified: blog.modified ? new Date(blog.modified) : currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogRoutes = await blogSitemap();

  const allRoutes: Route[] = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified ?? currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
