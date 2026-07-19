import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const SERVICE_IMAGES = [
    { src: "/assets/imgs/pages/img-5.webp", alt: "Matte black control unit with dials on a marble ledge" },
    { src: "/assets/imgs/pages/img-6.webp", alt: "Product photography styling used in an online store catalogue" },
    { src: "/assets/imgs/pages/img-7.webp", alt: "Clean editorial layout used as a search visibility reference" },
    { src: "/assets/imgs/pages/img-8.webp", alt: "Campaign visual reference for a social media content plan" },
    { src: "/assets/imgs/pages/img-9.webp", alt: "Studio still used as a paid advertising creative reference" },
    { src: "/assets/imgs/pages/img-10.webp", alt: "Brand identity mock up showing colour and material choices" },
];

const SERVICES = [
    { num: "01", title: "Web Design & Development", text: "Custom, responsive websites built on clean code, fast page loads and clear conversion paths.", thumb: "/assets/imgs/pages/img-5-sm.webp", alt: "Web design and development work in progress on screen" },
    { num: "02", title: "E-Commerce Development", text: "Online stores with tidy catalogues, trusted payment options and a checkout built to convert.", thumb: "/assets/imgs/pages/img-6-sm.webp", alt: "Product shot of the kind used across an ecommerce store" },
    { num: "03", title: "SEO", text: "Technical fixes, keyword mapping and local SEO that earn durable organic search visibility.", thumb: "/assets/imgs/pages/img-7-sm.webp", alt: "Reference image for organic search and content planning" },
    { num: "04", title: "Digital Marketing", text: "Social media, content and email working together to build demand and steady enquiries.", thumb: "/assets/imgs/pages/img-8-sm.webp", alt: "Visual reference for a social media marketing campaign" },
    { num: "05", title: "Performance Marketing", text: "Google Ads and Meta Ads campaigns measured on tracked leads, not vanity metrics.", thumb: "/assets/imgs/pages/img-9-sm.webp", alt: "Creative reference for a paid advertising campaign" },
    { num: "06", title: "Branding", text: "Logo design, colour, type and brand guidelines that keep every touchpoint consistent.", thumb: "/assets/imgs/pages/img-10-sm.webp", alt: "Brand identity materials arranged for a logo design project" },
];

export default function Section4() {
    return (
        <div className="at-service-area at-panel-pin-area pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="at-service-subtitle-wrap at-about-border d-flex justify-content-between gap-3 mb-50">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">OUR SOLUTIONS</span>
                                    <span className="text-2">OUR SOLUTIONS</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <span className="fs-font-md fw-500 text-decoration-underline">Based in Mangalore</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4 col-xl-4 mb-40">
                        <div className="at-service-content mr-60 mt-20">
                            <div className="at-service-sales-wrap at-panel-pin fix p-relative">
                                <div className="at-service-img-wrapper image-container">
                                    {SERVICE_IMAGES.map((img, i) => (
                                        <div key={i} className="hover-image">
                                            <img
                                                className="thumb"
                                                src={img.src}
                                                alt={img.alt}
                                                width={800}
                                                height={600} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                                <h5 className="fw-600 mb-0 mt-10">
                                    <OdometerCounter count={6} />
                                </h5>
                                <span className="fz-font-lg neutral-500 fw-500">Core service lines</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 ms-auto col-lg-8 col-xl-8 mb-40">
                        <div className="at-service-list-wrap">
                            {SERVICES.map((s) => (
                                <Link key={s.num} to="/contact">
                                    <div className="at-service-item service-item">
                                        <div className="count">
                                            <span className="number">[{s.num}]</span>
                                        </div>
                                        <div className="content">
                                            <h1 className="title">{s.title}</h1>
                                            <p className="text">{s.text}</p>
                                        </div>
                                        <div className="thumb anim-zoomin">
                                            <img src={s.thumb} alt={s.alt} width={200} height={200} loading="lazy" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            <div className="at-service-btn pt-30">
                                <Link className="at-btn" to="/contact">
                                    <span>
                                        <span className="text-1">Get a free quote</span>
                                        <span className="text-2">Get a free quote</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
