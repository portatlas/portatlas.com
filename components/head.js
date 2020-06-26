import NextHead from 'next/head';

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>PORT/ATLAS | {title}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-83806482-4"></script>
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://use.typekit.net/lpp5mat.css"></link>
  </NextHead>
);

export default Head;
