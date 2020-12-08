import React from "react";
// import { Container } from "react-bootstrap";
import Header from "../Header/header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
