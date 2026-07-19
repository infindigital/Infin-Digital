import { BUSINESS, SITE_URL } from "@/seo/siteConfig";

type Props = {
  /** Full document title. Keep under about 60 characters so it is not truncated. */
  title: string;
  /** Meta description. Aim for 140 to 160 characters. */
  description?: string;
  /** Route path such as "/services". Used to build the canonical and og:url. */
  path?: string;
  /** Absolute or root-relative image used for social previews. */
  image?: string;
  /** Serialised JSON-LD produced by src/seo/schema.ts. */
  schema?: string;
  /** Set true only for pages that must stay out of the index, such as 404. */
  noIndex?: boolean;
};

/**
 * React 19 hoists title, meta and link elements rendered anywhere in the tree
 * into the document head, so this component can be dropped at the top of a page.
 *
 * Note that these tags are applied on the client. Google renders JavaScript and
 * will see them, but crawlers that do not execute JS (most social link
 * unfurlers) only read the static tags in index.html. See
 * CONTENT-REPLACEMENT-GUIDE.md for the prerender recommendation.
 */
export default function PageMeta({
  title,
  description,
  path,
  image,
  schema,
  noIndex = false,
}: Props) {
  const canonical = path ? `${SITE_URL}${path === "/" ? "/" : path}` : undefined;
  const socialImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : BUSINESS.image;

  return (
    <>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta
        name="robots"
        content={noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      {description ? <meta property="og:description" content={description} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={socialImage} />

      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      ) : null}
    </>
  );
}
