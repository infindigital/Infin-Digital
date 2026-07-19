import PageMeta from "@/seo/PageMeta";
import { GENERAL_FAQS } from "@/seo/faqs";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  localBusinessSchema,
  organizationSchema,
} from "@/seo/schema";
import Section1 from "@/shared/sections/contact-1/Section1";
import Section2 from "@/shared/sections/about-2/Section4";

const SCHEMA = graph([
  organizationSchema(),
  localBusinessSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  faqSchema(GENERAL_FAQS.slice(0, 3)),
]);

export default function Contact1Page() {
  return (
    <>
      <PageMeta
        title="Contact INFIN Digital | Digital Marketing Company in Mangalore"
        description="Talk to INFIN Digital about your website, SEO or ad campaign. Call +91 80733 02248, message us on WhatsApp, or visit our office at Bendoorwell, Kankanady, Mangaluru."
        path="/contact"
        schema={SCHEMA}
      />
            <Section1 />
            <Section2 />

    </>
  );
}
