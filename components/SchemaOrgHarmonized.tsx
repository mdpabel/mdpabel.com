import he from 'he';
import type { YoastSEO } from '@/types/wp';

function deepClone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'author'
  );
}

export function SchemaOrgHarmonized({
  yoastData,
  canonical, // e.g. https://www.mdpabel.com/blog/my-post
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mdpabel.com',
}: {
  yoastData?: YoastSEO;
  canonical: string;
  siteUrl?: string;
}) {
  if (!yoastData?.schema?.['@graph']) return null;

  const schema = deepClone(yoastData.schema);
  const graph = Array.isArray(schema['@graph']) ? schema['@graph'] : [];

  const siteId = `${siteUrl}#website`;
  const primaryImageId = `${canonical}#primaryimage`;
  const breadcrumbId = `${canonical}#breadcrumb`;

  const authorName = he.decode(yoastData.author || 'Author');
  const authorSlug = slugify(authorName);
  const personId = `${siteUrl}/#/schema/person/${authorSlug}`;
  const personImageId = `${personId.replace(/\/$/, '')}/image/`; // <- canonicalized person image anchor
  const authorUrl = `${siteUrl}/about`; // or `${siteUrl}/author/${authorSlug}`

  const decodeName = (x: any) => {
    if (x && typeof x.name === 'string') x.name = he.decode(x.name);
    if (x?.author && typeof x.author.name === 'string') {
      x.author.name = he.decode(x.author.name);
    }
  };

  const isType = (node: any, type: string) =>
    node?.['@type'] === type ||
    (Array.isArray(node?.['@type']) && node['@type'].includes(type));

  const out = graph.map((node: any) => {
    const n = { ...node };

    // WebPage / Article / BlogPosting
    if (
      isType(n, 'WebPage') ||
      isType(n, 'Article') ||
      isType(n, 'BlogPosting')
    ) {
      n['@id'] = canonical;
      n.url = canonical;
      n.isPartOf = { '@id': siteId };
      n.primaryImageOfPage = { '@id': primaryImageId };
      n.image = { '@id': primaryImageId };
      n.breadcrumb = { '@id': breadcrumbId };
      n.inLanguage = n.inLanguage || 'en-US';

      // author → frontend Person id
      n.author = { '@id': personId };

      // PotentialAction → canonical (skip SearchAction; handled on WebSite)
      if (Array.isArray(n.potentialAction)) {
        n.potentialAction = n.potentialAction.map((pa: any) => {
          const m = { ...pa };
          if (m['@type'] === 'SearchAction') return m;
          if (Array.isArray(m.target)) m.target = [canonical];
          else if (typeof m.target === 'string') m.target = canonical;
          else if (m.target?.urlTemplate) m.target.urlTemplate = canonical;
          return m;
        });
      }

      decodeName(n);
    }

    // WebSite (also fix SearchAction)
    if (isType(n, 'WebSite')) {
      n['@id'] = siteId;
      n.url = `${siteUrl}/`;
      n.inLanguage = n.inLanguage || 'en-US';
      if (Array.isArray(n.potentialAction)) {
        n.potentialAction = n.potentialAction
          .map((pa: any) => {
            if (pa['@type'] !== 'SearchAction') return pa;
            return {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteUrl}/search?q={search_term_string}`,
              },
              'query-input': {
                '@type': 'PropertyValueSpecification',
                valueRequired: true,
                valueName: 'search_term_string',
              },
            };
          })
          .filter(Boolean);
      }
      decodeName(n);
    }

    // Breadcrumbs
    if (isType(n, 'BreadcrumbList')) {
      n['@id'] = breadcrumbId;
      n.itemListElement = [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${siteUrl}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: he.decode(yoastData.title || ''),
          item: canonical,
        },
      ];
    }

    // Primary ImageObject: keep URL/contentUrl on CMS, only fix the @id anchor
    if (
      isType(n, 'ImageObject') &&
      String(n['@id'] || '').endsWith('#primaryimage')
    ) {
      n['@id'] = primaryImageId;
      n.inLanguage = n.inLanguage || 'en-US';
      // n.url / n.contentUrl untouched (CMS/CDN)
    }

    // Person ImageObject as TOP-LEVEL node: move @id to frontend, keep URLs
    if (
      isType(n, 'ImageObject') &&
      typeof n['@id'] === 'string' &&
      /#\/schema\/person\/image\/?$/i.test(n['@id'])
    ) {
      n['@id'] = personImageId;
      n.inLanguage = n.inLanguage || 'en-US';
      // keep n.url / n.contentUrl as-is (Gravatar/CMS)
    }

    // Person: move identity to frontend + also fix NESTED image object
    if (isType(n, 'Person')) {
      n['@id'] = personId;
      n.url = authorUrl;
      n.name = authorName;

      // fix nested Person.image object @id (this is the bit your output still shows)
      if (
        n.image &&
        typeof n.image === 'object' &&
        isType(n.image, 'ImageObject')
      ) {
        if (typeof n.image['@id'] === 'string') {
          n.image['@id'] = personImageId; // move anchor to frontend
        }
        n.image.inLanguage = n.image.inLanguage || 'en-US';
        // do NOT touch n.image.url / n.image.contentUrl
      }

      if (Array.isArray(n.sameAs)) {
        n.sameAs = n.sameAs.filter(
          (u: string) => !u.includes('websiteblacklistremoval.com'),
        );
      }

      decodeName(n);
    }

    // final cleanup
    decodeName(n);
    return n;
  });

  const harmonized = { ...schema, '@graph': out };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(harmonized) }}
    />
  );
}
