import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const BTN_CIRCLE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const FAQ_ITEMS = [
    {
        id: "collapseOne",
        num: "1",
        question: "What does a website development project with Infin Digital include?",
        answer: "Every build starts with a short discovery session where we agree on what the site has to achieve: enquiries, orders, bookings or credibility for a sales team. From there we map the page structure, write or edit the copy, design the key templates and then build. Custom website development is done with semantic, accessible markup, responsive website design tested on real phones rather than only a browser resize, and a page speed budget so the site stays fast on a mid range Android over mobile data. Delivery includes on page SEO basics, structured data, analytics and conversion tracking, an SSL secured deployment, a content management setup you can actually use, and a handover walkthrough.",
        open: true,
    },
    {
        id: "collapseTwo",
        num: "2",
        question: "Do you build on WordPress or custom code?",
        answer: "Both, and the choice follows the brief rather than habit. WordPress development in Mangalore suits businesses that publish regularly and want to edit pages without calling a developer; we build with a clean theme, a short plugin list and caching configured properly so it stays a fast loading website. Custom development on a modern framework suits product companies, booking flows, dashboards and anything with unusual logic or heavy traffic. In either case the front end is built to the same standard: mobile friendly layouts, sensible image formats, lazy loading below the fold and Core Web Vitals treated as a requirement, not an afterthought.",
        open: false,
    },
    {
        id: "collapseThree",
        num: "3",
        question: "What is involved in ecommerce website development?",
        answer: "An online store has to solve three problems: helping people find the right product, making them confident enough to buy, and getting them through checkout without friction. We work on all three. That means a category and filter structure built around how your customers actually search, product templates with proper specifications, delivery information and product schema markup, Indian payment gateway and shipping integration, and a checkout stripped of every field you do not need. We also set up ecommerce conversion tracking so you can see which products, channels and campaigns pay for themselves. It suits retailers, D2C brands and manufacturers moving from catalogue enquiries to direct online orders.",
        open: false,
    },
    {
        id: "collapseFour",
        num: "4",
        question: "How do your SEO services in Mangalore actually work?",
        answer: "SEO work runs on three tracks. Technical SEO comes first: crawlability, indexation, site architecture, internal linking, canonical tags, structured data and Core Web Vitals, because content cannot rank on a site search engines struggle to read. Next is keyword mapping, where we assign one clear search intent to each page so your own pages stop competing with each other, then write or rewrite that page to answer the query properly. Local SEO runs alongside it: Google Business Profile optimisation, categories and service areas, consistent name, address and phone details across directories, and location pages where there is genuine demand across Dakshina Kannada and Udupi. We report on rankings, impressions, clicks and enquiries, and never guarantee a position.",
        open: false,
    },
    {
        id: "collapseFive",
        num: "5",
        question: "What does digital marketing cover beyond advertising?",
        answer: "Digital marketing is the ongoing work that keeps your brand visible between campaigns. For most clients that means social media marketing in Mangalore built on a monthly content calendar, formats chosen per platform rather than one asset resized everywhere, and community management so enquiries in comments and direct messages get answered. Around that we handle content planning, email and WhatsApp follow up sequences, review generation, and landing page design for specific offers. The point is a funnel that holds together: something that earns attention, something that captures interest, and something that follows up before the enquiry goes cold.",
        open: false,
    },
    {
        id: "collapseSix",
        num: "6",
        question: "How do you run Google Ads and Meta Ads campaigns?",
        answer: "As a Google Ads agency in Mangalore we start with search intent, building tightly themed campaigns around terms that indicate someone is ready to buy, with negative keyword lists maintained weekly so budget stops leaking to irrelevant clicks. Meta Ads work differently and we treat it that way: audience and creative do the heavy lifting, so we test hooks, formats and offers in structured rounds rather than boosting posts at random. Before anything goes live we set up conversion tracking properly, including server side events where the platform supports it, so reporting is based on tracked leads and sales rather than clicks. Performance marketing is judged on cost per qualified lead and return on ad spend, and we will tell you when a budget is too small to be worth spending.",
        open: false,
    },
    {
        id: "collapseSeven",
        num: "7",
        question: "What is included in branding and logo design?",
        answer: "Branding fixes the problem of a business looking different in every place a customer meets it. We begin with positioning: who you serve, what you do better than the alternatives, and the tone that fits. The deliverable typically includes logo design with primary, secondary and monochrome versions, a colour palette with accessible contrast values, type choices with licensing sorted, iconography, photography direction and templates for social, print and stationery. It is all documented in brand guidelines so an in house team, a printer or another agency can apply it without guesswork. It suits new businesses launching, and established ones whose identity no longer matches what they have become.",
        open: false,
    },
    {
        id: "collapseEight",
        num: "8",
        question: "How long does a typical website project take?",
        answer: "A focused brochure or landing page build usually runs 2 to 3 weeks. A business website of eight to fifteen pages is commonly 4 to 6 weeks, and an ecommerce store or a site with custom functionality takes longer depending on catalogue size and integrations. The schedule depends heavily on how quickly content, product data, images and approvals come back from your side, so we agree those checkpoints in writing at kickoff. If you have a fixed launch date, tell us early and we will scope a first release that can realistically ship, then phase the rest.",
        open: false,
    },
    {
        id: "collapseNine",
        num: "9",
        question: "What does a project cost and how is it priced?",
        answer: "Website projects are quoted as a fixed price against a written scope, so you know the number before work begins. The quote reflects page count, whether templates are custom designed or adapted, the amount of copywriting involved, and any integrations such as payments, booking or CRM. Ongoing work like SEO, social media and paid media runs on a monthly retainer, with advertising budget paid directly to Google or Meta and kept separate from our fee. Website maintenance is available as a small monthly plan covering updates, backups, security patches and content edits. Send us your requirements and we will come back with a scoped quote rather than a generic price list.",
        open: false,
    },
    {
        id: "collapseTen",
        num: "10",
        question: "Will I be able to manage the website after launch?",
        answer: "Yes. We build the content management side around the edits you will realistically make, so adding a service, updating a price or publishing a post does not require a developer. At handover you get a walkthrough recording, admin access in your own name, and documentation for anything unusual. Hosting, domain and analytics accounts are registered to you, never held on your behalf. If you would rather not touch it at all, a maintenance plan covers updates, uptime checks, backups and content changes on request.",
        open: false,
    },
    {
        id: "collapseEleven",
        num: "11",
        question: "Do you work with businesses outside Mangalore?",
        answer: "Yes. Our office is in Kankanady, Mangaluru, and we work in person with businesses across Dakshina Kannada and Udupi, from Surathkal and Ullal to Moodbidri, Bantwal and Manipal. Beyond that we work remotely with clients elsewhere in Karnataka and across India, running projects over calls, shared documents and a staging site you can review at any point. The process is the same either way, and you deal with the people doing the work rather than an account layer in between.",
        open: false,
    },
];

export default function Section11({ classList = "" }: { classList?: string }) {
    return (
        <div className={`alt-faq-area pt-145 pb-80 ${classList || ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="alt-faq-title-wrap mb-40">
                            <div className="rounded-4 overflow-hidden anim-zoomin">
                                <img
                                    src="/assets/imgs/pages/img-21.webp"
                                    width={600}
                                    height={700}
                                    className="w-100"
                                    alt="Side profile of a young man in a black cap against a tiled wall" loading="lazy" />
                            </div>
                            <h6 className="mb-15 pt-50">Question not answered here?</h6>
                            <p className="at-faq-dec mb-35">Tell us what you need and we will advise</p>
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/contact">
                                    {BTN_CIRCLE_ARROW_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/contact">
                                    Talk To Us
                                </Link>
                                <Link className="at-btn-circle" to="/contact">
                                    {BTN_CIRCLE_ARROW_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="at-faq ml-115">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">FAQ</span>
                                    <span className="text-2">FAQ</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="at-section-title reveal-text">
                                <RevealText>
                                    Answers up front. What we build, how we work, what it costs.
                                </RevealText>
                            </h3>
                            <div className="accordion pt-80" id="accordionExample">
                                {FAQ_ITEMS.map((item) => (
                                    <div key={item.id} className="at-faq-item scroll-move-up rounded-4">
                                        <div className="at-faq-header d-flex gap-2">
                                            <div className="box-number">
                                                <span className="at-faq-number">{item.num}</span>
                                            </div>
                                            <button
                                                className={`at-faq-button${item.open ? "" : " collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${item.id}`}
                                                aria-expanded={item.open}
                                                aria-controls={item.id}
                                            >
                                                {item.question}
                                            </button>
                                        </div>
                                        <div
                                            id={item.id}
                                            className={`at-faq-collapse collapse${item.open ? " show" : ""}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="at-faq-body">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
