// app/sitemap.ts
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

type Route = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified?: Date;
};

// ---- Static pages (root-level service slugs) ----
const staticRoutes: Route[] = [
  { path: '/', changeFrequency: 'yearly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 }, // list page

  {
    path: '/wordpress-malware-removal-service',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  { path: '/fix-wordpress-errors', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/custom-website-development',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/headless-wordpress-development',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/convert-wordpress-to-nextjs',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/blacklist-removal-service',
    changeFrequency: 'monthly',
    priority: 0.6,
  },

  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/hire-me', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/templates', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/refund-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/malware-log', changeFrequency: 'weekly', priority: 0.6 },
];

// ---- Dynamic sections ----
const blogSitemap = async (): Promise<Route[]> => {
  const blogs = await wordpress.getPosts();
  return blogs.posts.map((blog) => ({
    path: `/blog/${blog.slug}`,
    lastModified: blog.modified ? new Date(blog.modified) : currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
};

const malwareLogSitemap = async (): Promise<Route[]> => {
  const { posts } = await wordpress.getPosts({
    postType: 'malware-log',
    status: 'publish',
  });
  if (!posts?.length) return [];
  return posts.map((log) => ({
    path: `/malware-log/${log.slug}`,
    lastModified: log.modified ? new Date(log.modified) : currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
};

const snippetsSitemap = async (): Promise<Route[]> => {
  const { posts } = await wordpress.getPosts({
    postType: 'snippet',
    status: 'publish',
  });
  if (!posts?.length) return [];
  return posts.map((snippet: any) => ({
    path: `/snippets/${snippet.slug}`,
    lastModified: snippet.modified ? new Date(snippet.modified) : currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
};

const caseStudies = async (): Promise<Route[]> => {
  const { posts } = await wordpress.getPosts({
    postType: 'case-study',
    status: 'publish',
  });
  if (!posts?.length) return [];
  return posts.map((cs: any) => ({
    path: `/case-studies/${cs.slug}`,
    lastModified: cs.modified ? new Date(cs.modified) : currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
};

const guides = async (): Promise<Route[]> => {
  const { posts } = await wordpress.getPosts({
    postType: 'guide',
    status: 'publish',
  });

  if (!posts?.length) return [];

  return posts.map((cs: any) => ({
    path: `/guides/${cs.slug}`,
    lastModified: cs.modified ? new Date(cs.modified) : currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [
    blogRoutes,
    malwareLogRoutes,
    snippetsRoutes,
    caseStudiesRoutes,
    guidesRoutes,
  ] = await Promise.all([
    blogSitemap(),
    malwareLogSitemap(),
    snippetsSitemap(),
    caseStudies(),
    guides(),
  ]);

  const allRoutes: Route[] = [
    ...staticRoutes,
    ...blogRoutes,
    ...malwareLogRoutes,
    ...snippetsRoutes,
    ...caseStudiesRoutes,
    ...guidesRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified ?? currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
