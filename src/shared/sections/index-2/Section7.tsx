import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M5.00013 13.9999L5 5.00003L7 5L7.0001 11.9999L17.1719 12L13.2222 8.05027L14.6364 6.63606L21.0003 13L14.6364 19.364L13.2222 17.9497L17.1719 14L5.00013 13.9999Z"
            fill="currentColor"
        />
    </svg>
);

const EXTERNAL_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

const DIAMOND_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z"
            fill="currentColor"
        />
    </svg>
);

const AWARDS = [
    {
        href: "https://www.facebook.com/business/partner-directory",
        date: "Meta Verified",
        img: "/assets/imgs/pages/img-40.png",
        imgLg: "/assets/imgs/pages/img-40-lg.png",
        title: "Facebook Agency Partner",
        excellence: "Meta Business Partners",
        url: "facebook.com",
    },
    {
        href: "https://www.google.com/partners",
        date: "Google Verified",
        img: "/assets/imgs/pages/img-41.png",
        imgLg: "/assets/imgs/pages/img-41-lg.png",
        title: "Google Certified Partner",
        excellence: "Google Partners",
        url: "google.com/partners",
    },
    {
        href: "https://www.trustpilot.com",
        date: "Rated 4.9 / 5",
        img: "/assets/imgs/pages/img-42.png",
        imgLg: "/assets/imgs/pages/img-42-lg.png",
        title: "Excellent on Trustpilot",
        excellence: "Trustpilot Reviews",
        url: "trustpilot.com",
    },
    {
        href: "https://www.google.com",
        date: "5.0 Rating",
        img: "/assets/imgs/pages/img-43.png",
        imgLg: "/assets/imgs/pages/img-43-lg.png",
        title: "Google 5 Star Rated",
        excellence: "Google Reviews",
        url: "google.com",
    },
];

export default function Section7() {
    return (
        <section className="home-2-section-7 pt-120 pb-120">
            <div className="container">
                <div className="row g-4 align-items-end">
                    <div className="col-xxl-3 col-lg-6 col-md-6">
                        <h1 className="fw-500 fz-ds-1 mb-0">Awards.</h1>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-md-4 ms-auto d-flex justify-content-lg-end">
                        <div
                            className="at-btn-group at-btn-group-transparent at_fade_anim"
                            data-delay=".5"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <Link className="at-btn-circle" to="/work">
                                {ARROW_SVG}
                            </Link>
                            <Link className="at-btn z-index-1" to="/work">
                                View Our Work
                            </Link>
                            <Link className="at-btn-circle" to="/work">
                                {ARROW_SVG}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row pt-120">
                    <div className="col-12">
                        {AWARDS.map((award, index) => (
                            <div
                                key={index}
                                className="card-award scroll-move-up"
                                data-img-award={award.imgLg}
                            >
                                <a
                                    href={award.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-award-link"
                                >
                                    <span className="card-award-date">{award.date}</span>
                                    <div className="card-award-content">
                                        <div className="card-award-image">
                                            <img
                                                src={award.img}
                                                alt={`${award.title} badge`}
                                                width={120}
                                                height={80}
                                                className="w-100 h-100" loading="lazy" />
                                        </div>
                                        <h6 className="card-award-title mb-0">{award.title}</h6>
                                    </div>
                                    <h6 className="card-award-web-excellence mb-0">
                                        {award.excellence}
                                    </h6>
                                    <div className="card-award-meta">
                                        <span className="card-award-url fz-font-lg">
                                            {award.url}
                                        </span>
                                    </div>
                                    <div className="card-award-icon ms-auto">
                                        {EXTERNAL_ICON_SVG}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7 col-12 ms-auto pt-80">
                        <div className="award-description d-flex gap-5">
                            <div className="icon">{DIAMOND_SVG}</div>
                            <div className="content">
                                <h5 className="revert-text mb-0 reveal-text">
                                    <RevealText>
                                        Most agencies sell you a channel. We start with your numbers,
                                        your margins, your enquiry volume, your repeat rate, and
                                        pick the work that moves them. Fewer deliverables, clearer
                                        reasoning, and reporting you can actually read.
                                    </RevealText>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
