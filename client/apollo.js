import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const GRAPHCMS_API = 'https://api-us-west-2.graphcms.com/v2/ckb1fvd8g0dsd01yy774wc62o/master';

const link = createHttpLink({
  fetch,
  uri: GRAPHCMS_API
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache()
        .restore(initialState || {})
    })
);
