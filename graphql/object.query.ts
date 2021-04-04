import gql from "graphql-tag";
import { DocumentNode } from "graphql";

const OBJECT_QUERY: DocumentNode = gql`
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
