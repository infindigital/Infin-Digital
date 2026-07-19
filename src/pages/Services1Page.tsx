import PageMeta from "@/seo/PageMeta";
import { ADS_FAQS, SEO_FAQS } from "@/seo/faqs";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  localBusinessSchema,
  organizationSchema,
  servicesSchema,
} from "@/seo/schema";
import Section1 from "@/shared/sections/services-1/Section1";
import Section2 from "@/shared/sections/index-1/Section4";
import Section3 from "@/shared/sections/about-3/Section5";
import Section4 from "@/shared/sections/index-2/Section12";
import Section5 from "@/shared/sections/index-1/Section11";
import Section6 from "@/shared/sections/about-1/Section4";

const SCHEMA = graph([
  organizationSchema(),
  localBusinessSchema(),
  ...servicesSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
  faqSchema([...SEO_FAQS, ...ADS_FAQS]),
]);

export default function Services1Page() {
  return (
    <>
      <PageMeta
        title="Website Development Company in Mangalore | INFIN Digital"
        description="Website development, e-commerce, SEO, Google Ads, Meta Ads and branding services in Mangalore. See what each engagement includes and how INFIN Digital measures results."
        path="/services"
        schema={SCHEMA}
      />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 className="pt-0" showNoise={false} />
                <Section5 classList="border-top-100" />
                <Section6 classList="bg-neutral-50" />
            
    </>
  );
}
