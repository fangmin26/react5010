import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import WrapTitle from "../basis/WrapTitle";

function Youtube() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="aboutCount">
          <div className="container">
            <WrapTitle text={["Youtube", "book"]} />
            <div className="youtube-cont">youtube</div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}
export default Youtube;
