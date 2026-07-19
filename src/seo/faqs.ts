import type { Faq } from "@/seo/schema";

/**
 * Search-intent FAQs for INFIN Digital. These feed FAQPage structured data and
 * are the reference set for the on-page FAQ blocks.
 *
 * Answers deliberately describe method and scope rather than quoting fixed
 * prices or timelines, because those vary per project and an unverifiable
 * promise in structured data is a liability.
 */

export const GENERAL_FAQS: Faq[] = [
  {
    question: "What does INFIN Digital do?",
    answer:
      "INFIN Digital is a digital marketing and website development agency based in Mangalore. We build business websites and online stores, run SEO and local SEO programmes, manage Google Ads and Meta Ads campaigns, handle social media and content marketing, and design brand identities.",
  },
  {
    question: "Where is INFIN Digital located?",
    answer:
      "Our office is at 1st floor, Shah Complex, Opposite Radha Medical, Bendoorwell, Kankanady, Mangaluru, Karnataka 575002. You can reach us on +91 80733 02248 or at contact@infindigital.in.",
  },
  {
    question: "Do you work with businesses outside Mangalore?",
    answer:
      "Yes. Most of our work is across Mangalore and Dakshina Kannada, including Surathkal, Ullal, Moodbidri, Bantwal, Puttur and Karkala, as well as Udupi and Manipal. We also work with clients elsewhere in India remotely, since design reviews, reporting and approvals all happen online.",
  },
  {
    question: "How much does a website cost in Mangalore?",
    answer:
      "Cost depends on the number of templates, the functionality involved, and whether content and photography are supplied or produced. A brochure site for a small business sits at one end of the range and a custom e-commerce build at the other. We scope every project and quote a fixed price before work starts, so there are no surprises later.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A straightforward business website usually moves faster than an e-commerce build, because the variables are fewer. The biggest factor is content readiness: projects where copy, images and product data are available at kickoff finish considerably sooner. We agree a schedule with milestones at the start of every engagement.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A short brief on your business and customers, any existing brand assets such as a logo or brand guide, access to your domain and hosting if they already exist, and a single point of contact who can approve work. If you do not have brand assets yet, we can produce them as part of the project.",
  },
  {
    question: "Do you redesign existing websites or only build new ones?",
    answer:
      "Both. Redesigns often start with an audit of what the current site already ranks for, so that existing search visibility is preserved rather than lost at launch. Where a site is fundamentally sound we may recommend targeted fixes to speed, structure and content instead of a full rebuild.",
  },
  {
    question: "Will my website work properly on mobile?",
    answer:
      "Yes. Every site we build is responsive and is tested on real phone and tablet widths, not just a desktop browser resized. Most local search traffic in Mangalore arrives on mobile, so mobile layout, tap targets and load speed are treated as primary requirements rather than an afterthought.",
  },
  {
    question: "Who owns the website once it is finished?",
    answer:
      "You do. The domain, hosting account, content and the site itself belong to you. We hand over administrative access at launch and document what is where, so you are never locked into working with us to make changes.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. Maintenance covers software and plugin updates, security patching, backups, uptime checks and small content changes. Sites that are left unmaintained tend to accumulate speed and security problems, which eventually shows up in both rankings and conversions.",
  },
];

export const SEO_FAQS: Faq[] = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a compounding investment rather than a switch. Technical fixes and Google Business Profile work can shift local visibility relatively early, while competitive commercial keywords take sustained content and authority building over many months. Any agency quoting a guaranteed ranking date is not being straight with you.",
  },
  {
    question: "Can you guarantee a number one ranking on Google?",
    answer:
      "No, and neither can anyone else. Google does not sell or promise organic positions, and the ranking systems change constantly. What we can commit to is a defined scope of technical, on-page, content and local SEO work, with transparent reporting on the metrics that actually move: impressions, qualified clicks, calls and enquiries.",
  },
  {
    question: "What is local SEO and why does it matter in Mangalore?",
    answer:
      "Local SEO is the work that makes a business appear for searches with local intent, such as a service followed by a place name, and in the Google map pack. It covers Google Business Profile optimisation, consistent name, address and phone details across directories, location-relevant content and review management. For businesses serving Dakshina Kannada it is usually the highest-return channel available.",
  },
  {
    question: "What is the difference between technical SEO and on-page SEO?",
    answer:
      "Technical SEO concerns how well search engines can crawl, render and index a site: page speed, Core Web Vitals, mobile usability, structured data, canonical tags, sitemaps and internal link structure. On-page SEO concerns the content itself: search intent, heading structure, keyword coverage and how completely a page answers the question it targets. Both are needed, and technical problems will cap what good content can achieve.",
  },
  {
    question: "Do I need to keep paying for SEO once I rank?",
    answer:
      "Rankings are relative to competitors, so positions drift when others keep publishing and you stop. Ongoing work usually shifts from fixing to extending: new content for new queries, refreshing pages that have decayed, earning links and maintaining technical health. Some businesses reduce scope after reaching a stable position rather than stopping entirely.",
  },
  {
    question: "What is structured data and does my business need it?",
    answer:
      "Structured data is machine-readable markup that tells search engines what a page is about: the organisation behind it, the services offered, the location, and questions the page answers. It does not directly raise rankings, but it makes a listing eligible for richer presentation in results, which affects how many people click.",
  },
];

export const ADS_FAQS: Faq[] = [
  {
    question: "Should I run Google Ads or invest in SEO?",
    answer:
      "They solve different problems. Google Ads buys visibility immediately and is well suited to testing demand, seasonal pushes and competitive commercial terms. SEO builds visibility that does not disappear when spending stops. Most businesses are best served by running paid search while organic work matures, then rebalancing.",
  },
  {
    question: "What is a realistic ad budget for a small business?",
    answer:
      "It depends on how competitive your category is and what a customer is worth to you. The useful way to set a budget is to work backwards from the value of an enquiry and a realistic conversion rate, rather than picking a round monthly figure. We will tell you honestly if a budget is too small to gather meaningful data.",
  },
  {
    question: "How do you measure whether ads are working?",
    answer:
      "Through conversion tracking that records the actions that matter to your business: form submissions, calls, WhatsApp enquiries or completed orders. Reporting on impressions and clicks alone hides whether spend is producing customers. Setting tracking up correctly before launch is part of every campaign we run.",
  },
  {
    question: "Do you handle Meta Ads as well as Google Ads?",
    answer:
      "Yes. Google Ads captures existing demand from people already searching, while Meta Ads on Instagram and Facebook create demand and work well for visual categories such as hospitality, retail, real estate and education. The right mix depends on how your customers actually make decisions.",
  },
  {
    question: "What happens to my campaigns if we stop working together?",
    answer:
      "The ad accounts, pixels, conversion actions and audiences are created in your own accounts and remain yours. We hand over access and documentation, so another team can pick up where we left off without rebuilding from scratch.",
  },
];

export const PROJECT_FAQS: Faq[] = [
  {
    question: "What does your process look like?",
    answer:
      "Discovery to understand the business and its customers, strategy to decide what the site or campaign has to achieve, design, build, and then testing before launch. After launch we measure, report and refine. You see and approve work at each stage rather than only at the end.",
  },
  {
    question: "Do you write the content or do we?",
    answer:
      "Either. Many clients supply raw material about their business and we shape it into structured, search-aware copy. Others hand the writing over entirely. What matters is that pages are planned around what customers are actually searching for, rather than written to fill a layout.",
  },
  {
    question: "Can you build on WordPress?",
    answer:
      "Yes. WordPress suits teams who want to publish and edit content themselves without developer involvement. For sites where speed and custom functionality matter more than day to day editing, a custom build is often the better fit. We recommend based on how you plan to run the site, not on what is quickest for us.",
  },
  {
    question: "Do you handle domain registration and hosting?",
    answer:
      "We can set both up in your name and configure them, or work with providers you already use. Keeping the domain and hosting registered to your business is important, and we recommend it even when we manage the technical side.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Small businesses, startups, corporates, manufacturers, educational institutions, hospitals and clinics, restaurants, hotels, builders and real estate, retail, e-commerce sellers and independent professionals. The work differs by sector: a hospital has compliance and trust requirements a restaurant does not.",
  },
  {
    question: "Will a new website slow down or lose my current Google rankings?",
    answer:
      "It can if the migration is handled carelessly. We map old URLs to new ones, put permanent redirects in place, preserve page titles and content that already earn traffic, and monitor Search Console after launch so any drop is caught early rather than months later.",
  },
  {
    question: "How do we get started?",
    answer:
      "Call +91 80733 02248, message us on WhatsApp, or send an enquiry through the contact page describing your business and what you are trying to achieve. We will come back with an honest view of what we think the right scope is, including when we think you need less than you asked for.",
  },
];

/** Every FAQ on the site, for the FAQPage graph node. */
export const ALL_FAQS: Faq[] = [
  ...GENERAL_FAQS,
  ...SEO_FAQS,
  ...ADS_FAQS,
  ...PROJECT_FAQS,
];
