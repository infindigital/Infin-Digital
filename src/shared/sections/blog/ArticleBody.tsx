import type { Block } from "@/content/posts";

/** Renders an article body from the block list in src/content/posts.ts. */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
    return (
        <>
            {blocks.map((block, i) => {
                if (block.type === "h2") {
                    return (
                        <h3 key={i} className="fw-600 fz-font-3xl mt-50 mb-20">
                            {block.text}
                        </h3>
                    );
                }
                if (block.type === "ul") {
                    return (
                        <ul key={i} className="mb-30 ps-4">
                            {block.items.map((item, j) => (
                                <li key={j} className="fz-font-lg mb-15">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    );
                }
                return (
                    <p key={i} className="fz-font-lg mb-30">
                        {block.text}
                    </p>
                );
            })}
        </>
    );
}
