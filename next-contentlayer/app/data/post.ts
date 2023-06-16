import { allPosts } from "@/.contentlayer/generated";
import { Post } from "@/.contentlayer/generated/types";

type GetPosts = (isPublished: { isPublished: boolean }) => Post[];

export const getPosts = (({ isPublished }) => {
  return allPosts
    .filter((post) => post.isPublished === isPublished)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}) satisfies GetPosts;
