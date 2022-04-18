import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: '',
      username: '',
      youtubeVideo: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/create', req)
      .then(res => res.json())
      .then(result => {
        // console.log(result);
      });
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Final P</Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Form onSubmit={this.handleSubmit}>
           <Row className="justify-content-center mt-5">
             <Col xs="12" lg="4">
                <Form.Label className="font-label">Room Name</Form.Label>
                <Form.Control onChange={this.handleInputChange} value={this.state.roomName} name="roomName" className="mb-4" type="text" required />
              </Col>
              <Col xs="12" lg="4">
                <Form.Label className="font-label">Username</Form.Label>
                <Form.Control onChange={this.handleInputChange} value={this.state.username} name="username" className="mb-4" type="text" required />
             </Col>
              <Col xs="12" lg="4">
                <Form.Label className="font-label">Insert Youtube Video</Form.Label>
                <Form.Control onChange={this.handleInputChange} value={this.state.youtubeVideo} name="youtubeVideo" className="mb-4" type="text" required />
              </Col>
            </Row>
           <Button className="float-end mt-2" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
