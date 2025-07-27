import { buildArticleMetadata } from "./meta";
import ArticleClient from "./ArticleClient";

// ✅ Await params before accessing its properties
export async function generateMetadata(props) {
  const { params } = props;
  const resolvedParams = await params;
  const slug = resolvedParams.id;

  const res = await fetch("https://admin.thevibes.academy/network_content_api.php?blogs", {
    cache: "no-store",
  });
  const data = await res.json();

  return buildArticleMetadata(slug, data.blogs || []);
}

export default async function ArticlePage(props) {
  const { params } = props;
  const resolvedParams = await params;
  const slug = resolvedParams.id;

  const res = await fetch("https://admin.thevibes.academy/network_content_api.php?blogs", {
    cache: "no-store",
  });
  const data = await res.json();

  return <ArticleClient id={slug} blogs={data.blogs || []} />;
}