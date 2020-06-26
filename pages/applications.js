import Layout from "../components/layout";
import APPLICATION_QUERY from '../graphql/application.query';
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Loaders from "../components/loaders"
import styles from "../scss/portfolio.module.scss";
import { initializeApollo } from "../client/apollo";

const Applications = (props) => {
  const { error, loading, data } = props;

  if (loading) {
    return <Loaders />;
  }

  if (error) return <h1>Error fetching applications!</h1>;

  const { applications } = data;

  return (
    <Layout title="APPS">
      <Container className={styles.portfolioContainer}>
        <div className={styles.section}>
          {applications.map((obj, idx) => (
            <div className={styles.item} key={obj.id}>
              <Row className={styles.headline}>
                <Col sm={3}>
                  <h2>{obj.name}</h2>
                </Col>
                <Col xs={6} sm={1} md={2} className={styles.headlineTop}>
                  <h6>LINK:</h6>
                  <ReactMarkdown className={styles.headlineLink}>{obj.link.markdown}</ReactMarkdown>
                </Col>
                <Col xs={6} sm={3} md={3} className={styles.headlineTop}>
                  <h6>DEVELOPERS:</h6>
                  {obj.developer.map((d, idx) => {
                    return <h6 className={styles.multiInfo} key={idx}><b>{d}</b></h6>
                  })
                  }
                </Col>
                <Col xs={6} sm={3} md={3}>
                  <h6>TECH:</h6>
                  {obj.tech.map((t, idx) => {
                    return <h6 className={styles.multiInfo} key={idx}> <b>{t}</b></h6>
                  })}
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
                  {obj.video &&
                    <div className={styles.videoWrapper}>
                      <iframe className={styles.video} title="vid" src={obj.video.url} frameBorder="0" allowFullScreen></iframe>
                    </div>
                  }
                  {!obj.video &&
                    <Carousel interval={null}>
                      {obj.image.map((img, idx) => {
                        return (<Carousel.Item key={idx}>
                          < Carousel.Caption className={styles.caption} >
                            <p>{img.description ? img.description.markdown : null}</p>
                          </Carousel.Caption>
                          <Image alt={obj.name} src={img.picture.url} fluid />
                        </Carousel.Item>)
                      })}
                    </Carousel>
                  }
                </Col>
              </Row>
              <hr className={styles.itemSep} />
            </div>
          ))}
        </div>
      </Container >
    </Layout >
  )
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: APPLICATION_QUERY
  })

  return {
    props: {
      data,
    },
    unstable_revalidate: 1,
  }
}

export default Applications;
