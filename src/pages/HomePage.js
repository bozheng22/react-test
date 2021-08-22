import React from "react";
import image01 from "../images/frastrated_IT.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomePage = () => (
  <>
    <h1>Hi, I am Bo Zheng</h1>
    <p>I am an IT systems engineer in Melbourne.</p>
    <img src={image01} alt="" />
    <p></p>
    <p></p>
    <h3>Have a look at my projects</h3>
    <p></p>

    <Container>
      <Row>
        <Col sm>
          <Card bg="info" text="white" style={{ width: "18rem" }}>
            {/* <Card.Header>WebService</Card.Header> */}
            <Card.Img
              variant="top"
              src="https://www.clicdata.com/wp-content/uploads/2018/10/blog-api-webhooks-webservices-explained.png"
            />
            <Card.Body>
              <Card.Title>Web Service</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="/WebService">Detail</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card bg="info" text="white" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.parallels.com/blogs/ras/app/uploads/2019/09/community-cloud-sm.jpg"
            />

            <Card.Body>
              <Card.Title>Cloud Service</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="/CloudService">Detail</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card bg="info" text="white" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.channelfutures.com/files/2021/06/Cybersecurity-2-724x432.jpg"
            />

            <Card.Body>
              <Card.Title>CyberSceurity</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="/CyberSecurity">Detail</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);

export default HomePage;
