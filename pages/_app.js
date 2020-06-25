import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

const GRAPHCMS_API = 'https://api-us-west-2.graphcms.com/v2/ckb1fvd8g0dsd01yy774wc62o/master';

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
});


const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
};

export default App;