import Marquee from "react-fast-marquee";

// About 1 Section 5 - Brand scroll (partner logos, matching the home page)

type Brand = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

const BRAND_SOURCES: Brand[] = [
    { src: "/assets/imgs/icons/brand-1.png", alt: "Soulish logo, an Infin Digital e-commerce client", width: 147, height: 40 },
    { src: "/assets/imgs/icons/brand-2.png", alt: "MedEdge logo, an Infin Digital client", width: 173, height: 43 },
    { src: "/assets/imgs/icons/brand-3.png", alt: "Local Souq logo, an Infin Digital client", width: 162, height: 47 },
    { src: "/assets/imgs/icons/brand-4.png", alt: "NKN Media logo, an Infin Digital client", width: 167, height: 35 },
    { src: "/assets/imgs/icons/brand-5.png", alt: "Midwest Identity Services logo, an Infin Digital client", width: 105, height: 24 },
    { src: "/assets/imgs/icons/brand-6.png", alt: "Earthy by Ellenza logo, an Infin Digital client", width: 170, height: 48 },
];

const BRANDS: Brand[] = [...BRAND_SOURCES, ...BRAND_SOURCES, ...BRAND_SOURCES];

export default function Section5() {
    return (
        <section className="sec-5-about pt-65 pb-65">
            <div className="at-brand-scroll carouselTicker carouselTicker-right">
                <Marquee
                    speed={40}
                    direction="right"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul
                        className="at-brand-scroll-wrap d-flex justify-content-center gap-2 carouselTicker__list"
                        style={{
                            display: "flex",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            overflow: "visible",
                            gap: "0 2rem",
                        }}
                    >
                        {BRANDS.map((brand, i) => (
                            <li key={i} className="at-brand-item" style={{ margin: "0 1.5rem", float: "none" }}>
                                <div className="brand-item dark-mode-invert">
                                    <img
                                        src={brand.src}
                                        alt={brand.alt}
                                        width={brand.width}
                                        height={brand.height}
                                        style={{ height: 35, width: "auto" }} loading="lazy" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
