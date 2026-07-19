import Marquee from "react-fast-marquee";

// About 2 Section 4 - Moving gallery (carousel ticker left)

// Scrolling mood board of editorial stock imagery used as a visual sign off
// at the foot of the contact page. Alt text describes each photo as it appears.
const GALLERY_IMGS = [
    { src: "/assets/imgs/pages/img-130.webp", alt: "Motion blurred photograph of a runner sprinting against a clear blue sky" },
    { src: "/assets/imgs/pages/img-131.webp", alt: "Side profile of a woman wearing a white mixed reality headset" },
    { src: "/assets/imgs/pages/img-132.webp", alt: "Man in a black tailored coat and dark sunglasses, blurred figures behind him" },
    { src: "/assets/imgs/pages/img-133.webp", alt: "Woman in a navy coat walking past a red train carriage on a station platform" },
    { src: "/assets/imgs/pages/img-134.webp", alt: "Person in a padded jacket seen through a narrow gap, backlit against snow" },
    { src: "/assets/imgs/pages/img-135.webp", alt: "Model in an orange gilet and red tinted visor shot through a shop window" },
    { src: "/assets/imgs/pages/img-136.webp", alt: "Portrait of a model in a translucent iridescent hooded jacket and visor" },
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
