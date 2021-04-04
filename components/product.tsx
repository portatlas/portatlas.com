import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import styles from "../scss/portfolio.module.scss";
import IProduct from "../types/IProduct";

interface IProductProps {
    product: IProduct;
}

const Product = ({ product }: IProductProps) => {
    return (
        <div className={styles.item} key={product.id}>
            <Row className={styles.headline}>
                <Col sm={3}>
                    <h2>{product.name}</h2>
                </Col>
                <Col xs={6} sm={2} md={3} className={styles.headlineTop}>
                    <h6>MATERIALS:</h6>
                    {product.medium.map((m: string) => {
                        return (
                            <h6
                                className={styles.multiInfo}
                                key={`medium-${m}`}
                            >
                                <b>{m}</b>
                            </h6>
                        );
                    })}
                </Col>
                <Col xs={6} sm={2} md={2} className={styles.headlineTop}>
                    <h6>DIMENSIONS:</h6>
                    {product.dimensions.map((dimension: string) => {
                        return (
                            <h6
                                className={styles.multiInfo}
                                key={`dimensions-${dimension}`}
                            >
                                <b>{dimension}</b>
                            </h6>
                        );
                    })}
                </Col>
                <Col xs={6} sm={3} md={3}>
                    <h6>CREATOR:</h6>
                    <h6>
                        <b>{product.designer}</b>
                    </h6>
                </Col>
                <Col xs={6} sm={1} md={1} className="alignRightInfo">
                    <h6>YEAR:</h6>
                    <h6>
                        <b>{product.year}</b>
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={3}>
                    <ReactMarkdown>
                        {product.description.markdown}
                    </ReactMarkdown>
                </Col>
                <Col xs={12} sm={9}>
                    <Image
                        src={product.heroImage.url}
                        alt={product.name}
                        fluid
                    />
                </Col>
            </Row>
            <hr className={styles.itemSep} />
        </div>
    );
};

export default Product;
