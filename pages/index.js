import Head from 'next/head';
import { Container, Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Layout from "../components/layout";
import Faqs from '../components/faqs';
import Loaders from '../components/loaders';
import ABOUT_QUERY from "../graphql/about.query";
import { useQuery } from '@apollo/react-hooks';

const Home = () => {
  const { data, loading, error } = useQuery(ABOUT_QUERY);

  if (loading) {
    return <Loaders />;
  }

  if (error) {
    return <h1>Error fetching data!</h1>;
  }

  const { about } = data;
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

export default Home;
