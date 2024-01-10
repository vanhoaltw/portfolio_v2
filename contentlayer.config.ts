import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    id: { type: 'number', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string' },
    category: { type: 'string' },
    publishedAt: { type: 'date', required: true },
    techs: { type: 'string' },
    banner: { type: 'string' },
    link: { type: 'string' },
    github: { type: 'string' },
    duration: { type: 'number' },
    featured: { type: 'boolean' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    readTime: {
      type: 'number',
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const noOfWords = doc.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      },
    },
  },
}));

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blogs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    id: { type: 'number', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string' },
    publishedAt: { type: 'date', required: true },
    banner: { type: 'string' },
    featured: { type: 'boolean' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    readTime: {
      type: 'number',
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const noOfWords = doc.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/contents',
  documentTypes: [Project, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'one-dark-pro',
            light: 'solarized-light',
          },
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
