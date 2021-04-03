import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import OBJECT_QUERY from "../graphql/object.query";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Loaders from "../components/loaders";
import styles from "../scss/portfolio.module.scss";
import { initializeApollo } from "../client/apollo";

const Lights = (props) => {
    const { error, loading, data } = props;

    if (loading) {
        return <Loaders />;
    }

    if (error) return <h1>Error fetching objects!</h1>;

    const { objects } = data;

    return (
        <Layout title="OBJECT">
            <Container className={styles.portfolioContainer}>
                <div className={styles.section}>
                    {objects.map((obj, idx) => (
                        <div className={styles.item} key={obj.id}>
                            <Row className={styles.headline}>
                                <Col sm={3}>
                                    <h2>{obj.name}</h2>
                                </Col>
                                <Col
                                    xs={6}
                                    sm={2}
                                    md={3}
                                    className={styles.headlineTop}
                                >
                                    <h6>MATERIALS:</h6>
                                    {obj.medium.map((m, idx) => {
                                        return (
                                            <h6
                                                className={styles.multiInfo}
                                                key={`medium-${idx}`}
                                            >
                                                <b>{m}</b>
                                            </h6>
                                        );
                                    })}
                                </Col>
                                <Col
                                    xs={6}
                                    sm={2}
                                    md={2}
                                    className={styles.headlineTop}
                                >
                                    <h6>DIMENSIONS:</h6>
                                    {obj.dimensions.map((d, idx) => {
                                        return (
                                            <h6
                                                className={styles.multiInfo}
                                                key={`dimensions-${idx}`}
                                            >
                                                <b>{d}</b>
                                            </h6>
                                        );
                                    })}
                                </Col>
                                <Col xs={6} sm={3} md={3}>
                                    <h6>CREATOR:</h6>
                                    <h6>
                                        <b>{obj.designer}</b>
                                    </h6>
                                </Col>
                                <Col
                                    xs={6}
                                    sm={1}
                                    md={1}
                                    className="alignRightInfo"
                                >
                                    <h6>YEAR:</h6>
                                    <h6>
                                        <b>{obj.year}</b>
                                    </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={3}>
                                    <ReactMarkdown>
                                        {obj.description.markdown}
                                    </ReactMarkdown>
                                </Col>
                                <Col xs={12} sm={9}>
                                    <Image
                                        src={obj.heroImage.url}
                                        alt={obj.name}
                                        fluid
                                    />
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
        query: OBJECT_QUERY,
    });

    return {
        props: {
            data,
        },
        unstable_revalidate: 1,
    };
}

export default Lights;
