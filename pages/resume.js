import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import ReactMarkdown from 'react-markdown';
import Loaders from '../components/loaders';
import styles from '../scss/resume.module.scss';

const Resume = ({ data: { loading, error, experiences, educations, skills } }) => {
  if (error) return <h1>Error fetching resume!</h1>;
  if (!loading) {
    return (
      <Layout title="RESUME">
        <Container className={styles.experiences} >
          <div className={styles.section}>
            <h2>EXPERIENCES</h2>
            <hr />
            {experiences.map(e => (
              <div className={styles.experience} key={e.id}>
                <Row>
                  <Col xs={12} sm={6} md={6}>
                    <h6>{e.company}</h6>
                  </Col>
                  <Col xs={12} sm={6} md={6} className="alignRightInfo">
                    <h6>{e.startDate} - {e.endDate}</h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6} md={6}>
                    <h6>{e.role}</h6>
                  </Col>
                  <Col xs={12} sm={6} md={6} className="alignRightInfo">
                    <h6>{e.location}</h6>
                  </Col>

                </Row>
                <Row>
                  <ReactMarkdown>{e.info.markdown}</ReactMarkdown>
                </Row>
              </div>
            ))}
          </div>
          <div className={styles.section}>
            <h2>EDUCATION</h2>
            <hr />
            {educations.map(e => (
              <div className={styles.degree} key={e.id}>
                <Row>
                  <Col xs={12} sm={6} md={6}>
                    <h6>Georgia Tech - {e.degree}</h6>
                  </Col>
                  <Col xs={12} sm={6} md={6} className="alignRightInfo">
                    <h6>{e.startDate} - {e.endDate}</h6>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
          <div className={styles.section}>
            <h2>SKILLS</h2>
            <hr />
            {skills.map(skill => (
              <div key={skill.id}>
                <Row className={styles.skillsContainer}>
                  <Col >
                    <h6 className={styles.skills}><b>{skill.type}: </b></h6>
                    <p className={styles.skills}>{skill.skill.join(", ")}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    );
  }

  return <Loaders />;
};

export const resume = gql`
  query experiences {
    experiences(orderBy: id_DESC) {
      id
      company
      role
      startDate
      endDate
      location
      info {
        markdown
      }
    }
    educations {
      id
      degree
      startDate
      endDate
    }
    skills {
      type
      skill
    }
  }
`;

export default graphql(resume)(Resume);