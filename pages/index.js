import Head from 'next/head';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Container, Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Layout from "../components/layout";
import Faqs from '../components/faqs';
import Loaders from '../components/loaders';


const Home = ({ data: { loading, error, about } }) => {
  if (error) return <h1>Error fetching data!</h1>;
  if (!loading) {
    return (
      <Layout>
        <Image className='cover-image' src={about.heroImage.url} />
        <Container className="">
          <div className="section">
            <h1>ABOUT</h1>
            <hr />
            <ReactMarkdown>{about.intro.markdown}</ReactMarkdown>
            <Image src={about.map.url} fluid />
            <ReactMarkdown>{about.mapDesc.markdown}</ReactMarkdown>
          </div>

          <Faqs />
        </Container>
      </Layout>
    );
  }

  return <Loaders />;
}

export const about = gql`
  query about {
    about(where: {id: "ckb1wd8go0tw60178cel093tp"}) {
      id
      intro {
        markdown
      }
      heroImage {
        url
      }
      map {
        url
      }
      mapDesc {
        markdown
        html
      }
    }
  }
`;

export default graphql(about)(Home);