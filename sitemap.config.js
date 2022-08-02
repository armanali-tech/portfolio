/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://arman.to",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
};

module.export = config;
