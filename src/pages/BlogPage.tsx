import PageMeta from "@/seo/PageMeta";
import {
  blogSchema,
  breadcrumbSchema,
  graph,
  organizationSchema,
} from "@/seo/schema";
import { POSTS } from "@/content/posts";
import ArticleCard1 from "@/shared/cards/ArticleCard1";

const ARROW_SVG = (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
  </svg>
);

const SCHEMA = graph([
  organizationSchema(),
  blogSchema(POSTS),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
]);

export default function BlogPage() {
  return (
    <>
      <PageMeta
        title="Blog | Digital Marketing Insights from INFIN Digital"
        description="Practical articles on local SEO, website performance, branding and ad budgets, written by the INFIN Digital team in Mangalore."
        path="/blog"
        schema={SCHEMA}
      />

      <section className="sec-1-archive-1 overflow-hidden pt-150 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12">
              <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                  <span className="text-1">Insights &amp; Inspiration</span>
                  <span className="text-2">Insights &amp; Inspiration</span>
                </span>
                <i>
                  {ARROW_SVG}
                  {ARROW_SVG}
                </i>
              </span>
            </div>
            <div className="col-lg-7">
              <h1 className="fz-ds-1 lh-1 fw-500 mb-lg-0 mb-4">Topics we get asked about</h1>
            </div>
            <div className="col-lg-5 ms-auto text-lg-end">
              <h6 className="fw-500 fz-font-lg mb-0">
                Notes from the work we do for businesses across Mangalore and Dakshina Kannada.
                No theory we have not tried on a real account.
              </h6>
            </div>
          </div>

          <div className="row g-4 pt-70">
            {POSTS.map((post) => (
              <div key={post.slug} className="col-lg-6 col-12">
                <ArticleCard1
                  linkPost={`/blog/${post.slug}`}
                  linkAuthor="/about"
                  img={post.img}
                  alt={post.alt}
                  title={post.title}
                  author="INFIN Digital"
                  date={post.dateLabel}
                  category={post.category}
                />
                <p className="fz-font-lg neutral-500">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
