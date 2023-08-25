import NextHead from "next/head";
import Script from "next/script";

interface IHeadProp {
    title: string;
    description: string;
}

const Head = ({ title, description }: IHeadProp) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>PORT/ATLAS | {title}</title>
            <meta name="description" content={description || ""} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
                key="viewport"
            />
            <meta property="og:title" content="PORT/ATLAS" />
            <meta
                property="og:description"
                content="A site to view the body of work by port/atlas"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://portatlas.com" />
            <meta
                property="og:image"
                content="https://portatlas.com/img/analog_sunset.png"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@portatlas" />
            <meta name="twitter:title" content="PORT/ATLAS" />
            <meta
                name="twitter:description"
                content="Body of work by PORT/ATLAS"
            />
            <meta
                name="twitter:image"
                content="https://portatlas.com/img/analog_sunset.png"
            />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
 
                 gtag('config', '403864955');
                `}
            </Script>
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://use.typekit.net/lpp5mat.css"
            ></link>
        </NextHead>
    );
};

export default Head;
