import gql from "graphql-tag";

const OBJECT_QUERY = gql`
    query objects {
        objects {
            id
            name
            designer
            medium
            year
            dimensions
            description {
                markdown
            }
            heroImage {
                url
            }
        }
    }
`;

export default OBJECT_QUERY;
