import { Container } from "react-bootstrap";
import Layout from "../components/layout";
import Faqs from "../components/faqs";
import HOME_QUERY from "../graphql/home.query";
import { initializeApollo } from "../client/apollo";
import Section from "../components/section";
import ISection from "../types/ISection";
import IFaq from "../types/IFaqs";

interface IHomeProps {
    data: {
        sections: Array<ISection>;
        faqs: Array<IFaq>;
    };
}

const Home = ({ data }: IHomeProps) => {
    const faqs: Array<IFaq> = data?.faqs;
    const homeSection: ISection = data?.sections[0];
    return (
        <Layout title={homeSection.title} description={homeSection.description}>
            <Section section={homeSection} />
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
        revalidate: 1,
    };
}

export default Home;
