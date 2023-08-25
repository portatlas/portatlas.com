import Navigation from "./navigation";
import React from "react";
import Head from "./head";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <div>
            <Head title={props.title} description={props.description} />
            <Navigation />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
