import React from "react";
import { Jumbotron, Button, ButtonToolbar } from "react-bootstrap";
import Layout from "../../components/Layout/layout";
import Users from "../home/userDetails/userDetails";
import { PlusCircleIcon } from "@primer/octicons-react";
import AddModal from "../../components/Modal/modal";
// import EditModal from "../../components/editModal/editModal";
import "../../styles.css";

class Home extends React.Component {
  state = {
    addModalShow: false
  };
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <div>
        <Layout>
          <Jumbotron className="bar">
            <h1>User Directory</h1>
            <ButtonToolbar>
              <Button
                variant="primary"
                onClick={() => this.setState({ addModalShow: true })}
              >
                <PlusCircleIcon size={16} /> Add new User
              </Button>
              <AddModal show={this.state.addModalShow} onHide={addModalClose} />
            </ButtonToolbar>
          </Jumbotron>
          <Users />
        </Layout>
      </div>
    );
  }
}

export default Home;
