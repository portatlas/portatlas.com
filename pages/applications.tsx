import { Container } from "react-bootstrap";
import styles from "../scss/portfolio.module.scss";
import { initializeApollo } from "../client/apollo";
import APPLICATION_QUERY from "../graphql/application.query";
import Layout from "../components/layout";
import IApp from "../types/IApp";
import Application from "../components/application";
interface IApplicationsProp {
    data: {
        applications: Array<IApp>;
    };
}

const Applications = ({ data }: IApplicationsProp) => {
    const applications: Array<IApp> = data?.applications;

    return (
        <Layout title="APPS">
            <Container className={styles.portfolioContainer}>
                <div className={styles.section}>
                    {applications.map((app: IApp) => (
                        <Application key={app.id} app={app} />
                    ))}
                </div>
            </Container>
        </Layout>
    );
};

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
        query: APPLICATION_QUERY,
    });

    return {
        props: {
            data,
        },
        revalidate: 1,
    };
}

export default Applications;
