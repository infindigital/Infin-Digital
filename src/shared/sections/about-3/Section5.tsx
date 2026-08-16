// About 3 Section 5 - Gallery (3 columns, parallax-style data-speed)

// Parallax gallery on the services page: client work alongside the partner and
// certification badges Infin Digital holds. Every frame comes from the supplied
// _incoming-photos set, not the theme's stock images. Alt text names what is in
// each frame so the images support the service keywords on the page. The badges
// use the -lg source files because the gallery renders each frame at full
// column width.
const COLUMNS = [
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-146.jpg", alt: "Business listing campaign creative by Infin Digital with illustrated figures around a boardroom table", width: 1080, height: 1350 },
            { src: "/assets/imgs/pages/img-43-lg.png", alt: "Meta Business Partner and Facebook Verified Agency Partner badges held by Infin Digital", width: 1552, height: 1013 },
        ],
    },
    {
        dataSpeed: ".8",
        images: [
            { src: "/assets/imgs/pages/img-38.png", alt: "Startup funding show website designed by Infin Digital, shown on a laptop on a wooden desk", width: 1086, height: 1449 },
            { src: "/assets/imgs/pages/img-40-lg.png", alt: "Google 5 Star Rated badge earned by Infin Digital", width: 1551, height: 1014 },
        ],
    },
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-42-lg.png", alt: "Google Certified Partner badge showing Infin Digital as a Google verified and trusted partner", width: 1552, height: 1013 },
            { src: "/assets/imgs/pages/img-41-lg.png", alt: "Trustpilot badge showing Infin Digital rated 4.9 out of 5, Excellent", width: 1552, height: 1013 },
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
                                                        width={img.width}
                                                        height={img.height}
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
