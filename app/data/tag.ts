import { allPosts } from "@/.contentlayer/generated";

export const allTags = [
  ...new Set(
    allPosts
      .filter((post) => post.isPublished === true)
      .map((post) => post.tags)
      .flat(),
  ),
] as const;
