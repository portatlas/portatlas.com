import gql from "graphql-tag";

const HOME_QUERY = gql`
    query homePage {
        sections(where: { title: "HOME PAGE" }) {
            id
            title
            description
            intro {
                markdown
            }
            heroImage {
                url
            }
        }
        faqs {
            id
            question
            answer {
                markdown
            }
            image {
                handle
                url
            }
        }
    }
`;

export default HOME_QUERY;
