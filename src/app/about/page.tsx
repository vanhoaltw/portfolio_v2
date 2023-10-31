import { Mail } from 'lucide-react';

import Experience from '@/components/about/Experience';
import PrimaryLink from '@/components/links/PrimaryLink';
import Tooltip from '@/components/Tooltip';

import SectionIntroduce from '@/app/about/section-introduce';
import { siteConfig } from '@/constant/config';

const TechItem = ({ name = '', percent = 0 }) => (
  <Tooltip tipChildren={`${percent}%`}>
    <div className='relative inline-block min-w-[50px] overflow-hidden rounded-md bg-slate-200 text-xs dark:bg-slate-800'>
      <p className='px-3 py-1.5 text-center font-bold'>{name}</p>
      <div className='h-0.5 bg-current' style={{ width: `${percent}%` }} />
    </div>
  </Tooltip>
);

export default function AboutPage() {
  return (
    <main className='container mt-10 space-y-20'>
      <SectionIntroduce />

      <section>
        <h2 className='h1 mb-4'>Skill & Tools</h2>
        <p className='mb-6'>
          A list of every programming language, library, and tool I've used.
          I've tried some programming languages and tech stack, both Back-End,
          and Front-End. I also learn how to use some tools for packaging
          infrastructure and do so.
        </p>
        <div>
          <h4 className='text-lg'>Programming Languages</h4>
          <div className='mt-2 flex flex-wrap gap-2'>
            {[
              { name: 'Javascript', percent: 99 },
              { name: 'Typescript', percent: 60 },
              { name: 'PHP', percent: 50 },
              { name: 'HTML', percent: 100 },
              { name: 'CSS/SCSS', percent: 98 },
            ].map((i) => (
              <TechItem {...i} key={i.name} />
            ))}
          </div>
        </div>

        <div className='mt-6'>
          <h4 className='text-lg'>Technologies</h4>
          <div className='mt-2 flex flex-wrap gap-2'>
            {[
              { name: 'React', percent: 99 },
              { name: 'Vue', percent: 30 },
              { name: 'React Native', percent: 10 },
              { name: 'Tailwind CSS', percent: 99 },
              { name: 'Material UI', percent: 80 },
              { name: 'Chakra UI', percent: 80 },
              { name: 'Mantine', percent: 99 },
              { name: 'Bootstrap', percent: 80 },
              { name: 'Next.js', percent: 99 },
              { name: 'Framer Motion', percent: 80 },
              { name: 'Redux Tools', percent: 60 },
              { name: 'Express', percent: 20 },
              { name: 'Redis', percent: 10 },
              { name: 'Zustand', percent: 70 },
              { name: 'GraphQL', percent: 40 },
              { name: 'Nodejs', percent: 20 },
            ].map((i) => (
              <TechItem {...i} key={i.name} />
            ))}
          </div>
        </div>

        <div className='mt-6'>
          <h4 className='text-lg'>Database</h4>
          <div className='mt-2 flex flex-wrap gap-2'>
            {[
              { name: 'MySQL', percent: 30 },
              { name: 'PostgreSQL', percent: 15 },
              { name: 'MongoDB', percent: 20 },
            ].map((i) => (
              <TechItem {...i} key={i.name} />
            ))}
          </div>
        </div>

        <div className='mt-6'>
          <h4 className='text-lg'>Softwares and Tools</h4>
          <div className='mt-2 flex flex-wrap gap-2'>
            {[
              { name: 'VS Code', percent: 99 },
              { name: 'Git', percent: 70 },
              { name: 'Figma', percent: 30 },
              { name: 'Adobe Photoshop', percent: 10 },
              { name: 'Docker', percent: 10 },
              { name: 'Kubernetes', percent: 5 },
            ].map((i) => (
              <TechItem {...i} key={i.name} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className='h1 mb-4'>Experience</h2>
        <p className='mb-6'>
          I started working and attending school together in my third year of
          college (2021).
        </p>
        <Experience />
      </section>

      <section>
        <h2 className='h1'>Contact</h2>
        <div className='mt-4 overflow-hidden rounded-md border'>
          <table className='w-full text-left text-sm text-slate-500 dark:text-slate-400'>
            <thead>
              <tr className='border-b dark:text-white'>
                <th scope='col' className='px-6 py-3'>
                  Contact
                </th>
                <th scope='col' className='px-6 py-3'>
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <th scope='row' className='px-6 py-3'>
                  Address
                </th>
                <th scope='row' className='px-6 py-4'>
                  District 9, Thu Duc city
                </th>
              </tr>
              <tr className='border-b'>
                <th scope='row' className='px-6 py-3'>
                  Email
                </th>
                <th scope='row' className='px-6 py-3 font-medium'>
                  <PrimaryLink
                    className='text-primary inline-flex items-center gap-1 font-semibold dark:text-sky-400'
                    href='mailto:vanhoaltw@gmail.com'
                  >
                    <Mail size={15} />
                    vanhoaltw@gmail.com
                  </PrimaryLink>
                </th>
              </tr>
              <tr>
                <th scope='row' className='px-6 py-3'>
                  Phone
                </th>
                <th scope='row' className='px-6 py-4'>
                  <p>+84 778699653</p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='mt-2'>
          If you need any further information, please do not hesitate to send me
          an email first.
        </p>
      </section>

      <section>
        <h2 className='h1'>Social Media</h2>
        <div className='mt-4 overflow-hidden rounded-md border'>
          <table className='w-full text-left text-sm'>
            <thead>
              <tr className='border-b dark:text-white'>
                <th scope='col' className='px-6 py-3'>
                  Social Media
                </th>
                <th scope='col' className='px-6 py-3'>
                  Profile URL
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Facebook', url: siteConfig.facebookUrl },
                { name: 'Instagram', url: siteConfig.instagramUrl },
                { name: 'Linked', url: siteConfig.linkedUrl },
                { name: 'Twitter', url: siteConfig.twitterUrl },
              ].map((i) => (
                <tr key={i.name} className='border-b'>
                  <th scope='row' className='px-6 py-3'>
                    {i.name}
                  </th>
                  <th scope='row' className='px-6 py-4'>
                    <PrimaryLink
                      href={i.url}
                      className='hover:text-primary text-primary font-semibold dark:text-sky-400'
                    >
                      {i.url}
                    </PrimaryLink>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
