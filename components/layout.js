import Navigation from "./navigation";
import { useEffect } from "react";
import Head from "next/head";
import Footer from "./footer";

const Layout = (props) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'UA-83806482-4', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      })
    }
  })


  return (
    <div>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-83806482-4"></script>
        <title>port/atlas</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/lpp5mat.css"></link>
      </Head>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
};

export default Layout;
