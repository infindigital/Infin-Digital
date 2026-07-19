// Services 1 Section 1 - Hero (Infin Digital + contact + banner)

export default function Section1() {
    return (
        <section className="sec-1-services pt-150 border-bottom-100 overflow-hidden">
            <div className="container">
                <div className="row align-items-center mb-20">
                    <div className="col-lg-9">
                        <h1 className="section-title d-flex fw-600 fz-200 reveal-text mb-0">
                            Infin Digital<sup>®</sup>
                        </h1>
                    </div>
                    <div className="col-lg-3 ms-auto text-lg-end">
                        <h5>
                            <a href="mailto:contact@infindigital.in" className="text-decoration-none">
                                contact@infindigital.in
                            </a>
                        </h5>
                        <h6 className="fw-600">
                            <a href="tel:+918073302248" className="text-decoration-none">
                                +91 80733 02248
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="at-banner-thumb overflow-hidden scale-up-img">
                <img
                    className="img-cover scale-up"
                    data-speed=".4"
                    src="/assets/imgs/pages/img-153.webp"
                    alt="Infin Digital"
                    width={1920}
                    height={800} loading="lazy" />
            </div>
        </section>
    );
}
