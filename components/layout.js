import Navigation from "./navigation";
import React, { useEffect } from "react";
import Head from "./head";
import Footer from "./footer";

const Layout = (props) => {
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "UA-83806482-4", {
                page_location: window.location.href,
                page_path: window.location.pathname,
                page_title: window.document.title,
            });
        }
    });

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
