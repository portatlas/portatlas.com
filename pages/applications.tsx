import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Loaders from "../components/loaders";
import styles from "../scss/portfolio.module.scss";
import { initializeApollo } from "../client/apollo";
import APPLICATION_QUERY from "../graphql/application.query";
import Layout from "../components/layout";
import IApp from "../types/IApp";
import IImage from "../types/IImage";

interface IApplicationsProp {
    error: boolean;
    loading: boolean;
    data: {
        applications: Array<IApp>;
    };
}

const Applications = ({ error, loading, data }: IApplicationsProp) => {
    if (loading) {
        return <Loaders />;
    }

    if (error) {
        return <h1>Error fetching applications!</h1>;
    }

    const applications: Array<IApp> = data?.applications;

    return (
        <Layout title="APPS">
            <Container className={styles.portfolioContainer}>
                <div className={styles.section}>
                    {applications.map((app: IApp) => (
                        <div className={styles.item} key={app.id}>
                            <Row className={styles.headline}>
                                <Col sm={3}>
                                    <h2>{app.name}</h2>
                                </Col>
                                <Col
                                    xs={6}
                                    sm={1}
                                    md={2}
                                    className={styles.headlineTop}
                                >
                                    <h6>LINK:</h6>
                                    <ReactMarkdown
                                        className={styles.headlineLink}
                                    >
                                        {app.link.markdown}
                                    </ReactMarkdown>
                                </Col>
                                <Col
                                    xs={6}
                                    sm={3}
                                    md={3}
                                    className={styles.headlineTop}
                                >
                                    <h6>DEVELOPERS:</h6>
                                    {app.developer.map((dev: string) => {
                                        return (
                                            <h6
                                                className={styles.multiInfo}
                                                key={dev}
                                            >
                                                <b>{dev}</b>
                                            </h6>
                                        );
                                    })}
                                </Col>
                                <Col xs={6} sm={3} md={3}>
                                    <h6>TECH:</h6>
                                    {app.tech.map((t, idx) => {
                                        return (
                                            <h6
                                                className={styles.multiInfo}
                                                key={idx}
                                            >
                                                {" "}
                                                <b>{t}</b>
                                            </h6>
                                        );
                                    })}
                                </Col>
                                <Col
                                    xs={6}
                                    sm={1}
                                    md={1}
                                    className="alignRightInfo"
                                >
                                    <h6>YEAR:</h6>
                                    <h6>
                                        <b>{app.year}</b>
                                    </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={3}>
                                    <ReactMarkdown>
                                        {app.description.markdown}
                                    </ReactMarkdown>
                                </Col>
                                <Col xs={12} sm={9} lg={9} xl={9}>
                                    {app.video && (
                                        <div className={styles.videoWrapper}>
                                            <iframe
                                                className={styles.video}
                                                title="vid"
                                                src={app.video.url}
                                                frameBorder="0"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    )}
                                    {!app.video && (
                                        <Carousel interval={null}>
                                            {app.image.map((img: IImage) => {
                                                return (
                                                    <Carousel.Item key={img.id}>
                                                        <Carousel.Caption
                                                            className={
                                                                styles.caption
                                                            }
                                                        >
                                                            <p>
                                                                {img.description
                                                                    ? img
                                                                          .description
                                                                          .markdown
                                                                    : null}
                                                            </p>
                                                        </Carousel.Caption>
                                                        <Image
                                                            className={
                                                                styles.image
                                                            }
                                                            alt={app.name}
                                                            src={
                                                                img.picture.url
                                                            }
                                                            fluid
                                                        />
                                                    </Carousel.Item>
                                                );
                                            })}
                                        </Carousel>
                                    )}
                                </Col>
                            </Row>
                            <hr className={styles.itemSep} />
                        </div>
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
        unstable_revalidate: 1,
    };
}

export default Applications;
