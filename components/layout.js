import Navigation from "./navigation";
import Head from "next/head";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
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
