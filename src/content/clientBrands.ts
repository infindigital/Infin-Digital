// Client logos used by the marquees on the home and about pages.
//
// Every logo ships twice: the colour original for the light theme and a white
// knockout (`-white.png`) for the dark one. The knockouts are generated from
// the originals by flattening each onto white and using ink density as alpha,
// so marks reversed out of a solid block — MedEdge, NKN — keep their
// lettering instead of collapsing into a white slab.

export type Brand = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export const CLIENT_BRANDS: Brand[] = [
    { src: "/assets/imgs/icons/brand-1.png", alt: "Soulish logo, an Infin Digital e-commerce client", width: 147, height: 40 },
    { src: "/assets/imgs/icons/brand-2.png", alt: "MedEdge logo, an Infin Digital client", width: 173, height: 43 },
    { src: "/assets/imgs/icons/brand-3.png", alt: "Local Souq logo, an Infin Digital client", width: 162, height: 47 },
    { src: "/assets/imgs/icons/brand-4.png", alt: "NKN Media logo, an Infin Digital client", width: 167, height: 35 },
    { src: "/assets/imgs/icons/brand-5.png", alt: "Midwest Identity Services logo, an Infin Digital client", width: 105, height: 24 },
    { src: "/assets/imgs/icons/brand-6.png", alt: "Earthy by Ellenza logo, an Infin Digital client", width: 170, height: 48 },
    { src: "/assets/imgs/icons/brand-8.png", alt: "Red Camel logo, an Infin Digital client", width: 147, height: 40 },
];
