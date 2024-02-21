import { Mail } from 'lucide-react';

import Experience from '@/components/about/Experience';
import Introduce from '@/components/about/Introduce';
import MyStacks from '@/components/about/MyStacks';
import Container from '@/components/Container';
import UnderlineLink from '@/components/links/UnderlineLink';

import { siteConfig } from '@/constant/config';

export const generateMetadata = () => {
  return { title: 'About' };
};

export default function AboutPage() {
  return (
    <Container className='mt-10 space-y-20'>
      <Introduce />

      <section>
        <h2>Skill & Tools</h2>
        <p className='text-muted-foreground mb-6'>
          A list of every programming language, library, and tool I've used.
          I've tried some programming languages and tech stack, both Back-End,
          and Front-End. I also learn how to use some tools for packaging
          infrastructure and do so.
        </p>

        <MyStacks />
      </section>

      <section>
        <h2>Experience</h2>
        <p className='text-muted-foreground mb-6'>
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
