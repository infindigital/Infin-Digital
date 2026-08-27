import type { Brand } from "@/content/clientBrands";

// The theme's blanket invert filter turns a coloured logo into its complement
// rather than neutral white, so swap in a purpose-made white knockout instead.
// custom.css picks between the two off `data-bs-theme`.
const whiteVariant = (src: string) => src.replace(/\.png$/, "-white.png");

export default function BrandLogo({ brand }: { brand: Brand }) {
    const style = { height: 35, width: "auto" } as const;

    return (
        <div className="brand-item">
            <img
                className="brand-item__logo brand-item__logo--light"
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                style={style}
                loading="lazy"
            />
            <img
                className="brand-item__logo brand-item__logo--dark"
                src={whiteVariant(brand.src)}
                alt=""
                aria-hidden="true"
                width={brand.width}
                height={brand.height}
                style={style}
                loading="lazy"
            />
        </div>
    );
}
