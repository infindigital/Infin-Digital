import { Link, useParams } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import {
  articleSchema,
  breadcrumbSchema,
  graph,
  organizationSchema,
} from "@/seo/schema";
import { getPost, POSTS } from "@/content/posts";
import ArticleBody from "@/shared/sections/blog/ArticleBody";
import ArticleCard1 from "@/shared/cards/ArticleCard1";
import NotFoundPage from "@/pages/NotFoundPage";

const CHEVRON_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" aria-hidden="true">
    <path
      d="M0.666992 0.666672L5.33366 5.33334L0.666992 10"
      stroke="#585959"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);

  // An unknown slug is a genuine 404, not an empty article shell.
  if (!post) return <NotFoundPage />;

  const related = POSTS.filter((other) => other.slug !== post.slug).slice(0, 3);

  const schema = graph([
    organizationSchema(),
    articleSchema(post),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ]);

  return (
    <>
      <PageMeta
        title={`${post.title} | INFIN Digital`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.img}
        schema={schema}
      />

      <section className="sec-1-blog-details overflow-hidden pt-150 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto">
              <div className="nav-menu d-flex align-items-center gap-2 pb-2">
                <Link to="/blog" className="nav-menu__item neutral-900">
                  Blog
                </Link>
                <span className="nav-menu__item-separator">{CHEVRON_SVG}</span>
                <span className="nav-menu__item neutral-500">{post.category}</span>
              </div>
              <h1 className="fw-600 lh-1 mb-0">{post.title}</h1>
              <div className="d-flex flex-wrap align-items-center gap-3 pt-30">
                <span className="nav-menu__item fz-font-label fw-600 neutral-500 text-uppercase">
                  {post.category}
                </span>
                <time className="nav-menu__item fz-font-sm neutral-500" dateTime={post.date}>
                  {post.dateLabel}
                </time>
                <span className="nav-menu__item fz-font-sm neutral-500">{post.readingTime}</span>
              </div>
            </div>

            <div className="col-12 py-5 text-center">
              <img
                src={post.img}
                className="img-fluid rounded-4"
                alt={post.alt}
                width={1720}
                height={789}
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            <div className="col-lg-8 mx-auto">
              <div className="content">
                <h6 className="fz-font-2xl fw-400 mb-50">{post.standfirst}</h6>
                <ArticleBody blocks={post.body} />

                <div className="pt-40 mt-40 border-top">
                  <p className="fz-font-lg mb-20">
                    Want this looked at for your own business? We are a digital marketing and web
                    development team in Mangalore, and we are happy to give you an honest read on
                    what is worth doing first.
                  </p>
                  <Link className="at-btn" to="/contact">
                    <span>
                      <span className="text-1">GET IN TOUCH</span>
                      <span className="text-2">GET IN TOUCH</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-120">
          <div className="container">
            <h2 className="fw-600 fz-font-3xl mb-40">More from the blog</h2>
            <div className="row g-4">
              {related.map((other) => (
                <div key={other.slug} className="col-lg-4 col-md-6 col-12">
                  <ArticleCard1
                    linkPost={`/blog/${other.slug}`}
                    linkAuthor="/about"
                    img={other.img}
                    alt={other.alt}
                    title={other.title}
                    author="INFIN Digital"
                    date={other.dateLabel}
                    category={other.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
