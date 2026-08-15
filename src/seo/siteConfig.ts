/**
 * Single source of truth for INFIN Digital business facts, used by page metadata
 * and by every structured-data block. Update a value here and it propagates to
 * titles, meta descriptions, canonicals and all JSON-LD schema.
 */

export const SITE_URL = "https://www.infindigital.in";

export const BUSINESS = {
  name: "INFIN Digital",
  legalName: "INFIN Digital",
  alternateName: "Infin Digital Mangalore",
  description:
    "INFIN Digital is a digital marketing and website development agency in Mangalore offering web design, e-commerce development, SEO, digital marketing, performance marketing and branding for businesses across Dakshina Kannada.",
  telephone: "+918073302248",
  telephoneDisplay: "+91 80733 02248",
  email: "contact@infindigital.in",
  street: "1st floor, Shah Complex, Opposite Radha Medical, Bendoorwell",
  locality: "Mangaluru",
  region: "Karnataka",
  postalCode: "575002",
  country: "IN",
  countryName: "India",
  logo: `${SITE_URL}/assets/imgs/template/logo/infin-logo.svg`,
  image: `${SITE_URL}/assets/imgs/pages/img-28.webp`,
  priceRange: "₹₹",
} as const;

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/infindigital.in/",
  "https://www.linkedin.com/company/infin-digital/",
  "https://maps.app.goo.gl/e2k7gFiubpNxbLCN6",
];

/** Areas INFIN Digital actively serves, used for LocalBusiness areaServed. */
export const AREAS_SERVED = [
  "Mangalore",
  "Dakshina Kannada",
  "Surathkal",
  "Ullal",
  "Moodbidri",
  "Bantwal",
  "Puttur",
  "Karkala",
  "Udupi",
  "Manipal",
];

/** The six core services. Order matches the services page. */
export const SERVICES = [
  {
    name: "Web Design & Development",
    description:
      "Responsive, fast-loading business websites built on clean, accessible markup and tuned for Core Web Vitals.",
  },
  {
    name: "E-Commerce Development",
    description:
      "Online stores with reliable catalogue, checkout and payment flows, built to be merchandised and measured.",
  },
  {
    name: "SEO",
    description:
      "Technical SEO, on-page optimisation and local SEO that help businesses in Mangalore earn durable search visibility.",
  },
  {
    name: "Digital Marketing",
    description:
      "Search, social and content marketing planned around real customer intent rather than vanity metrics.",
  },
  {
    name: "Performance Marketing",
    description:
      "Google Ads and Meta Ads campaigns with proper conversion tracking, so spend is judged on qualified enquiries.",
  },
  {
    name: "Branding",
    description:
      "Logo design, visual identity and brand systems that stay consistent across every customer touchpoint.",
  },
] as const;
