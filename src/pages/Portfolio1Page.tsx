import PageMeta from "@/seo/PageMeta";
import {
  breadcrumbSchema,
  graph,
  localBusinessSchema,
  organizationSchema,
} from "@/seo/schema";
import Section1 from "@/shared/sections/portfolio-1/Section1";
import Section2 from "@/shared/sections/about-3/Section7";

const SCHEMA = graph([
  organizationSchema(),
  localBusinessSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ]),
]);

export default function Portfolio1Page() {
  return (
    <>
      <PageMeta
        title="Our Work | Website Designer in Mangalore | INFIN Digital"
        description="See the kind of websites, online stores and brand work INFIN Digital produces for businesses in Mangalore, and what a project with us involves from brief to launch."
        path="/work"
        schema={SCHEMA}
      />
            <Section1 />
            <Section2 />

    </>
  );
}
