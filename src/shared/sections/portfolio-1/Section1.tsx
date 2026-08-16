import PortfolioCard1, { type PortfolioCard1Tag } from "@/shared/cards/PortfolioCard1";
import PortfolioFilterSort, { type FilterValue } from "./PortfolioFilterSort";

type PortfolioItem = {
    classList: string;
    category: FilterValue;
    link: string;
    img: string;
    title: string;
    description: string;
    tags: PortfolioCard1Tag[];
    imgAlt: string;
};

// NOTE: these titles describe the TYPE of work rather than naming a client, because
// no client has approved being named here yet. They are safe to publish as they are.
// Swap in a real project name only once that project is live and the client agrees.
// NOTE: category values below map to the shared PortfolioFilterSort filter tabs.
// FilterValue only allows "design" | "photography" | "marketing" (+ "all"),
// so real categories are mapped as: Web Design -> "design", E-Commerce -> "photography",
// Branding/Marketing -> "marketing". See report flag re: renaming the tab labels.
const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        classList: "col-xxl-6 col-lg-7",
        category: "photography",
        link: "/work",
        img: "/assets/imgs/pages/img-11.png",
        imgAlt: "Cold pressed oil brand e-commerce website designed by INFIN Digital, showing the homepage with product categories and best selling oils",
        title: "Oil Brand E-Commerce",
        description: "Cold pressed oil brand online store",
        tags: [
            { label: "ecommerce", href: "#" },
            { label: "online store", href: "#" },
            { label: "product pages", href: "#" },
            { label: "fmcg", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "photography",
        link: "/work",
        img: "/assets/imgs/pages/img-12.png",
        imgAlt: "Ethnic fashion e-commerce website built by INFIN Digital, shown on a laptop beside embroidered outfits and branded packaging",
        title: "Fashion E-Commerce",
        description: "Clothing store with size guides",
        tags: [
            { label: "ecommerce", href: "#" },
            { label: "online store", href: "#" },
            { label: "product pages", href: "#" },
            { label: "checkout", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "design",
        link: "/work",
        img: "/assets/imgs/pages/img-5.png",
        imgAlt: "Responsive website built by INFIN Digital shown across a monitor, laptop, tablet and phone beside its source code",
        title: "Responsive Website Build",
        description: "One build across desktop, tablet & mobile",
        tags: [
            { label: "web design", href: "#" },
            { label: "responsive", href: "#" },
            { label: "development", href: "#" },
            { label: "seo", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "marketing",
        link: "/work",
        img: "/assets/imgs/pages/img-14.png",
        imgAlt: "Sports brand identity by INFIN Digital laid out across business cards, stationery, a cap, polo shirt, tumbler and tote bag",
        title: "Brand Identity",
        description: "Identity, packaging & brand guidelines",
        tags: [
            { label: "brand identity", href: "#" },
            { label: "packaging", href: "#" },
            { label: "guidelines", href: "#" },
            { label: "visual identity", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "marketing",
        link: "/work",
        img: "/assets/imgs/pages/img-170.png",
        imgAlt: "Google Ads, Meta Ads and Search Console dashboards showing clicks, conversions and cost per lead from campaigns managed by INFIN Digital",
        title: "Paid Campaigns",
        description: "Paid campaigns & landing pages",
        tags: [
            { label: "performance marketing", href: "#" },
            { label: "paid ads", href: "#" },
            { label: "tracking", href: "#" },
            { label: "campaign", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "marketing",
        link: "/work",
        img: "/assets/imgs/pages/img-171.png",
        imgAlt: "B2B print company brand refresh by INFIN Digital, shown across a folder, notebook, business cards, mug and ID lanyard",
        title: "B2B Brand Refresh",
        description: "B2B brand refresh & website redesign",
        tags: [
            { label: "brand refresh", href: "#" },
            { label: "b2b", href: "#" },
            { label: "website redesign", href: "#" },
            { label: "strategy", href: "#" },
        ],
    },
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    return (
        <section className="sec-1-portfolio-1 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container pb-60">
                <div className="row align-items-end">
                    <div className="col-xxl-8 col-lg-7">
                        <h1 className="fz-ds-1 fw-500">Website Work</h1>
                    </div>
                    <div className="col-xxl-3 col-lg-5 ms-lg-auto">
                        <p className="fz-font-lg neutral-900 text-lg-end">
                            Web, e-commerce, branding and marketing work from a website designer in Mangalore.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <PortfolioFilterSort items={PORTFOLIO_DATA}>
                    {(visibleItems, { hasMore, onLoadMore }) => (
                        <div className="row g-4 justify-content-center">
                            {visibleItems.map((item, idx) => (
                                <PortfolioCard1
                                    key={`${item.title}-${idx}`}
                                    classList={item.classList}
                                    link={item.link}
                                    img={item.img}
                                    imgAlt={item.imgAlt}
                                    title={item.title}
                                    description={item.description}
                                    tags={item.tags}
                                />
                            ))}
                            {hasMore && (
                                <div className="col-12 text-center">
                                    <button type="button" className="at-btn" onClick={onLoadMore}>
                                        <span>
                                            <span className="text-1">LOAD MORE PROJECTS</span>
                                            <span className="text-2">LOAD MORE PROJECTS</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </PortfolioFilterSort>
            </div>
        </section>
    );
}
