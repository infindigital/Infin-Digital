// About 3 Section 5 - Gallery (3 columns, parallax-style data-speed)

// Parallax gallery on the services page: a mix of social media creatives and
// web design work produced by Infin Digital. Alt text names the kind of work in
// each frame so the images support the service keywords on the page.
const COLUMNS = [
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-140.jpg", alt: "Social media creative by Infin Digital promoting local search visibility, with a chef seated on an oversized search bar" },
            { src: "/assets/imgs/pages/img-142.jpg", alt: "App download creative by Infin Digital with a city skyline and food, leisure and gaming visuals" },
            { src: "/assets/imgs/pages/img-143.jpg", alt: "Seasonal social media creative by Infin Digital showing a couple watching a sunset inside a gift box" },
            { src: "/assets/imgs/pages/img-146.jpg", alt: "Business listing campaign creative by Infin Digital with illustrated figures around a boardroom table" },
            { src: "/assets/imgs/pages/img-140.jpg", alt: "Second view of the local search visibility creative designed by Infin Digital" },
            { src: "/assets/imgs/pages/img-139.png", alt: "Dark themed agency website designed by Infin Digital, shown on a laptop beside wireframe sketches and a style guide" },
        ],
    },
    {
        dataSpeed: ".8",
        images: [
            { src: "/assets/imgs/pages/img-147.png", alt: "Digital solutions website homepage by Infin Digital on a laptop, with wireframes, a process card and colour swatches" },
            { src: "/assets/imgs/pages/img-144.jpg", alt: "Marketplace listing creative by Infin Digital showing order and enquiry notifications arriving on a phone" },
            { src: "/assets/imgs/pages/img-138.jpg", alt: "Food delivery social media creative by Infin Digital with two friends sharing a pizza beside the app screen" },
            { src: "/assets/imgs/pages/img-146.jpg", alt: "Campaign creative by Infin Digital illustrating an outsourced team working behind a business" },
            { src: "/assets/imgs/pages/img-148.png", alt: "Website analytics dashboard on a phone showing visitors and traffic sources next to a site designed by Infin Digital" },
            { src: "/assets/imgs/pages/img-149.png", alt: "Results driven website homepage by Infin Digital on a tablet with performance, traffic and engagement panels" },
        ],
    },
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-126.png", alt: "Digital agency website homepage designed by Infin Digital, shown on a laptop with web, UI, SEO and marketing service tiles" },
            { src: "/assets/imgs/pages/img-146.jpg", alt: "Business listing campaign creative by Infin Digital shown again in the gallery column" },
            { src: "/assets/imgs/pages/img-147.png", alt: "Web design project by Infin Digital with the homepage on screen and the process mapped out on a card" },
            { src: "/assets/imgs/pages/img-5.png", alt: "Responsive website by Infin Digital displayed across a monitor, laptop, tablet and phone beside its source code" },
            { src: "/assets/imgs/pages/img-142.jpg", alt: "App promotion creative by Infin Digital with a winding road linking food, travel and gaming visuals" },
            { src: "/assets/imgs/pages/img-151.png", alt: "Mobile analytics view of a website built by Infin Digital, showing monthly visitors and top pages" },
        ],
    },
];

export default function Section5({ classList = "" }: { classList?: string }) {
    return (
        <section className={`sec-5-about pt-65 pb-65 ${classList || ""}`}>
            <div className="mg-gallery-area fix">
                <div className="container-fluid container-2200">
                    <div className="at-gallery-wrapper">
                        <div className="row gx-30">
                            {COLUMNS.map((col, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="col-lg-4 col-md-4 col-sm-4 col-4"
                                >
                                    <div
                                        className="at-gallery-item-wrapper"
                                        data-speed={col.dataSpeed}
                                    >
                                        {col.images.map((img, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="at-gallery-item mb-30"
                                            >
                                                <span>
                                                    <img
                                                        className="w-100"
                                                        src={img.src}
                                                        alt={img.alt}
                                                        width={620}
                                                        height={780}
                                                        style={{ width: "100%", height: "auto", objectFit: "cover" }} loading="lazy" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
