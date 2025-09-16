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
    path: '/services/wordpress-malware-removal-service',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/services/blacklist-removal-service',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/services/fix-website-errors',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/headless-wordpress-development',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/convert-wordpress-to-nextjs',
    changeFrequency: 'monthly',
    priority: 0.7,
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

const malwareLogSitemap = async (): Promise<Route[]> => {
  const { posts, total } = await wordpress.getPosts({
    postType: 'malware-log',
    status: 'publish',
  });
  if (!posts || posts.length === 0) {
    return [];
  }
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
  if (!posts || posts.length === 0) {
    return [];
  }
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
  if (!posts || posts.length === 0) {
    return [];
  }
  return posts.map((caseStudy: any) => ({
    path: `/case-studies/${caseStudy.slug}`,
    lastModified: caseStudy.modified
      ? new Date(caseStudy.modified)
      : currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogRoutes = await blogSitemap();
  const malwareLogRoutes = await malwareLogSitemap();
  const snippetsRoutes = await snippetsSitemap();
  const caseStudiesRoutes = await caseStudies();

  const allRoutes: Route[] = [
    ...staticRoutes,
    ...blogRoutes,
    ...malwareLogRoutes,
    ...snippetsRoutes,
    ...caseStudiesRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified ?? currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
