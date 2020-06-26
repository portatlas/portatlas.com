import { Container, Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Layout from "../components/layout";
import Faqs from '../components/faqs';
import Loaders from '../components/loaders';
import ABOUT_QUERY from "../graphql/about.query";
import { initializeApollo } from "../client/apollo";

const Home = (props) => {
  const { loading, error, data } = props;
  if (loading) {
    return <Loaders />;
  }

  if (error) {
    return <h1>Error fetching data!</h1>;
  }

  const { about } = props.data;

  return (
    <Layout title="HOME">
      <Image className='cover-image' src={about.heroImage.url} />
      <Container>
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: ABOUT_QUERY
  })

  return {
    props: {
      data,
    },
    unstable_revalidate: 1,
  }
}

export default Home;
