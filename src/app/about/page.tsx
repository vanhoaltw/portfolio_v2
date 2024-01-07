import { Mail } from 'lucide-react';

import Experience from '@/components/about/Experience';
import Introduce from '@/components/about/Introduce';
import Container from '@/components/Container';
import UnderlineLink from '@/components/links/UnderlineLink';
import Tooltip from '@/components/Tooltip';

import { siteConfig } from '@/constant/config';

export const generateMetadata = () => {
  return { title: 'About' };
};

const TechItem = ({ name = '', percent = 0 }) => (
  <Tooltip tipChildren={`${percent}%`}>
    <div className='relative inline-block min-w-[50px] overflow-hidden rounded-md bg-neutral-200 text-xs dark:bg-neutral-800'>
      <p className='px-2 py-1 text-center font-bold'>{name}</p>
      <div
        className='bg-foreground/40 h-0.5'
        style={{ width: `${percent}%` }}
      />
    </div>
  </Tooltip>
);

export default function AboutPage() {
  return (
    <Container className='mt-10 space-y-20'>
      <Introduce />

      <section>
        <h2>Skill & Tools</h2>
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
        <h2>Experience</h2>

        <p className='mb-6'>
          I started working and attending school together in my third year of
          college (2021).
        </p>
        <Experience />
      </section>

      <section>
        <h2>Contact</h2>
        <div className='mt-4 overflow-hidden rounded-md border'>
          <table className='w-full text-left text-sm'>
            <thead>
              <tr className='border-b'>
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
                  <UnderlineLink
                    className='inline-flex items-center gap-1'
                    href='mailto:vanhoaltw@gmail.com'
                  >
                    <Mail size={16} />
                    vanhoaltw@gmail.com
                  </UnderlineLink>
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
        <h2>Social Media</h2>
        <div className='mt-4 overflow-hidden rounded-md border'>
          <table className='w-full text-left text-sm'>
            <thead>
              <tr className='border-b'>
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
                { name: 'Linked', url: siteConfig.linkedUrl },
                { name: 'Twitter', url: siteConfig.twitterUrl },
              ].map((i) => (
                <tr key={i.name} className='border-b'>
                  <th scope='row' className='px-6 py-3'>
                    {i.name}
                  </th>
                  <th scope='row' className='px-6 py-4'>
                    <UnderlineLink href={i.url}>{i.url}</UnderlineLink>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
}
