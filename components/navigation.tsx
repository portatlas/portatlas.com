import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../scss/navigation.module.scss";

const Navigation = () => (
    <Navbar
        className={styles.navbar}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
    >
        <Container>
            <Link href="/">
                <Navbar.Brand className={styles.logo} href="/">
                    PORT/ATLAS
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle
                className={styles.navbarToggler}
                aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link className={styles.link} href="/applications">
                        APPS
                    </Nav.Link>
                    <Nav.Link className={styles.link} href="/lights">
                        LIGHTS
                    </Nav.Link>
                    <Nav.Link
                        className={styles.link}
                        href="https://shop.portatlas.com"
                    >
                        SHOP
                    </Nav.Link>
                    <Nav.Link className={styles.link} href="/contact">
                        CONTACT
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;
