import PageMeta from "@/seo/PageMeta";
import { PROJECT_FAQS } from "@/seo/faqs";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  localBusinessSchema,
  organizationSchema,
} from "@/seo/schema";
import Section1 from "@/shared/sections/about-1/Section1";
import Section2 from "@/shared/sections/index-2/Section9";
import Section3 from "@/shared/sections/about-1/Section2";
import Section4 from "@/shared/sections/about-1/Section3";
import Section6 from "@/shared/sections/about-1/Section4";
import Section7 from "@/shared/sections/index-3/Section11";
import Section8 from "@/shared/sections/about-1/Section5";

const SCHEMA = graph([
  organizationSchema(),
  localBusinessSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
  faqSchema(PROJECT_FAQS),
]);

export default function About1Page() {
  return (
    <>
      <PageMeta
        title="About INFIN Digital | Digital Marketing Agency in Mangalore"
        description="Meet INFIN Digital, a Mangalore digital marketing and web development team. Learn how we plan, build and measure work for businesses across Dakshina Kannada."
        path="/about"
        schema={SCHEMA}
      />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section6 classList="bg-neutral-50" />
                <Section7 />
                <Section8 />
            
    </>
  );
}
