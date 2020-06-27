import gql from 'graphql-tag';

const ABOUT_QUERY = gql`
  query about {
    about(where: {id: "ckb1wd8go0tw60178cel093tp"}) {
      id
      title
      description
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

export default ABOUT_QUERY;
