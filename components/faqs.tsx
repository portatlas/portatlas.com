import { Container, Row, Col, Image } from "react-bootstrap";
import IFaq from "../types/IFaqs";

interface IFaqsProp {
    faqs: Array<IFaq>;
}

const Faqs = ({ faqs }: IFaqsProp) => {
    return (
        <Container className="faq-container">
            <h2>FAQS</h2>
            <hr />
            <Row>
                {faqs?.map((faq: IFaq) => (
                    <Col xs={12} sm={3} md={3} key={faq.id}>
                        <div>
                            <Image
                                className="faq-img"
                                fluid
                                alt={faq.id}
                                src={faq.image.url}
                            />
                            <p>
                                <b>{faq.question}</b>
                            </p>
                            <p>{faq.answer.markdown}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Faqs;
