// types/blog.ts
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  categories: string[];
  tags: string[];
  featured_image: string;
  comment_count: number;
  reading_time: number;
}

// data/dummy-posts.ts
export const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Complete Guide to WordPress Malware Removal',
    slug: 'wordpress-malware-removal-guide',
    excerpt:
      'Learn how to identify, remove, and prevent malware from your WordPress website with our comprehensive security guide.',
    content: 'Full content here...',
    author: {
      name: 'MD Pabel',
      avatar: '/api/placeholder/40/40',
    },
    date: '2024-01-15',
    categories: ['Security', 'WordPress'],
    tags: ['malware', 'security', 'wordpress', 'cleanup'],
    featured_image: '/api/placeholder/800/400',
    comment_count: 12,
    reading_time: 8,
  },
  {
    id: 2,
    title: 'Building Secure Web Applications with Next.js',
    slug: 'secure-nextjs-applications',
    excerpt:
      'Best practices for developing secure, scalable web applications using Next.js and modern security principles.',
    content: 'Full content here...',
    author: {
      name: 'MD Pabel',
      avatar: '/api/placeholder/40/40',
    },
    date: '2024-01-10',
    categories: ['Development', 'Security'],
    tags: ['nextjs', 'react', 'security', 'development'],
    featured_image: '/api/placeholder/800/400',
    comment_count: 8,
    reading_time: 12,
  },
  {
    id: 3,
    title: 'Website Performance Optimization Checklist',
    slug: 'website-performance-optimization',
    excerpt:
      "A comprehensive checklist to optimize your website's performance and improve user experience.",
    content: 'Full content here...',
    author: {
      name: 'MD Pabel',
      avatar: '/api/placeholder/40/40',
    },
    date: '2024-01-05',
    categories: ['Performance', 'SEO'],
    tags: ['performance', 'optimization', 'seo', 'web'],
    featured_image: '/api/placeholder/800/400',
    comment_count: 15,
    reading_time: 6,
  },
  {
    id: 4,
    title: 'Understanding SQL Injection and Prevention',
    slug: 'sql-injection-prevention',
    excerpt:
      'Learn about SQL injection vulnerabilities and how to protect your web applications from these common attacks.',
    content: 'Full content here...',
    author: {
      name: 'MD Pabel',
      avatar: '/api/placeholder/40/40',
    },
    date: '2024-01-01',
    categories: ['Security', 'Database'],
    tags: ['sql', 'security', 'database', 'injection'],
    featured_image: '/api/placeholder/800/400',
    comment_count: 20,
    reading_time: 10,
  },
  {
    id: 5,
    title: 'Modern CSS Techniques for Better Layouts',
    slug: 'modern-css-techniques',
    excerpt:
      'Explore modern CSS features like Grid, Flexbox, and Container Queries for creating responsive layouts.',
    content: 'Full content here...',
    author: {
      name: 'MD Pabel',
      avatar: '/api/placeholder/40/40',
    },
    date: '2023-12-28',
    categories: ['CSS', 'Frontend'],
    tags: ['css', 'frontend', 'responsive', 'layout'],
    featured_image: '/api/placeholder/800/400',
    comment_count: 7,
    reading_time: 9,
  },
  {
    id: 6,
    title: 'Docker for Web Developers: Getting Started',
    slug: 'docker-for-web-developers',
    excerpt:
      "A beginner's guide to using Docker for web development, including containerization best practices.",
    content: 'Full content here...',
    author: {
      name: 'MD Pabel',
      avatar: '/api/placeholder/40/40',
    },
    date: '2023-12-20',
    categories: ['DevOps', 'Development'],
    tags: ['docker', 'devops', 'containers', 'development'],
    featured_image: '/api/placeholder/800/400',
    comment_count: 25,
    reading_time: 14,
  },
];
