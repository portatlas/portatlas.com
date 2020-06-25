import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from "../client/apollo";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
