import Marquee from "react-fast-marquee";
import BrandLogo from "@/shared/elements/BrandLogo";
import { CLIENT_BRANDS, type Brand } from "@/content/clientBrands";

// About 1 Section 5 - Brand scroll (partner logos, matching the home page)

const BRANDS: Brand[] = [...CLIENT_BRANDS, ...CLIENT_BRANDS, ...CLIENT_BRANDS];

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
                                <BrandLogo brand={brand} />
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
