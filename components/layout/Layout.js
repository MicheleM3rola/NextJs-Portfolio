import React from "react";
import layoutStyle from "../../styles/Layout.module.css";
import Footer from "../Footer";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={layoutStyle.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
