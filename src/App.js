import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
const App = () => {
  return (
    <div className='App'>
<Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">React Bootstrap App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>

        <Container>
          <Row className="mt-4">
            <Col>
              <h1>Welcome to React Bootstrap App</h1>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    This is a sample card with some content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    Another sample card with different content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Yet another sample card with more content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default App