import { getPosts } from "@/app/data/post";
import { allTags } from "@/app/data/tag";
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  const sitemap: MetadataRoute.Sitemap = [
    { url: SITE_URL },
    { url: `${SITE_URL}/about` },
    { url: `${SITE_URL}/posts` },
    { url: `${SITE_URL}/drafts` },
    { url: `${SITE_URL}/tags` },
    { url: `${SITE_URL}/rss.xml` },
  ];

  const publishedPosts = getPosts({ isPublished: true });
  const formattedTags = allTags.map((tag) => tag.replace(/ /g, "%20"));

  publishedPosts.forEach((post) => {
    sitemap.push({
      url: `${SITE_URL}${post.slug}`,
      lastModified: post.date,
    });
  });

  formattedTags.forEach((tag) => {
    sitemap.push({ url: `${SITE_URL}/tags/${tag}` });
  });

  return sitemap;
};

export default sitemap;
