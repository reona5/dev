import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { rehypePrettyCodeOptions } from "./app/lib/rehypePrettyCode";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "RouteImpl<string>",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    isPublished: {
      type: "boolean",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./app/content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      (option) =>
        rehypeAutolinkHeadings({
          ...option,
          properties: {
            class: "headings-anchor-link",
            "aria-hidden": true,
            tabindex: "-1",
          },
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              fill: "none",
              viewBox: "0 0 24 24",
              width: "16",
              height: "16",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "w-5 h-5",
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
                },
                children: [],
              },
            ],
          },
        }),
      (option) =>
        rehypeExternalLinks({
          ...option,
          target: "_blank",
        }),
    ],
  },
});
