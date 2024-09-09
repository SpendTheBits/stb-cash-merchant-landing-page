import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Text } from "@styles/styledComponent";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg={12}>
            <Text>2024 © SpendTheBits Cash Merchant</Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
