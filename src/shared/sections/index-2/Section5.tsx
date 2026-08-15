import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import Swiper from "swiper";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";

// Real client photographs and attributions. The quotes are short drafts written
// in house, not words these clients supplied. Get each person's sign-off on their
// line before treating this as published, and swap in their own wording if they
// offer it. Roles are deliberately short: this renders as a large display
// heading, so a long job title swamps the quote.
const TESTIMONIALS = [
    {
        src: "/assets/imgs/template/avatar/avatar-15.png",
        alt: "Nafisa Afnan, Founder of skincare brand Earthy By Ellenza and an Infin Digital client",
        thumbClass: "thumb-slide-1",
        quote: "Our brand finally looks the way it feels.",
        name: "Nafisa Afnan",
        role: "Founder, Earthy By Ellenza",
    },
    {
        src: "/assets/imgs/template/avatar/avatar-16.png",
        alt: "Arifa KY, Founder of clothing label Soulishwear and an Infin Digital client",
        thumbClass: "thumb-slide-2",
        quote: "The website sells the way our store does.",
        name: "Arifa KY",
        role: "Founder, Soulishwear",
    },
    {
        src: "/assets/imgs/template/avatar/avatar-17.png",
        alt: "Hussain Yusuf, CEO of Midwest Identity Services and an Infin Digital client",
        thumbClass: "thumb-slide-3",
        quote: "Clear thinking, clean design, delivered on time.",
        name: "Hussain Yusuf",
        role: "CEO, Midwest Identity Services",
    },
    {
        src: "/assets/imgs/template/avatar/avatar-18.png",
        alt: "Mohammed Irshad, Managing Director of MedEdge MEA and an Infin Digital client",
        thumbClass: "thumb-slide-4",
        quote: "They understood our market before we explained it.",
        name: "Mohammed Irshad",
        role: "Managing Director, MedEdge MEA",
    },
    {
        src: "/assets/imgs/template/avatar/avatar-19.png",
        alt: "Abdul Nasir, Co-Founder and General Manager of Local Souq and an Infin Digital client",
        thumbClass: "thumb-slide-5",
        quote: "They made local retail easy to find online.",
        name: "Abdul Nasir",
        role: "Co-Founder, Local Souq",
    },
];

const ARROW_SVG = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
    >
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section5() {
    const thumbsRef = useRef<HTMLDivElement | null>(null);
    const mainRef = useRef<HTMLDivElement | null>(null);
    const mainSwiperRef = useRef<SwiperInstance | null>(null);
    const mmThumbsRef = useRef<{ revert?: () => void } | null>(null);

    useEffect(() => {
        const thumbsEl = thumbsRef.current;
        const mainEl = mainRef.current;

        if (!thumbsEl || !mainEl) return;

        mainSwiperRef.current?.destroy(true, true);
        const thumbsSwiper = new Swiper(thumbsEl, {
            modules: [FreeMode, Thumbs],
            spaceBetween: 0,
            slidesPerView: 5,
            freeMode: true,
            loop: false,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
        });

        const mainSwiper = new Swiper(mainEl, {
            modules: [Autoplay, Thumbs],
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            thumbs: {
                swiper: thumbsSwiper,
            },
        });

        mainSwiperRef.current = mainSwiper;

        return () => {
            mainSwiper.destroy(true, true);
            thumbsSwiper.destroy(true, true);
            mainSwiperRef.current = null;
        };
    }, []);

    // GSAP thumbs parallax: scatter thumb 1,2,4,5 on scroll by breakpoint
    useEffect(() => {
        let mounted = true;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted || !thumbsRef.current) return;

            const thumbsWrap = thumbsRef.current;

            const sectionTrigger = thumbsWrap.closest("section");
            const wrapper = thumbsWrap.querySelector(".swiper-wrapper");
            if (!sectionTrigger || !wrapper) return;

            const children = Array.from(wrapper.children);
            const thumb1 = children[0] as HTMLElement | undefined;
            const thumb2 = children[1] as HTMLElement | undefined;
            const thumb4 = children[3] as HTMLElement | undefined;
            const thumb5 = children[4] as HTMLElement | undefined;
            const thumbs = [thumb1, thumb2, thumb4, thumb5].filter(
                (el): el is HTMLElement => el != null
            );
            if (thumbs.length < 4) return;

            const mmThumbs = gsap.matchMedia();
            mmThumbsRef.current = mmThumbs;

            // xs (< 575px): no effect
            mmThumbs.add("(max-width: 574.98px)", () => {
                gsap.set(thumbs, { clearProps: "x,y" });
                return () => { };
            });

            // 576px to 1399px
            mmThumbs.add("(min-width: 576px) and (max-width: 1399px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionTrigger,
                        start: "top 50%",
                        end: "bottom 70%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });
                tl.to(thumb1!, { x: -70, y: 20, duration: 1 }, 0)
                    .to(thumb2!, { x: -80, y: -60, duration: 1 }, 0)
                    .to(thumb4!, { x: 70, y: -86, duration: 1 }, 0)
                    .to(thumb5!, { x: 65, y: 15, duration: 1 }, 0);
                return () => tl.kill();
            });

            // >= 1400px
            mmThumbs.add("(min-width: 1400px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionTrigger,
                        start: "top 50%",
                        end: "bottom 70%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });
                tl.to(thumb1!, { x: -500, y: 200, duration: 1 }, 0)
                    .to(thumb2!, { x: -200, y: -100, duration: 1 }, 0)
                    .to(thumb4!, { x: 300, y: -70, duration: 1 }, 0)
                    .to(thumb5!, { x: 500, y: 200, duration: 1 }, 0);
                return () => tl.kill();
            });
        };

        const t = setTimeout(() => {
            init();
        }, 100);

        return () => {
            mounted = false;
            clearTimeout(t);
            mmThumbsRef.current?.revert?.();
            mmThumbsRef.current = null;
        };
    }, []);

    return (
        <section className="sec-5-home-2 pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div
                            ref={thumbsRef}
                            className="swiper slider-testimonial-thumbs overflow-visible"
                        >
                            <div className="swiper-wrapper position-relative">
                                {TESTIMONIALS.map((person, index) => (
                                    <div
                                        key={index}
                                        className={`swiper-slide d-flex justify-content-center ${person.thumbClass}`}
                                    >
                                        <div className="avatar-thumbnail">
                                            <img
                                                src={person.src}
                                                alt={person.alt}
                                                width={150}
                                                height={150}
                                                className="img-cover" loading="lazy" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 mx-auto">
                        <div ref={mainRef} className="swiper slider-testimonial-2 mt-50">
                            <div className="swiper-wrapper">
                                {TESTIMONIALS.map((person, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="text-center">
                                            <h3 className="fw-700 reveal-text mb-20">
                                                <RevealText>{`“${person.quote}”`}</RevealText>
                                            </h3>
                                            <p className="mb-0 fw-500">
                                                {person.name}
                                                <span className="opacity-75">, {person.role}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="justify-content-center d-flex mt-50">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link
                                    className="at-btn-circle"
                                    to="/contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        mainSwiperRef.current?.slidePrev();
                                    }}
                                    aria-label="Previous slide"
                                >
                                    {ARROW_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/contact">
                                    Get in touch
                                </Link>
                                <Link
                                    className="at-btn-circle"
                                    to="/contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        mainSwiperRef.current?.slideNext();
                                    }}
                                    aria-label="Next slide"
                                >
                                    {ARROW_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
