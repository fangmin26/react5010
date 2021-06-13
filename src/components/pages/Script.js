import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import WrapTitle from "../basis/WrapTitle";

function Script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="aboutCont">
          <div className="container">
            <WrapTitle text={["Script", "book"]} />
            <div className="script-cont">Script</div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}
export default Script;
