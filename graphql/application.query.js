import gql from "graphql-tag";

const APPLICATION_QUERY = gql`
  query applications {
    applications(orderBy: year_DESC) {
      id
      name
      description {
        markdown
      }
      video {
        url
      }
      year
      tech
      developer
      link {
        markdown
      }
      image {
        description {
          markdown
        }
        picture {
          url
        }
      }
    }
  }
`;

export default APPLICATION_QUERY;
