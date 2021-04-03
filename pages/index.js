import { Container, Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Faqs from "../components/faqs";
import Loaders from "../components/loaders";
import HOME_QUERY from "../graphql/home.query";
import { initializeApollo } from "../client/apollo";
import styles from "../scss/index.module.scss";

const Home = (props) => {
    const { loading, error, data } = props;
    if (loading) {
        return <Loaders />;
    }

    if (error) {
        return <h1>Error fetching data!</h1>;
    }

    const { sections, faqs } = data;
    const section = sections[0];
    return (
        <Layout title={section.title} description={section.description}>
            <Image
                className={styles.coverImage}
                src={section.heroImage.url}
                alt="hero image"
            />
            <Container>
                <div className={styles.section}>
                    <h1>ABOUT</h1>
                    <hr />
                    <ReactMarkdown>{section.intro.markdown}</ReactMarkdown>
                </div>

                <Faqs faqs={faqs} />
            </Container>
        </Layout>
    );
};

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
        query: HOME_QUERY,
    });

    return {
        props: {
            data,
        },
        unstable_revalidate: 1,
    };
}

export default Home;
