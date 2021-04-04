import gql from "graphql-tag";
import { DocumentNode } from "graphql";

const APPLICATION_QUERY: DocumentNode = gql`
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
                id
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
