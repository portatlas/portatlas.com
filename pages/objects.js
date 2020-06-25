import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import Loaders from '../components/loaders';
import styles from '../scss/portfolio.module.scss';

const Objects = ({ data: { loading, error, objects } }) => {
  if (error) return <h1>Error fetching objects!</h1>;
  if (!loading) {
    return (
      <Layout>
        <Container className={styles.portfolioContainer}>
          <div className={styles.section}>
            {objects.map((obj, idx) => (
              <div className={styles.item} key={obj.id}>
                <Row className={styles.headline}>
                  <Col sm={3}>
                    <h2>{obj.name}</h2>
                  </Col>
                  <Col xs={6} sm={2} md={3} className={styles.headlineTop}>
                    <h6>MATERIALS:</h6>
                    {obj.medium.map((m) => {
                      return <h6 className={styles.multiInfo}><b>{m}</b></h6>
                    })}
                  </Col>
                  <Col xs={6} sm={2} md={2} className={styles.headlineTop}>
                    <h6>DIMENSIONS:</h6>
                    {obj.dimensions.map((d) => {
                      return <h6 className={styles.multiInfo}><b>{d}</b></h6>
                    })}
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <h6>CREATOR:</h6>
                    <h6><b>{obj.designer}</b></h6>
                  </Col>
                  <Col xs={6} sm={1} md={1} className="alignRightInfo">
                    <h6>YEAR:</h6>
                    <h6><b>{obj.year}</b></h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={3} >
                    <ReactMarkdown>{obj.description.markdown}</ReactMarkdown>
                  </Col>
                  <Col xs={12} sm={9}>
                    <Image src={obj.heroImage.url} fluid />
                  </Col>
                </Row>
                <hr className={styles.itemSep} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    );
  }

  return <Loaders />;
};

export const object = gql`
  query objects {
    objects {
      id
      name
      designer
      medium
      year
      dimensions
      description {
        markdown
      }
      heroImage {
        url
      }
    }
  }
`;

export default graphql(object)(Objects);
