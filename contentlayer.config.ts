import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

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

export default makeSource({
  contentDirPath: 'src/contents',
  documentTypes: [Project],
  mdx: {
    cwd: process.cwd(),
    rehypePlugins: [
      rehypeSlug,
      [
        /**
         * Adds auto-linking button after h1, h2, h3 headings
         */
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          // test: ['h2', 'h3'],
          properties: { class: 'heading-link' },
          // content: '#',
          // content: s(
          //   'svg',
          //   {
          //     xmlns: 'http://www.w3.org/2000/svg',
          //     viewBox: '0 0 24 24',
          //     width: '24',
          //     height: '24',
          //     fill: 'none',
          //     stroke: 'currentColor',
          //     'stroke-width': '2',
          //     'stroke-linecap': 'round',
          //     'stroke-linejoin': 'round',
          //     'aria-label': 'Anchor link',
          //   },
          //   // [
          //   //   s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
          //   //   s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
          //   //   s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
          //   //   s('line', { x1: '16', y1: '3', x2: '14', y2: '21' }),
          //   // ]
          // ),
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
        },
      ],
    ],
  },
});
