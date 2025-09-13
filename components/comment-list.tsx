import { wordpress } from '@/lib/wordpress';
import { WordPressComment } from '@/types/wp';

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

function Avatar({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    // fallback initials bubble
    const initial = (alt || '?').trim().charAt(0).toUpperCase();
    return (
      <div className='flex justify-center items-center bg-white/10 rounded-full w-9 h-9 font-semibold text-slate-200 text-sm'>
        {initial}
      </div>
    );
  }
  return (
    // using <img> to avoid remote loader config; swap to next/image if you prefer
    <img
      src={src}
      alt={alt}
      className='rounded-full ring-1 ring-white/10 w-9 h-9 object-cover'
      loading='lazy'
      decoding='async'
    />
  );
}

function CommentItem({
  c,
}: {
  c: WordPressComment & { children?: WordPressComment[] };
}) {
  return (
    <li className='relative'>
      <div className='flex gap-3'>
        <Avatar src={c.authorAvatar} alt={c.authorName || 'User'} />
        <div className='flex-1'>
          <div className='bg-white/[0.02] shadow-black/10 shadow-lg p-4 border border-white/10 rounded-2xl'>
            <div className='flex flex-wrap items-center gap-x-2 mb-1 text-sm'>
              <span className='font-semibold text-slate-100'>
                {c.authorName || 'Anonymous'}
              </span>
              <span className='text-slate-400'>· {formatDate(c.date)}</span>
            </div>

            <div
              className='prose-invert prose-blockquote:border-indigo-500/30 max-w-none text-slate-100 prose-a:text-indigo-300 prose'
              // WordPress returns sanitized HTML for comment content
              dangerouslySetInnerHTML={{ __html: c.content }}
            />
          </div>

          {/* children */}
          {Array.isArray(c.children) && c.children.length > 0 && (
            <ul className='space-y-5 mt-4 ml-4 md:ml-6 pl-4 md:pl-6 border-white/10 border-l'>
              {c.children.map((child) => (
                <CommentItem key={child.id} c={child} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

function EmptyState() {
  return (
    <div className='bg-white/[0.02] p-8 border border-white/10 border-dashed rounded-2xl text-center'>
      <div className='flex justify-center items-center bg-white/5 mx-auto mb-3 rounded-full w-10 h-10'>
        💬
      </div>
      <p className='text-slate-300 text-sm'>
        No comments yet. Be the first to share your thoughts!
      </p>
    </div>
  );
}

export default async function CommentsList({ postId }: { postId: number }) {
  const { tree = [], comments = [] } = await wordpress.getComments(postId, {
    perPage: 100,
    order: 'asc',
  });

  return (
    <section className='mt-8 not-prose'>
      <h3 className='mb-4 font-semibold text-slate-100 text-lg'>
        {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
      </h3>

      {tree.length === 0 ? (
        <EmptyState />
      ) : (
        <ol className='space-y-6'>
          {tree.map((c) => (
            <CommentItem key={c.id} c={c} />
          ))}
        </ol>
      )}
    </section>
  );
}
