const ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path
            d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
            fill="currentColor"
        />
    </svg>
);

const LOGO_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" aria-label="infin">
        <rect x="0" y="0" width="64" height="64" rx="14" fill="#14130F" />
        <text x="32" y="43" textAnchor="middle" fontSize="32" fontWeight="600" letterSpacing="-1.6" fontFamily="'Space Grotesk', sans-serif">
            <tspan fill="#F4F3F0">in</tspan>
            <tspan fill="#6B655B" fontWeight="400">/</tspan>
        </text>
    </svg>
);

const SOCIAL_LINKS = [
    { label: "Instagram", href: "https://www.instagram.com/infindigital.in/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/infin-digital/" },
    { label: "WhatsApp", href: "https://wa.link/tj1o72" },
    { label: "Google", href: "https://share.google/Os5ovmoT2nVarRLcm" },
];

export default function Section1({ classList }: { classList?: string }) {
    return (
        <section className={`sec-1-home-2 pt-85 container-2200 ${classList || ""}`}>
            <div className="overflow-hidden p-relative pt-90 pb-90 mx-lg-3 mx-2">
                <div
                    className="p-absolute top-0 left-0 w-100 h-100 rounded-5 opacity-10 z-0"
                    data-background="/assets/imgs/pages/noise.gif"
                />
                <div className="container p-relative z-1">
                    <div className="row g-4 align-items-end">
                        <div className="col-xxl-4 col-lg-5 col-md-6 col-12">
                            <div className="alt-hero-service at-hero-service mt-40">
                                <ul>
                                    <li>{LOGO_SVG}</li>
                                    <li>
                                        <span className="fz-font-md fw-500 common-black">
                                            A Mangalore agency building websites, brands, and
                                            campaigns that bring in real customers.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-12 ps-xxl-5">
                            <div className="at-title-anim overflow-hidden">
                                <h1 className="fz-160 fw-600 mb-0 at-title-text">
                                    In/fin
                                </h1>
                            </div>
                            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                                <div className="at-hero-social style-2">
                                    {SOCIAL_LINKS.map(({ label, href }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                                            {label}
                                            {ARROW_SVG}
                                        </a>
                                    ))}
                                </div>
                                <p className="fz-font-lg fw-500 mb-0">
                                    <a href="tel:+918073302248" className="text-decoration-none">[ +91 80733 02248 ]</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
