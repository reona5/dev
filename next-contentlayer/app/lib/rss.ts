import { getPosts } from "@/app/data/post";
import { Post } from "contentlayer/generated";
import Rss from "rss";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

const generateFeedItem = async (post: Post) => {
  const { renderedMdx } = await import("@/app/components/mdx-components");

  return {
    title: post.title,
    description: post.description,
    url: `${SITE_URL}${post.slug}`,
    guid: post.slug,
    date: post.date,
    categories: post.tags,
    custom_elements: [
      {
        "content:encoded": {
          _cdata: await renderedMdx(post.body.code),
        },
      },
    ],
  };
};

export const getFeed = async () => {
  const feed = new Rss({
    title: process.env.NEXT_PUBLIC_SITE_TITLE ?? "",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "",
    generator: "Reona Shimada",
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    language: process.env.NEXT_PUBLIC_SITE_LANGUAGE ?? "",
  });
  const posts = getPosts({ isPublished: true }).slice(0, 10);
  const feedItems = await Promise.all(posts.map(generateFeedItem));

  feedItems.forEach((item) => {
    feed.item(item);
  });

  return feed;
};
