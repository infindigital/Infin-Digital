// About 3 Section 5 - Gallery (3 columns, parallax-style data-speed)

const COLUMNS = [
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-140.webp", alt: "Repeating curved concrete facade panels in soft daylight" },
            { src: "/assets/imgs/pages/img-142.webp", alt: "Spherical white speaker with a perforated grille on a plain background" },
            { src: "/assets/imgs/pages/img-143.webp", alt: "Humanoid robot bust with a dark visor against a grey studio wall" },
            { src: "/assets/imgs/pages/img-146.webp", alt: "Frosted amber and white glass blocks arranged on a pale surface" },
            { src: "/assets/imgs/pages/img-140.webp", alt: "Close view of the same curved concrete facade pattern" },
            { src: "/assets/imgs/pages/img-139.webp", alt: "Row of glass fronted server cabinets in a clean white room" },
        ],
    },
    {
        dataSpeed: ".8",
        images: [
            { src: "/assets/imgs/pages/img-147.webp", alt: "Robotic arm nozzle with green and red indicator lights in close up" },
            { src: "/assets/imgs/pages/img-144.webp", alt: "Black cylinder and dark panel displayed on a pale blue plinth" },
            { src: "/assets/imgs/pages/img-138.webp", alt: "Cutaway view of a white wind turbine hub and blades" },
            { src: "/assets/imgs/pages/img-146.webp", alt: "Translucent resin blocks catching light from one side" },
            { src: "/assets/imgs/pages/img-148.webp", alt: "Abstract turquoise water surface streaked with gold light" },
            { src: "/assets/imgs/pages/img-149.webp", alt: "Deep blue abstract wave scattered with points of light" },
        ],
    },
    {
        dataSpeed: ".1",
        images: [
            { src: "/assets/imgs/pages/img-126.webp", alt: "Stacked pale stone sculptures in a sunlit gallery space" },
            { src: "/assets/imgs/pages/img-146.webp", alt: "Cluster of frosted glass blocks casting soft shadows" },
            { src: "/assets/imgs/pages/img-147.webp", alt: "Precision machine tip lit by small coloured status lights" },
            { src: "/assets/imgs/pages/img-5.webp", alt: "Matte black control unit with four dials on a marble ledge" },
            { src: "/assets/imgs/pages/img-142.webp", alt: "Round white speaker photographed against a neutral backdrop" },
            { src: "/assets/imgs/pages/img-151.webp", alt: "Abstract study of a breaking teal and white ocean wave" },
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
