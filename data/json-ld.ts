import { siteData } from './site-data';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite schema for the overall site
    {
      '@type': 'WebSite',
      '@id': 'https://www.mdpabel.com/#website',
      url: 'https://www.mdpabel.com',
      name: siteData.personal.name,
      description: siteData.personal.description,
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate:
              'https://www.mdpabel.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
    },
    // Organization schema for 3Zero Digital company
    {
      '@type': 'Organization',
      '@id': 'https://www.mdpabel.com/#organization',
      name: siteData.personal.company,
      url: 'https://www.mdpabel.com',
      logo: {
        '@type': 'ImageObject',
        url: siteData.personal.avatar, // Using avatar as fallback; replace with actual logo if available
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteData.personal.address,
        addressLocality: 'Remote',
        addressRegion: 'Worldwide',
        addressCountry: 'BD', // Assuming Bangladesh based on prior context; update if needed
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          telephone: siteData.personal.phone,
          email: siteData.personal.email,
          availableLanguage: 'English',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        },
      ],
      sameAs: siteData.social.links.map((link) => link.href),
    },
    // Person schema for MD Pabel (detailed with skills, experience, etc.)
    {
      '@type': 'Person',
      '@id': 'https://www.mdpabel.com/#person',
      name: siteData.personal.name,
      alternateName: 'MD Pabel',
      jobTitle: siteData.personal.title,
      url: 'https://www.mdpabel.com',
      image: {
        '@type': 'ImageObject',
        url: siteData.personal.avatar,
      },
      description: `${siteData.personal.description} Specializing in full stack development, WordPress security, and malware removal.`,
      worksFor: {
        '@id': 'https://www.mdpabel.com/#organization',
      },
      knowsAbout: [
        ...siteData.skills.languages,
        ...siteData.skills.frontend,
        ...siteData.skills.backend,
        ...siteData.skills.databases,
        ...siteData.skills.tools,
        ...siteData.skills.cms,
        ...siteData.skills.security,
      ],
      alumniOf: [], // Add if education data is available
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full Stack Developer & Security Specialist',
        yearsExperience: siteData.stats.experience.replace('+ Years', ''),
        skills: siteData.skills.security.concat(
          siteData.skills.frontend,
          siteData.skills.backend,
        ),
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteData.personal.location,
      },
      email: siteData.personal.email,
      telephone: siteData.personal.phone,
      sameAs: siteData.social.links.map((link) => link.href),
    },
    // BreadcrumbList for navigation structure
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mdpabel.com/#breadcrumb',
      itemListElement: siteData.navigation.main.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        item: `https://www.mdpabel.com${item.href}`,
      })),
    },
    // Service schemas (one for each major service)
    ...siteData.services.map((service) => ({
      '@type': 'Service',
      '@id': `https://www.mdpabel.com/#service-${service.title
        .toLowerCase()
        .replace(/\s/g, '-')}`,
      name: service.title,
      description: service.description,
      provider: {
        '@id': 'https://www.mdpabel.com/#person',
      },
      serviceType: service.title,
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Service Features',
        itemListElement: service.features.map((feature) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: feature,
          },
        })),
      },
    })),
  ],
};

const service = {
  title: '',
  description: '',
  features: [],
};

const params = {
  slug: '',
};

export const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `https://www.mdpabel.com/#service-${params.slug}`,
  name: service.title,
  description: service.description,
  provider: {
    '@type': 'Person',
    '@id': 'https://www.mdpabel.com/#person',
    name: siteData.personal.name,
  },
  serviceType: service.title,
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Service Features',
    itemListElement: service.features.map((feature) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: feature },
    })),
  },
};
