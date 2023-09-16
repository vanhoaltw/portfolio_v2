import HeaderPage from '@/components/projects/HeaderPage';

// export const generateStaticParams = async () => {
//   return allProjects.map((post) => ({ slug: post._raw.flattenedPath }));
// };

export const generateMetadata = () => {
  return { title: 'Blog' };
};

export default function BlogsPage() {
  return (
    <main className='container mt-10'>
      <HeaderPage
        title='Blog'
        description='Web development thoughts and stories'
      />

      <h1 className='flex-center mt-20 text-center dark:text-slate-400'>
        Coming soon!
      </h1>
    </main>
  );
}
