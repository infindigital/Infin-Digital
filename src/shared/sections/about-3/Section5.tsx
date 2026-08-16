// About 3 Section 5 - Gallery (3 columns, parallax-style data-speed)

// Parallax gallery on the services page: the six Local Souq social media
// creatives Infin Digital produced, and nothing else. Every frame comes from the
// supplied _incoming-photos set and is 1080x1350, so the three columns stay the
// same height. Alt text names the campaign message in each frame so the images
// support the social media and campaign keywords on the page.
const COLUMNS = [
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-146.jpg", alt: "Local Souq creative by Infin Digital showing outlined figures around a boardroom table with the line we are like your invisible employees working for you", width: 1080, height: 1350 },
            { src: "/assets/imgs/pages/img-140.jpg", alt: "Local Souq creative by Infin Digital with a chef seated on an oversized search bar and the line they search, you get discovered", width: 1080, height: 1350 },
        ],
    },
    {
        dataSpeed: ".8",
        images: [
            { src: "/assets/imgs/pages/img-138.jpg", alt: "Local Souq creative by Infin Digital showing two friends sharing a pizza beside the app screen", width: 1080, height: 1350 },
            { src: "/assets/imgs/pages/img-144.jpg", alt: "Local Souq creative by Infin Digital showing order and enquiry notifications arriving on a business owner's phone", width: 1080, height: 1350 },
        ],
    },
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-143.jpg", alt: "Local Souq creative by Infin Digital showing a couple watching a Dubai sunset inside a gift box held in an open hand", width: 1080, height: 1350 },
            { src: "/assets/imgs/pages/img-142.jpg", alt: "Local Souq app download creative by Infin Digital with a winding road linking food, leisure, riding and gaming across the Dubai skyline", width: 1080, height: 1350 },
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
