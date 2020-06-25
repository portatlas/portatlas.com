import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Loaders from '../components/loaders';

const Faqs = ({ data: { loading, error, faqs } }) => {
  if (error) return <h1>Error fetching faqs!</h1>;
  if (!loading) {
    return (
      <Container className="faq-container" >
        <h2>FAQS</h2>
        <hr />
        <Row>
          {faqs.map(faq => (
            <Col xs={12} sm={3} md={3} key={faq.id}>
              <div>
                <Image
                  className="faq-img"
                  fluid
                  alt={faq.id}
                  src={faq.image.url}
                />
                <p><b>{faq.question}</b></p>
                <p>{faq.answer.markdown}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return <Loaders />;
};

export const faq = gql`
  query faqs {
    faqs {
      id
      question
      answer {
        markdown
      }
      image {
        handle
        url
      }
    }
  }
`;

export default graphql(faq)(Faqs);
