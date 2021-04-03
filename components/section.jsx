import { Container, Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import styles from "../scss/section.module.scss";

const Section = ({ section }) => (
    <>
        <Image
            className={styles.coverImage}
            src={section.heroImage.url}
            alt="hero image"
        />
        <Container>
            <div className={styles.section}>
                <h1>{section.title}</h1>
                <hr />
                <ReactMarkdown>{section.intro.markdown}</ReactMarkdown>
            </div>
        </Container>
    </>
);

export default Section;
