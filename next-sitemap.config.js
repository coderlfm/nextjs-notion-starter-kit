/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://blog.liufengmao.cn',
  generateRobotsTxt: true,
  output: 'export', // Set static output here,
  // outDir: './public',
  generateIndexSitemap: false,
  exclude: ['/'],
  // sitemapSize: 7000,
  transform: async (config, path) => {
    console.log(path)
    return {
      loc: path + '.html', // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: 'monthly',
      priority: config.priority,
      // lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  }
}

module.exports = config
