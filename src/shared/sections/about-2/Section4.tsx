import Marquee from "react-fast-marquee";

// About 2 Section 4 - Moving gallery (carousel ticker left)

// Scrolling gallery of social media creatives INFIN Digital designed for a
// marketplace app client, used as a visual sign off at the foot of the contact
// page. Alt text describes each creative and the kind of work it represents.
// NOTE: as with the portfolio titles, client names are kept out of the copy
// until each client has approved being named publicly.
const GALLERY_IMGS = [
    { src: "/assets/imgs/pages/img-130.png", alt: "Social media creative by INFIN Digital showing a marketplace app sending order and enquiry notifications to a listed business" },
    { src: "/assets/imgs/pages/img-131.png", alt: "Food delivery social media post designed by INFIN Digital, with two friends sharing a pizza beside the app screen" },
    { src: "/assets/imgs/pages/img-132.png", alt: "Business listing campaign creative by INFIN Digital, with illustrated figures around a boardroom table" },
    { src: "/assets/imgs/pages/img-133.png", alt: "Seasonal social media creative by INFIN Digital featuring a couple watching a sunset inside a gift box" },
    { src: "/assets/imgs/pages/img-134.png", alt: "App download creative by INFIN Digital with a city skyline and food, leisure and gaming category visuals" },
    { src: "/assets/imgs/pages/img-135.png", alt: "Local search visibility creative by INFIN Digital, with a chef seated on an oversized search bar graphic" },
    { src: "/assets/imgs/pages/img-136.png", alt: "Luxury fragrance product launch creative by INFIN Digital showing a perfume bottle being sprayed" },
];

export default function Section4() {
    return (
        <section className="sec-4-about pt-120">
            <div
                className="moving-gallery at_fade_anim carouselTicker carouselTicker-left"
                data-delay=".5"
                data-fade-from="bottom"
                data-ease="bounce"
            >
                <Marquee
                    speed={40}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul
                        className="wrapper-gallery carouselTicker__list scroll-move-left"
                        style={{
                            display: "flex",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            overflow: "visible",
                            gap: "0 1.5rem",
                        }}
                    >
                        {GALLERY_IMGS.map((item, i) => (
                            <li key={i} style={{ margin: 0, float: "none" }}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={300}
                                    style={{ display: "block", objectFit: "cover" }} loading="lazy" />
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
