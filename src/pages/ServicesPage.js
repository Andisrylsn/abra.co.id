import React, { Component } from "react";
import Header from "../parts/Header";
import FooterAbra from "../parts/FooterAbra";
import OurServices from "../parts/OurServices";
import Portfolio from "../parts/Portfolio";
import ContactUs from "../parts/ContactUs";
import OurClient from "../parts/OurClient";

class ServicesPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Portfolio />
        <OurServices />
        <OurClient />
        <ContactUs />
        <FooterAbra />
      </>
    );
  }
}
export default ServicesPage;
