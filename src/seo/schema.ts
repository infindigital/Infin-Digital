import { AREAS_SERVED, BUSINESS, SERVICES, SITE_URL, SOCIAL_PROFILES } from "@/seo/siteConfig";

type Json = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.locality,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.country,
};

/** Organization: publisher identity referenced by every other block. */
export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.alternateName,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: BUSINESS.logo },
    description: BUSINESS.description,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: postalAddress,
    sameAs: SOCIAL_PROFILES,
  };
}

/** LocalBusiness: the block that supports local pack and map visibility. */
export function localBusinessSchema(): Json {
  return {
    "@type": "ProfessionalService",
    "@id": LOCAL_ID,
    name: BUSINESS.name,
    image: BUSINESS.image,
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    description: BUSINESS.description,
    address: postalAddress,
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: SOCIAL_PROFILES,
    parentOrganization: { "@id": ORG_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital marketing and web development services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };
}

/** WebSite entity, declared once on the home page. */
export function webSiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** One Service node per core service, for the services page. */
export function servicesSchema(): Json[] {
  return SERVICES.map((service) => ({
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    provider: { "@id": LOCAL_ID },
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    url: `${SITE_URL}/services`,
  }));
}

export type Faq = { question: string; answer: string };

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

/** Wraps a set of schema nodes into a single @graph document. */
export function graph(nodes: Json[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
