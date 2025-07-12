// lib/wordpress-api.ts
import { cache } from 'react';

// Enhanced types for enriched data
interface WordPressImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
  title: string;
  sizes: {
    thumbnail?: string;
    medium?: string;
    large?: string;
    full: string;
  };
  width: number;
  height: number;
}

interface WordPressAuthor {
  id: number;
  name: string;
  slug: string;
  avatar: string;
  description: string;
  url: string;
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

interface WordPressPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  date: string;
  modified: string;
  status: string;
  link: string;
  featuredImage?: WordPressImage;
  author: WordPressAuthor;
  categories: WordPressCategory[];
  tags: WordPressTag[];
  commentStatus: string;
  format: string;
  sticky: boolean;
}

interface PostsQueryOptions {
  page?: number;
  perPage?: number;
  search?: string;
  author?: number;
  categories?: string[]; // slugs
  tags?: string[]; // slugs
  orderBy?: 'date' | 'title' | 'slug' | 'modified' | 'menu_order';
  order?: 'asc' | 'desc';
  status?: 'publish' | 'draft' | 'private';
  sticky?: boolean;
  excludeSticky?: boolean;
}

interface PostsResponse {
  posts: WordPressPost[];
  total: number;
  totalPages: number;
  hasMore: boolean;
}

class WordPressAPI {
  private baseUrl: string;
  private cache = new Map<string, any>();

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BLOG_API_URL!;
    if (!this.baseUrl) {
      throw new Error('NEXT_PUBLIC_BLOG_API_URL is not defined');
    }
  }

  private async fetchWithCache<T>(
    endpoint: string,
    options: RequestInit = {},
    cacheKey?: string,
  ): Promise<T> {
    const key = cacheKey || endpoint;

    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const url = `${this.baseUrl}/wp-json/wp/v2/${endpoint}`;

    const response = await fetch(url, {
      cache: 'force-cache',
      next: {
        tags: ['wordpress', 'posts'],
        revalidate: 3600, // 1 hour
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `WordPress API Error: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    this.cache.set(key, data);
    return data;
  }

  // Convert to arrow functions to maintain 'this' context
  private processImage = (media: any): WordPressImage | undefined => {
    if (!media || !media.source_url) return undefined;

    return {
      id: media.id,
      url: media.source_url,
      alt: media.alt_text || '',
      caption: media.caption?.rendered || '',
      title: media.title?.rendered || '',
      sizes: {
        thumbnail: media.media_details?.sizes?.thumbnail?.source_url,
        medium: media.media_details?.sizes?.medium?.source_url,
        large: media.media_details?.sizes?.large?.source_url,
        full: media.source_url,
      },
      width: media.media_details?.width || 0,
      height: media.media_details?.height || 0,
    };
  };

  private processAuthor = (author: any): WordPressAuthor => {
    return {
      id: author.id,
      name: author.name || '',
      slug: author.slug || '',
      avatar: author.avatar_urls?.['96'] || '',
      description: author.description || '',
      url: author.url || '',
    };
  };

  private processCategory = (category: any): WordPressCategory => {
    return {
      id: category.id,
      name: category.name || '',
      slug: category.slug || '',
      description: category.description || '',
      count: category.count || 0,
    };
  };

  private processTag = (tag: any): WordPressTag => {
    return {
      id: tag.id,
      name: tag.name || '',
      slug: tag.slug || '',
      description: tag.description || '',
      count: tag.count || 0,
    };
  };

  private processPost = (post: any): WordPressPost => {
    return {
      id: post.id,
      title: post.title?.rendered || '',
      content: post.content?.rendered || '',
      excerpt: post.excerpt?.rendered || '',
      slug: post.slug || '',
      date: post.date || '',
      modified: post.modified || '',
      status: post.status || 'publish',
      link: post.link || '',
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]
        ? this.processImage(post._embedded['wp:featuredmedia'][0])
        : undefined,
      author: post._embedded?.['author']?.[0]
        ? this.processAuthor(post._embedded['author'][0])
        : { id: 0, name: '', slug: '', avatar: '', description: '', url: '' },
      categories:
        post._embedded?.['wp:term']?.[0]?.map((cat: any) =>
          this.processCategory(cat),
        ) || [],
      tags:
        post._embedded?.['wp:term']?.[1]?.map((tag: any) =>
          this.processTag(tag),
        ) || [],
      commentStatus: post.comment_status || 'closed',
      format: post.format || 'standard',
      sticky: post.sticky || false,
    };
  };

  // Get posts with all related data
  getPosts = cache(
    async (options: PostsQueryOptions = {}): Promise<PostsResponse> => {
      try {
        const params = new URLSearchParams();

        // Add _embed to get related data in one request
        params.append('_embed', 'true');

        if (options.page) params.append('page', options.page.toString());
        if (options.perPage)
          params.append('per_page', options.perPage.toString());
        if (options.search) params.append('search', options.search);
        if (options.author) params.append('author', options.author.toString());
        if (options.orderBy) params.append('orderby', options.orderBy);
        if (options.order) params.append('order', options.order);
        if (options.status) params.append('status', options.status);

        // Handle categories by slug
        if (options.categories && options.categories.length > 0) {
          const categoryIds = await this.getCategoryIdsBySlug(
            options.categories,
          );
          if (categoryIds.length > 0) {
            params.append('categories', categoryIds.join(','));
          }
        }

        // Handle tags by slug
        if (options.tags && options.tags.length > 0) {
          const tagIds = await this.getTagIdsBySlug(options.tags);
          if (tagIds.length > 0) {
            params.append('tags', tagIds.join(','));
          }
        }

        // Handle sticky posts
        if (options.sticky !== undefined) {
          params.append('sticky', options.sticky.toString());
        }

        const response = await fetch(
          `${this.baseUrl}/wp-json/wp/v2/posts?${params.toString()}`,
          {
            cache: 'force-cache',
            next: {
              tags: ['wordpress', 'posts'],
              revalidate: 3600,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const posts = await response.json();
        const total = parseInt(response.headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(
          response.headers.get('X-WP-TotalPages') || '0',
          10,
        );
        const currentPage = options.page || 1;

        // Use arrow function for map to preserve 'this'
        return {
          posts: posts.map((post: any) => this.processPost(post)),
          total,
          totalPages,
          hasMore: currentPage < totalPages,
        };
      } catch (error) {
        console.error('Error fetching posts:', error);
        return { posts: [], total: 0, totalPages: 0, hasMore: false };
      }
    },
  );

  // Get single post by slug
  getPostBySlug = cache(async (slug: string): Promise<WordPressPost | null> => {
    try {
      const response = await fetch(
        `${this.baseUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed=true`,
        {
          cache: 'force-cache',
          next: {
            tags: ['wordpress', 'posts'],
            revalidate: 3600,
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.status}`);
      }

      const posts = await response.json();
      return posts.length > 0 ? this.processPost(posts[0]) : null;
    } catch (error) {
      console.error(`Error fetching post by slug ${slug}:`, error);
      return null;
    }
  });

  // Get single post by ID
  getPostById = cache(async (id: number): Promise<WordPressPost | null> => {
    try {
      const response = await fetch(
        `${this.baseUrl}/wp-json/wp/v2/posts/${id}?_embed=true`,
        {
          cache: 'force-cache',
          next: {
            tags: ['wordpress', 'posts'],
            revalidate: 3600,
          },
        },
      );

      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`Failed to fetch post: ${response.status}`);
      }

      const post = await response.json();
      return this.processPost(post);
    } catch (error) {
      console.error(`Error fetching post by ID ${id}:`, error);
      return null;
    }
  });

  // Get all categories
  getCategories = cache(async (): Promise<WordPressCategory[]> => {
    try {
      const categories = await this.fetchWithCache<any[]>(
        'categories?per_page=100',
      );
      // Use arrow function in map
      return categories.map((category) => this.processCategory(category));
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  });

  // Get all tags
  getTags = cache(async (): Promise<WordPressTag[]> => {
    try {
      const tags = await this.fetchWithCache<any[]>('tags?per_page=100');
      // Use arrow function in map
      return tags.map((tag) => this.processTag(tag));
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  });

  // Helper method to get category IDs by slugs
  private getCategoryIdsBySlug = cache(
    async (slugs: string[]): Promise<number[]> => {
      try {
        const response = await fetch(
          `${this.baseUrl}/wp-json/wp/v2/categories?slug=${slugs.join(
            ',',
          )}&per_page=100`,
          {
            cache: 'force-cache',
            next: { tags: ['wordpress', 'categories'] },
          },
        );

        if (!response.ok) return [];

        const categories = await response.json();
        return categories.map((cat: any) => cat.id);
      } catch (error) {
        console.error('Error fetching category IDs:', error);
        return [];
      }
    },
  );

  // Helper method to get tag IDs by slugs
  private getTagIdsBySlug = cache(
    async (slugs: string[]): Promise<number[]> => {
      try {
        const response = await fetch(
          `${this.baseUrl}/wp-json/wp/v2/tags?slug=${slugs.join(
            ',',
          )}&per_page=100`,
          {
            cache: 'force-cache',
            next: { tags: ['wordpress', 'tags'] },
          },
        );

        if (!response.ok) return [];

        const tags = await response.json();
        return tags.map((tag: any) => tag.id);
      } catch (error) {
        console.error('Error fetching tag IDs:', error);
        return [];
      }
    },
  );

  // Get related posts
  getRelatedPosts = cache(
    async (postId: number, limit: number = 5): Promise<WordPressPost[]> => {
      try {
        const post = await this.getPostById(postId);
        if (!post || post.categories.length === 0) return [];

        const categoryIds = post.categories.map((cat) => cat.id);
        const response = await fetch(
          `${this.baseUrl}/wp-json/wp/v2/posts?categories=${categoryIds.join(
            ',',
          )}&exclude=${postId}&per_page=${limit}&_embed=true`,
          {
            cache: 'force-cache',
            next: { tags: ['wordpress', 'posts'] },
          },
        );

        if (!response.ok) return [];

        const posts = await response.json();
        // Use arrow function in map
        return posts.map((post: any) => this.processPost(post));
      } catch (error) {
        console.error('Error fetching related posts:', error);
        return [];
      }
    },
  );

  // Search posts
  searchPosts = cache(
    async (
      query: string,
      options: Omit<PostsQueryOptions, 'search'> = {},
    ): Promise<PostsResponse> => {
      return this.getPosts({ ...options, search: query });
    },
  );

  // Get posts by category
  getPostsByCategory = cache(
    async (
      categorySlug: string,
      options: Omit<PostsQueryOptions, 'categories'> = {},
    ): Promise<PostsResponse> => {
      return this.getPosts({ ...options, categories: [categorySlug] });
    },
  );

  // Get posts by tag
  getPostsByTag = cache(
    async (
      tagSlug: string,
      options: Omit<PostsQueryOptions, 'tags'> = {},
    ): Promise<PostsResponse> => {
      return this.getPosts({ ...options, tags: [tagSlug] });
    },
  );

  // Get posts by author
  getPostsByAuthor = cache(
    async (
      authorId: number,
      options: Omit<PostsQueryOptions, 'author'> = {},
    ): Promise<PostsResponse> => {
      return this.getPosts({ ...options, author: authorId });
    },
  );

  // Get recent posts
  getRecentPosts = cache(
    async (limit: number = 5): Promise<WordPressPost[]> => {
      const { posts } = await this.getPosts({
        perPage: limit,
        orderBy: 'date',
        order: 'desc',
      });
      return posts;
    },
  );

  // Get popular posts (by comment count)
  getPopularPosts = cache(
    async (limit: number = 5): Promise<WordPressPost[]> => {
      try {
        const response = await fetch(
          `${this.baseUrl}/wp-json/wp/v2/posts?per_page=${limit}&orderby=comment_count&order=desc&_embed=true`,
          {
            cache: 'force-cache',
            next: { tags: ['wordpress', 'posts'] },
          },
        );

        if (!response.ok) return [];

        const posts = await response.json();
        // Use arrow function in map
        return posts.map((post: any) => this.processPost(post));
      } catch (error) {
        console.error('Error fetching popular posts:', error);
        return [];
      }
    },
  );

  // Clear cache
  clearCache(): void {
    this.cache.clear();
  }
}

// Export singleton instance
export const wordpress = new WordPressAPI();

// Export types
export type {
  WordPressPost,
  WordPressImage,
  WordPressAuthor,
  WordPressCategory,
  WordPressTag,
  PostsQueryOptions,
  PostsResponse,
};
