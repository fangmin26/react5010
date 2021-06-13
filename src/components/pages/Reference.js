import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import WrapTitle from "../basis/WrapTitle";

function Reference() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="aboutCont">
          <div className="container">
            <WrapTitle text={["Reference", "book"]} />
            <div className="refer-cont">reference</div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}
export default Reference;
