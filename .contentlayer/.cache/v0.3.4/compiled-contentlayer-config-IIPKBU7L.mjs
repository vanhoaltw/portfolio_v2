// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: { type: "number", required: true },
    title: { type: "string", required: true },
    description: { type: "string" },
    category: { type: "string" },
    publishedAt: { type: "date", required: true },
    techs: { type: "string" },
    banner: { type: "string" },
    link: { type: "string" },
    github: { type: "string" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    }
  }
}));
var rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",
  // Set to true to keep the background color
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ["word"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "src/contents",
  documentTypes: [Project],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IIPKBU7L.mjs.map
