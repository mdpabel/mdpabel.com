const blogsJsonLd = (posts: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WordPress Blog & Insights: Security, Malware Removal, Error Fixing & Blacklist Removal',
    description:
      'Expert articles on WordPress security, malware removal, fixing errors, blacklist removal, and development best practices.',
    url: 'https://www.mdpabel.com/blog',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.mdpabel.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.mdpabel.com/blog',
        },
      ],
    },
    hasPart: posts.map((post: any) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      url: `https://www.mdpabel.com/blog/${post.slug}`,
      image:
        post.featuredImage?.url ||
        'https://www.mdpabel.com/images/blog-opengraph-image.png',
      description: post.excerpt.replace(/<[^>]*>/g, ''), // Strip HTML for clean text
      author: {
        '@type': 'Person',
        name: post.author?.name || 'MD Pabel Team', // Use actual author if available
      },
      publisher: {
        '@type': 'Organization',
        name: 'MD Pabel',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.mdpabel.com/images/blog-opengraph-image.png', // Replace with actual logo URL if available (e.g., a square image)
        },
      },
    })),
  };
};
