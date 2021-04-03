import { Container } from "react-bootstrap";

import Layout from "../components/layout";
import Faqs from "../components/faqs";
import Loaders from "../components/loaders";
import HOME_QUERY from "../graphql/home.query";
import { initializeApollo } from "../client/apollo";
import Section from "../components/section";

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
            <Section section={section} />
            <Container>
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
