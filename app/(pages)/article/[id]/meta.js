export function buildArticleMetadata(slug, blogs) {
  const article = blogs.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | The Vibes Network",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.meta_title || article.title,
    description: article.meta_description,
    keywords: article.meta_keywords,
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description,
      url: `/article/${article.slug}`,
      images: [
        {
          url: article.image.startsWith("http")
            ? article.image
            : `https://thevibes.academy/network-media/${article.image}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
