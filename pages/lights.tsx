import React from "react";
import { Container } from "react-bootstrap";
import { initializeApollo } from "../client/apollo";
import OBJECT_QUERY from "../graphql/object.query";
import Layout from "../components/layout";
import styles from "../scss/portfolio.module.scss";
import IProduct from "../types/IProduct";
import Product from "../components/product";

interface ILightsProps {
    data: {
        objects: Array<IProduct>;
    };
}

const Lights = ({ data }: ILightsProps) => {
    const objects: Array<IProduct> = data.objects;

    return (
        <Layout title="OBJECT">
            <Container className={styles.portfolioContainer}>
                <div className={styles.section}>
                    {objects.map((product: IProduct) => (
                        <Product key={product.id} product={product} />
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
        revalidate: 1,
    };
}

export default Lights;
