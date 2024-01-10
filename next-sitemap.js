/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://hoanguyen.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
