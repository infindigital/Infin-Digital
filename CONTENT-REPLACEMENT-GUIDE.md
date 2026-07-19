# CONTENT REPLACEMENT GUIDE

Reference for the INFIN Digital website: what each page targets, where its content lives, how the
structured data is wired, and what still has to be supplied before launch.

Companion document: **IMAGE-REPLACEMENT-GUIDE.md** covers every image slot.

---

## 1. Read this first: what is not finished

Copy, metadata, schema and internal links are done. Three categories of content could not
be written, because they are claims about the real world that only INFIN Digital can confirm. They
are marked in the code with square brackets so they are impossible to miss and impossible to publish
by accident.

Inventing them would have meant publishing fake client testimonials, fake awards and fake
statistics on a real business website. That is why they are placeholders and not prose.

### Launch blockers

| # | What | Where | Why it blocks launch |
|---|---|---|---|
| 1 | **The contact form does not submit anywhere** | `src/shared/sections/contact-1/Section1.tsx` | The form posts to `action="#"` with no handler. Every enquiry typed into it is silently discarded. Point it at Formspree, Web3Forms, or your own endpoint. |
| 2 | **Awards sections are entirely placeholder** | `index-2/Section7.tsx` (home), `about-1/Section3.tsx` (about) | Five rows each of `[Award name]`. Either supply real recognitions or stop rendering these sections from `Home2Page.tsx` and `About1Page.tsx`. |
| 3 | **Pricing shows `₹XX,XXX`** | `index-2/Section12Pricing.tsx` | The theme shipped invented USD figures. Replaced with placeholders rather than guessed rupee amounts. Supply the real rate card or remove the pricing block. |
| 4 | **Client and partner logos are fictional** | `index-2/Section3.tsx`, `about-1/Section5.tsx` | The strip implies client relationships that do not exist. See the image guide. |
| 5 | **Portfolio entries are described by work type, not named projects** | `portfolio-1/Section1.tsx`, `index-2/Section6.tsx` | Titles such as "Restaurant Website" describe the kind of work rather than naming a client, so they are safe to publish. Swap in real project names and screenshots once clients approve being shown. |
| 6 | **Terms and Privacy Policy links go nowhere** | `about-1/Section4.tsx`, `contact-1/Section1.tsx` | `<Link to="#">` under the enquiry form. A form collecting personal data should link to a real privacy policy. |
| 7 | **Domain is assumed to be `www.infindigital.in`** | `src/seo/siteConfig.ts` | Every canonical, `og:url`, sitemap entry and schema `@id` is built from `SITE_URL`. If you launch on a different domain, change that one constant and everything follows. |

### Facts to confirm

| Placeholder | Count | Files |
|---|---|---|
| `[Year]` company milestones | 5 | `about-1/Section2.tsx` |
| `[Team member name]` and `[Role]` | 4 each | `index-3/Section9.tsx` |
| `[00]+` key numbers (projects, years, retention) | 3 | `index-2/Section9.tsx` |
| `[Client name]`, `[Role, Company]`, quote | 1 set | `index-2/Section5.tsx` |
| `[Author]` and `[Date]` on article cards | 6 each | `index-3/Section11.tsx` |
| `[Author name]` and `[Add date]` on article cards | 4 each | `index-2/Section13.tsx` |
| `[Award or recognition]`, `[Organisation]`, `[ Add date ]`, `[add-website.com]` | 5 each | `index-2/Section7.tsx` |
| `[Award name]`, `[Organisation]`, `[ Add date ]`, `[add-website.com]` | 5 each | `about-1/Section3.tsx` |
| `₹XX,XXX` price points | 6 | `index-2/Section12Pricing.tsx` |

### One thing to verify, not a placeholder

`index-2/Section10.tsx` (homepage client stories) contains three named testimonials: Arifa KY of
Soulishwear, Nafisa Afnan of Earthy By Ellenza, and Hussain Yusuf of Midwest Identity. These look
like genuine client data rather than theme filler, so they were left untouched apart from
punctuation. **If any of them is not a real client with permission to be quoted, replace it with a
placeholder before launch.**

---

## 2. Site structure

Only five routes are part of the live site. The theme ships around sixty more demo routes that are
still reachable; they are excluded from the sitemap and blocked in `public/robots.txt` so they cannot
be indexed as duplicate content.

| Route | Page component | Sections rendered, in order |
|---|---|---|
| `/` | `src/pages/Home2Page.tsx` | `index-2/Section1` to `Section13` |
| `/about` | `src/pages/About1Page.tsx` | `about-1/S1`, `index-2/S9`, `about-1/S2`, `about-1/S3`, `index-3/S9`, `about-1/S4`, `index-3/S11`, `about-1/S5` |
| `/services` | `src/pages/Services1Page.tsx` | `services-1/S1`, `index-1/S4`, `about-3/S5`, `index-2/S12`, `index-1/S11`, `about-1/S4` |
| `/work` | `src/pages/Portfolio1Page.tsx` | `portfolio-1/S1`, `about-3/S7` |
| `/contact` | `src/pages/Contact1Page.tsx` | `contact-1/S1`, `about-2/S4` |

**Sections shared across pages.** Edit these with both contexts in mind:

- `index-2/Section9` renders on `/` and `/about`
- `index-2/Section12` renders on `/` and `/services`
- `about-1/Section4` renders on `/about` and `/services`

---

## 3. Page by page

### `/` Home

| Field | Value |
|---|---|
| **Title** | Digital Marketing Agency in Mangalore \| INFIN Digital |
| **Meta description** | INFIN Digital is a digital marketing and website development agency in Mangalore. We build fast, conversion focused websites and run SEO, Google Ads and Meta Ads that bring real enquiries. |
| **Canonical** | `https://www.infindigital.in/` |
| **Primary keyword** | Digital Marketing Agency in Mangalore |
| **Secondary** | digital marketing company in Mangalore, website development company in Mangalore, SEO company in Mangalore, lead generation, conversion focused website |
| **Main heading** | `In/fin` (the template renders this as an H1 display logotype) |
| **Schema** | Organization, ProfessionalService (LocalBusiness), WebSite, BreadcrumbList, FAQPage |

Section headings, in order: hero, who we are, partner approach, the core services, selected work,
recognition, key numbers, client stories, showreel, and article topics.

### `/about` About

| Field | Value |
|---|---|
| **Title** | About INFIN Digital \| Digital Marketing Agency in Mangalore |
| **Meta description** | Meet INFIN Digital, a Mangalore digital marketing and web development team. Learn how we plan, build and measure work for businesses across Dakshina Kannada. |
| **Canonical** | `https://www.infindigital.in/about` |
| **Primary keyword** | Best Digital Marketing Agency in Mangalore |
| **Secondary** | SEO expert in Mangalore, digital branding, corporate website development |
| **Main heading** | The standards behind the best digital marketing agency in Mangalore |
| **Schema** | Organization, ProfessionalService, BreadcrumbList, FAQPage |

### `/services` Services

| Field | Value |
|---|---|
| **Title** | Website Development Company in Mangalore \| INFIN Digital |
| **Meta description** | Website development, e-commerce, SEO, Google Ads, Meta Ads and branding services in Mangalore. See what each engagement includes and how INFIN Digital measures results. |
| **Canonical** | `https://www.infindigital.in/services` |
| **Primary keyword** | Website Development Company in Mangalore |
| **Secondary** | SEO services in Mangalore, Google Ads agency Mangalore, Meta Ads agency Mangalore, social media marketing Mangalore, ecommerce website development, WordPress development Mangalore, custom website development, landing page design, website maintenance, logo design, performance marketing |
| **Main heading** | `Infin Digital®` (template display logotype) |
| **Schema** | Organization, ProfessionalService, six Service nodes, BreadcrumbList, FAQPage |

This is the commercially most important page. All six services are described in `index-1/Section4.tsx`,
with a five question FAQ in `index-1/Section11.tsx`.

### `/work` Work

| Field | Value |
|---|---|
| **Title** | Our Work \| Website Designer in Mangalore \| INFIN Digital |
| **Meta description** | See the kind of websites, online stores and brand work INFIN Digital produces for businesses in Mangalore, and what a project with us involves from brief to launch. |
| **Canonical** | `https://www.infindigital.in/work` |
| **Primary keyword** | Website Designer in Mangalore |
| **Secondary** | creative website design, conversion focused website, best website designer in Mangalore |
| **Main heading** | Website Work |
| **Schema** | Organization, ProfessionalService, BreadcrumbList |

Filter tabs are in `portfolio-1/PortfolioFilterSort.tsx`. The labels were changed to Web Design,
E-Commerce and Digital Marketing. The underlying values are still `design`, `photography` and
`marketing` because the component is shared with unused demo pages; rename them only if you also
update every consumer.

### `/contact` Contact

| Field | Value |
|---|---|
| **Title** | Contact INFIN Digital \| Digital Marketing Company in Mangalore |
| **Meta description** | Talk to INFIN Digital about your website, SEO or ad campaign. Call +91 80733 02248, message us on WhatsApp, or visit our office at Bendoorwell, Kankanady, Mangaluru. |
| **Canonical** | `https://www.infindigital.in/contact` |
| **Primary keyword** | Digital Marketing Company in Mangalore |
| **Secondary** | SEO company in Mangalore, web designer in Mangalore |
| **Main heading** | Talk to a digital marketing company in Mangalore |
| **Schema** | Organization, ProfessionalService, BreadcrumbList, FAQPage |

---

## 4. Where the SEO layer lives

| File | Responsibility |
|---|---|
| `src/seo/siteConfig.ts` | Single source of truth: domain, NAP, socials, areas served, the six services. Change a fact here and titles, schema, canonicals and the footer stay consistent. |
| `src/seo/schema.ts` | Builders for Organization, ProfessionalService, WebSite, Service, FAQPage and BreadcrumbList, combined into one `@graph` per page. |
| `src/seo/faqs.ts` | 28 FAQs in four groups. They feed FAQPage structured data and are the reference set for on-page FAQ copy. |
| `src/seo/PageMeta.tsx` | Renders title, description, canonical, robots, Open Graph, Twitter cards and the JSON-LD block. React 19 hoists these into `<head>`. |
| `index.html` | Static fallback metadata. |
| `public/robots.txt` | Allows the five real routes, blocks the theme demo routes, points to the sitemap. |
| `public/sitemap.xml` | The five live URLs with priorities. |

### Structured data summary

| Type | Pages | Notes |
|---|---|---|
| `Organization` | all | Publisher identity, `@id` referenced by the other nodes |
| `ProfessionalService` | all | The LocalBusiness node. Carries address, phone, opening hours, `areaServed` for Mangalore, Dakshina Kannada, Surathkal, Ullal, Moodbidri, Bantwal, Puttur, Karkala, Udupi and Manipal, plus an offer catalogue of the six services |
| `WebSite` | `/` | |
| `Service` x 6 | `/services` | One node per core service |
| `FAQPage` | `/`, `/about`, `/services`, `/contact` | Different question sets per page so no two pages duplicate |
| `BreadcrumbList` | all | |

Validate after deploying with the Google Rich Results Test and Schema.org validator.

---

## 5. Internal linking

Every internal link points at one of the five live routes. Around forty theme links to dead demo
routes such as `/portfolio-details-1`, `/blog-details`, `/team-details`, `/pricing` and `/faqs` were
retargeted during this pass.

Current internal link distribution across live pages: `/work` 18, `/contact` 17, `/services` 11,
`/` 5, `/about` 2.

Suggested additions as the site grows:

- `/about` is the weakest linked page. Add a contextual link to it from the homepage "who we are"
  section and from the services FAQ where the working process is described.
- When individual service pages are built (`/services/seo`, `/services/web-development` and so on),
  link them from the six service cards in `index-1/Section4.tsx`, which currently all point at
  `/contact`.
- When real case studies exist, link each one from the matching service description. Service page to
  proof is the strongest internal linking pattern for commercial intent.
- Add Privacy Policy and Terms routes and link them from the footer as well as the form disclaimer.

---

## 6. Editorial rules used

- **No em dashes or en dashes anywhere.** Verified zero across every file that renders on a live
  route. Use commas, full stops or colons. The en dashes previously hard coded into three article
  card components were replaced with the word "on".
- **No unverifiable claims.** No "award winning", no "trusted by hundreds", no guaranteed rankings,
  no invented response times. Authority is built from describing method precisely.
- **Keyword placement is natural.** Location terms appear where they carry meaning, not in every
  paragraph. Surathkal, Ullal, Moodbidri, Bantwal, Puttur, Karkala, Udupi and Manipal appear in
  service area context only.
- **Length envelopes respected.** Every replacement string is matched to the character count of the
  string it replaced, so no heading wraps onto an extra line and no card reflows. Measured against
  the pre-content build, total page heights are: home +1%, about 0%, services +1%, work 0%,
  contact 0%. This is the main reason total word count is lower than a blank page brief would
  suggest: the layout is fixed, and most slots are headings, buttons and short card labels rather
  than paragraphs. **If you edit copy later, keep the new string within roughly 10% of the length of
  the old one**, or the section will grow and the design will drift.

- **Markup was not touched.** Heading tags, classes, element counts, animation attributes and
  element order are byte identical to the template. Only text, `alt` values and link targets changed.

---

## 7. Known technical issues worth fixing next

1. **The site is client rendered.** Google executes JavaScript and will see the metadata and schema,
   but link unfurlers on WhatsApp, LinkedIn and Facebook do not. They only read `index.html`, so
   every shared link currently previews as the homepage regardless of which page was shared.
   Prerendering (`vite-plugin-prerender`, or moving to a framework with SSR) would fix this properly
   and would also improve time to first contentful paint.
2. **One 1.6 MB JavaScript bundle** (353 KB gzipped) is loaded on every page. Route level
   `React.lazy` splitting would cut the homepage payload substantially.
3. **Several images exceed 1.5 MB.** `bg-img-3.webp` alone is 2.1 MB. Compressing the largest dozen
   files is the single highest impact page speed change available, and page speed feeds Core Web
   Vitals which feeds rankings.
4. **`live-bg.mov` will not autoplay in Chrome.** Supply an H.264 `.mp4`.
5. **Pre-existing TypeScript errors in `src/layouts/MainLayout.tsx`** around optional header handler
   props. They do not block the Vite build, which does not typecheck, but `npx tsc --noEmit` reports
   them. Not introduced by this content pass.
6. **No analytics or conversion tracking is installed.** The copy repeatedly and correctly says that
   results are measured. Add Google Analytics 4 and Search Console, and define conversion events for
   form submissions, calls and WhatsApp clicks, so that claim is true.
