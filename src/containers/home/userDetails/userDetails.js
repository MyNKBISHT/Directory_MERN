import React from "react";
import {
  ButtonToolbar,
  Jumbotron,
  Table,
  Button,
  Accordion,
  Card
} from "react-bootstrap";

import {
  KebabHorizontalIcon,
  CreditCardIcon,
  TrashcanIcon
} from "@primer/octicons-react";
import "../../../styles.css";
import EditModal from "../../../components/editModal/editModal";

class userDetails extends React.Component {
  tableRef = React.createRef();
  state = {
    posts: [],
    editModalShow: false
  };

  componentDidMount = () => {
    this.getUserDetails();
  };

  getUserDetails = () => {
    fetch("https://1ud15.sse.codesandbox.io/dir")
      .then((response) => response.json())

      .then((response) => {
        this.setState({ posts: response.data });
      });
  };

  componentDidUpdate = () => {
    this.getUserDetails();
  };

  deleteUser = (id) => {
    console.log(id);
    fetch(`https://1ud15.sse.codesandbox.io/dir/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json"
      }
    });
  };

  render() {
    const { posts, _id, username, address, contact, email } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <div>
        <Jumbotron className="details">
          <Table style={{ background: "white" }}>
            <thead>
              <tr>
                <th>USER NAME</th>
                <th>ADDRESS</th>
                <th>CONTACT</th>
                <th>EMAIL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{post.username}</td>
                  <td>{post.address}</td>
                  <td>{post.contact}</td>
                  <td>{post.email}</td>
                  <td>
                    <Accordion defaultActiveKey="1">
                      <Accordion.Toggle
                        // style={{ borderStyle: "none" }}
                        as={Button}
                        variant="light"
                        eventKey="0"
                      >
                        <KebabHorizontalIcon size={16} />
                      </Accordion.Toggle>

                      <Accordion.Collapse s eventKey="0">
                        <Card.Body
                          style={{
                            marginTop: "10px",
                            borderStyle: "ridge",
                            borderRadius: "5px",
                            position: "absolute",
                            background: "white",
                            right: "180px"
                          }}
                        >
                          {" "}
                          <ButtonToolbar>
                            <a
                              href="#"
                              className="mr-2"
                              // variant="info"
                              onClick={() =>
                                this.setState({
                                  editModalShow: true,
                                  _id: post._id,
                                  username: post.username,
                                  address: post.address,
                                  contact: post.contact,
                                  email: post.email
                                })
                              }
                              style={{
                                color: "black",
                                textDecoration: "none",
                                display: "block",
                                margin: "0 0 10px 0"
                              }}
                            >
                              <CreditCardIcon size={16} /> Edit User Details
                            </a>
                          </ButtonToolbar>
                          <ButtonToolbar>
                            <a
                              href="#"
                              className="mr-2"
                              variant="danger"
                              onClick={() => this.deleteUser(post._id)}
                              style={{
                                color: "black",
                                textDecoration: "none",
                                display: "block"
                              }}
                            >
                              <TrashcanIcon size={16} />
                              Delete User
                            </a>
                          </ButtonToolbar>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>

                    <EditModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      id={this.state._id}
                      username={this.state.username}
                      address={this.state.address}
                      contact={this.state.contact}
                      email={this.state.email}
                    ></EditModal>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Jumbotron>
      </div>
    );
  }
}

export default userDetails;
