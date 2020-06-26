// Import built-in types for API routes
import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { createGzip } from 'zlib';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!res) return {};
  try {
    res.setHeader('content-type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');

    const smStream = new SitemapStream({
      hostname: 'https://portatlas.com',
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({ url: '/', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY });
    smStream.write({ url: '/resume', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY });
    smStream.write({ url: '/applications', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: '/objects', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: '/contact', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on('error', e => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
};