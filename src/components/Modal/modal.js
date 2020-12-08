import React from "react";
import { Modal, Button, Row, Col, Form, Card } from "react-bootstrap";
// import {Redirect} from 'react-router-dom';


class AddModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    fetch(
      "https://1ud15.sse.codesandbox.io/dir/adduser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json"
        },
        body: JSON.stringify({
          username: e.target.username.value,
          address: e.target.address.value,
          contact: e.target.contact.value,
          email: e.target.email.value
        })
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

        },
        (error) => {
          alert("failed");
        }
      );
      
  };


  

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <h5>Add new User</h5>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Card
                  style={{ width: "12rem", height: "13rem", margin: "10px" }}
                >
                  <Card.Body>
                    <Card.Img
                      src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                      roundedCircle
                      width="100"
                      height="130"
                      style={{ borderRadius: "50rem" }}
                    ></Card.Img>
                    <Button className="mt-2" variant="light" size="sm" block>
                      <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        style={{ display: "none" }}
                      />
                      <label for="img">Upload</label>
                    </Button>
                  </Card.Body>
                </Card>

                <Col sm={8} style={{ margin: "20px" }}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="enter full name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicAddress">
                    <Form.Label className="mt-3">Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="address"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="mt-3">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      placeholder="enter full name"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6} className="mt-3">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="enter full name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Button
                  className="mt-4"
                  variant="primary"
                  size="lg"
                  type="submit"
                  block
                  
                >
                  Add new User
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddModal;
