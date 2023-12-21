import { type Options } from "rehype-pretty-code";

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: "github-dark",
  onVisitHighlightedLine(node) {
    node.properties.className = node.properties.className ?? [];
    node.properties.className.push("line--highlighted");
  },
  onVisitLine(node) {
    node.properties.className = node.properties.className ?? [];
    node.properties.className.push("line");
  },
};
