import PageMeta from "@/seo/PageMeta";
import Slideshow from "@/shared/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/shared/slideshow/projects";

export default function PortfolioCurtainPage() {
  return (
    <>
      <PageMeta title="Infin Digital - PortfolioCurtain" />
            <Slideshow variant="curtain" projects={SLIDESHOW_PROJECTS} />
        
    </>
  );
}
