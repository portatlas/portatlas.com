import { Container } from "react-bootstrap";
import Layout from "../components/layout";
import Faqs from "../components/faqs";
import Loaders from "../components/loaders";
import HOME_QUERY from "../graphql/home.query";
import { initializeApollo } from "../client/apollo";
import Section from "../components/section";
import ISection from "../types/ISection";
import IFaq from "../types/IFaqs";

interface IHomeProps {
    loading: boolean;
    error: boolean;
    data: {
        sections: Array<ISection>;
        faqs: Array<IFaq>;
    };
}

const Home = ({ loading, error, data }) => {
    if (loading) {
        return <Loaders />;
    }

    if (error) {
        return <h1>Error fetching data!</h1>;
    }

    const { sections, faqs } = data;
    const section: ISection = sections[0];
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
