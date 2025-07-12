import { Calendar, Clock, ArrowRight } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import Title from '@/components/title';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';

export async function generateStaticParams() {
  const { posts } = await wordpress.getPosts();

  if (!posts || posts.length === 0) {
    return [];
  }

  // Map the slugs of the posts to the params object
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Blogs = async () => {
  const { posts, total } = await wordpress.getPosts();

  if (!posts) {
    return notFound();
  }

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);
  const otherPosts = posts.slice(4);

  const reading_time = 10;

  return (
    <div className='bg-slate-900 py-16 text-white'>
      <ComponentWrapper>
        <div className='mb-12'>
          <Title>Blog & Insights</Title>
        </div>

        {/* Featured Post */}
        <div className='bg-slate-800 mb-12 border border-slate-700 rounded-lg overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='aspect-video lg:aspect-auto'>
              <img
                src={featuredPost.featuredImage?.url}
                alt={featuredPost.title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-8'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {featuredPost.categories?.map((category, index) => (
                  <span
                    key={index}
                    className='bg-purple-500/20 px-3 py-1 rounded-full text-purple-400 text-sm'>
                    {category.name}
                  </span>
                ))}
              </div>

              <h2 className='mb-4 font-bold text-white text-2xl lg:text-3xl'>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className='hover:text-purple-400 transition-colors'
                  dangerouslySetInnerHTML={{
                    __html: featuredPost.title,
                  }}></Link>
              </h2>

              <p
                className='mb-6 text-slate-300'
                dangerouslySetInnerHTML={{
                  __html: featuredPost.excerpt,
                }}></p>

              <div className='flex items-center gap-6 mb-6 text-slate-400 text-sm'>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-4 h-4' />
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='w-4 h-4' />
                  <span>{reading_time} min read</span>
                </div>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className='group inline-flex items-center gap-2 text-purple-400 hover:text-blue-300 transition-colors'>
                Read Full Article
                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className='mb-12'>
          <h3 className='mb-6 font-semibold text-white text-xl'>
            Recent Posts
          </h3>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
            {recentPosts.map((post) => (
              <article key={post.id} className='group'>
                <div className='mb-4 rounded-lg aspect-video overflow-hidden'>
                  <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>

                <div className='flex flex-wrap gap-1 mb-2'>
                  {post.categories?.slice(0, 2).map((category, index) => (
                    <span
                      key={index}
                      className='bg-slate-700 px-2 py-1 rounded text-slate-300 text-xs'>
                      {category.name}
                    </span>
                  ))}
                </div>

                <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 transition-colors'>
                  <Link
                    href={`/blog/${post.slug}`}
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}></Link>
                </h4>

                <p
                  className='mb-3 text-slate-400 text-sm line-clamp-2'
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}></p>

                <div className='flex justify-between items-center text-slate-500 text-xs'>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{reading_time} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Other Posts */}
        <div>
          <h3 className='mb-6 font-semibold text-white text-xl'>
            More Articles
          </h3>
          <div className='space-y-6'>
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className='group flex gap-4 bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300'>
                <div className='flex-shrink-0 rounded-lg w-48 aspect-video overflow-hidden'>
                  <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>

                <div className='flex-1'>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    {post.categories?.map((category, index) => (
                      <span
                        key={index}
                        className='bg-slate-700 px-2 py-1 rounded-full text-slate-300 text-xs'>
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 text-lg transition-colors'>
                    <Link
                      href={`/blog/${post.slug}`}
                      dangerouslySetInnerHTML={{
                        __html: post.title,
                      }}></Link>
                  </h4>

                  <p
                    className='mb-4 text-slate-400 line-clamp-2'
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}></p>

                  <div className='flex items-center gap-4 text-slate-500 text-sm'>
                    <div className='flex items-center gap-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Clock className='w-4 h-4' />
                      <span>{reading_time} min</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Blogs;
