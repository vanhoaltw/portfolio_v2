const isProd = process.env.NODE_ENV === 'production';

export const siteConfig = {
  title: 'Hoà Nguyễn',
  description:
    "I'm front-end engineer, i love build beautiful apps and websites for overall user in the world. My best favorite programming language is javascript, and framework reacjs.",
  url: isProd ? 'https://hoanguyen.dev' : 'http://localhost:3000',
  author: 'Hoà Nguyễn',
  authorUrl: 'https://github.com/',
  linkedUrl: 'https://www.linkedin.com/in/vanhoaltw',
  instagramUrl: 'https://www.instagram.com/aristino.0.1',
  gmail: 'vanhoatlw@gmail.com',
  githubUrl: 'https://github.com/vanhoaltw',
};
