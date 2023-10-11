// import { promises, readFileSync } from 'fs';
// import matter from 'gray-matter';
// import { bundleMDX } from 'mdx-bundler';
// import { join } from 'path';
// import readingTime from 'reading-time';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypePrettyCode from 'rehype-pretty-code';
// import rehypeSlug from 'rehype-slug';
// import remarkGfm from 'remark-gfm';

import { allBlogs, allProjects } from 'contentlayer/generated';
import { File } from 'lucide-react';
import { ReactElement } from 'react';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNpm,
  SiPnpm,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiYarn,
} from 'react-icons/si';

// type ContentType = 'blog' | 'library' | 'projects';
// // import {
// //   ContentType,
// //   Frontmatter,
// //   PickFrontmatter,
// // } from '@/types/frontmatters';

// export async function getFileSlugArray(type: ContentType) {
//   return getFileList(join(process.cwd(), 'src', 'contents', type)).then(
//     (paths) =>
//       paths.map((path) =>
//         path
//           .replace(join(process.cwd(), 'src', 'contents', type) + '/', '')
//           .replace('.mdx', '')
//           .split('/')
//       )
//   );
// }

// export async function getFileBySlug(type: ContentType, slug: string) {
//   const source = slug
//     ? readFileSync(
//         join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`),
//         'utf8'
//       )
//     : readFileSync(
//         join(process.cwd(), 'src', 'contents', `${type}.mdx`),
//         'utf8'
//       );

//   const { code, frontmatter } = await bundleMDX({
//     source,
//     mdxOptions(options) {
//       options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
//       options.rehypePlugins = [
//         ...(options?.rehypePlugins ?? []),
//         rehypeSlug,
//         () =>
//           rehypePrettyCode({
//             theme: 'css-variables',
//           }),
//         [
//           rehypeAutolinkHeadings,
//           {
//             properties: {
//               className: ['hash-anchor'],
//             },
//           },
//         ],
//       ];

//       return options;
//     },
//   });

//   return {
//     code,
//     frontmatter: {
//       wordCount: source.split(/\s+/gu).length,
//       readingTime: readingTime(source),
//       slug: slug || null,
//       ...frontmatter,
//     },
//   };
// }

// const getFileList = async (dirName: string) => {
//   let files: string[] = [];
//   const items = await promises.readdir(dirName, { withFileTypes: true });

//   for (const item of items) {
//     if (item.isDirectory()) {
//       files = [...files, ...(await getFileList(`${dirName}/${item.name}`))];
//     } else {
//       files.push(`${dirName}/${item.name}`);
//     }
//   }

//   return files;
// };

// export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
//   const files = await getFileList(join(process.cwd(), 'src', 'contents', type));
//   console.log({ files });
//   return files.reduce((allPosts: Array<any>, absolutePath) => {
//     const source = readFileSync(absolutePath, 'utf8');
//     const { data } = matter(source);

//     const res = [
//       {
//         ...(data as any),
//         slug: absolutePath
//           .replace(join(process.cwd(), 'src', 'contents', type) + '/', '')
//           .replace('.mdx', ''),
//         readingTime: readingTime(source),
//       },
//       ...allPosts,
//     ];
//     return res;
//   }, []);
// }

// export async function getRecommendations(currSlug: string) {
//   const frontmatters = await getAllFilesFrontmatter('blog');

//   // Get current frontmatter
//   const currentFm = frontmatters.find((fm) => fm.slug === currSlug);

//   // Remove currentFm and Bahasa Posts, then randomize order
//   const otherFms = frontmatters
//     .filter((fm) => !fm.slug.startsWith('id-') && fm.slug !== currSlug)
//     .sort(() => Math.random() - 0.5);

//   // Find with similar tags
//   const recommendations = otherFms.filter((op) =>
//     op.tags.split(',').some((p: any) => currentFm?.tags.split(',').includes(p))
//   );

//   // Populate with random recommendations if not enough
//   const threeRecommendations =
//     recommendations.length >= 3
//       ? recommendations
//       : [
//           ...recommendations,
//           ...otherFms.filter(
//             (fm) => !recommendations.some((r) => r.slug === fm.slug)
//           ),
//         ];

//   // Only return first three
//   return threeRecommendations.slice(0, 3);
// }

// /**
//  * Get and order frontmatters by specified array
//  */
// export function getFeatured<T>(contents: Array<any>, features: string[]) {
//   // override as T because there is no typechecking on the features array
//   return features.map(
//     (feat) => contents.find((content) => content.slug === feat) as T
//   );
// }

export const getAllTechnical = () => {
  let techs: string[] = [];
  allProjects.forEach((p) => {
    const ts = p.techs?.split(',');
    techs = techs.concat(ts?.filter((i) => !techs.includes(i)) || []);
  });
  return techs;
};

export const getFeaturedProjects = () => {
  return allProjects.filter((i) => i.featured);
};

export const getFeaturedBlogs = () => {
  return allBlogs.filter((p) => p?.featured === true);
};

export const urlType = (url: string) => {
  if (['/'].includes(url[0])) {
    return 'internal';
  }

  if (['#'].includes(url[0])) {
    return 'hash';
  }

  if (url.indexOf('mailto') === 0) {
    return 'mail';
  }

  return 'external';
};

export const formatLang = (
  lang: string,
  title?: string
): {
  language: string;
  icon: ReactElement;
} => {
  let language = lang;
  let icon = <File />;

  switch (lang) {
    case 'js':
    case 'javascript':
      language = 'JavaScript';
      icon = <SiJavascript />;
      break;
    case 'ts':
    case 'typescript':
      language = 'TypeScript';
      icon = <SiTypescript />;
      break;
    case 'jsx':
      language = 'JavaScript React';
      icon = <SiReact />;
      break;
    case 'tsx':
      language = 'TypeScript React';
      icon = <SiTypescript />;
      break;
    case 'html':
      language = 'HTML';
      icon = <SiHtml5 />;
      break;
    case 'css':
      language = 'CSS';
      icon = <SiCss3 />;
      break;
    case 'bash':
    case 'cmd':
      language = 'Terminal';
      break;
    case 'json':
      language = 'JSON';
      break;
    case '':
      language = 'Plain Text';
      break;
    default:
      break;
  }

  switch (title) {
    case 'tailwind.config.js':
      icon = <SiTailwindcss />;
      break;
    case 'package.json':
      icon = <SiWebpack />;
      break;
    case 'npm':
      icon = <SiNpm />;
      break;
    case 'pnpm':
      icon = <SiPnpm />;
      break;
    case 'yarn':
      icon = <SiYarn />;
      break;
    default:
      break;
  }

  return { language, icon };
};
