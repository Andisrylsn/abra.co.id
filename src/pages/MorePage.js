import React, { Component } from "react";
import Header from "../parts/Header";
import FooterAbra from "../parts/FooterAbra";
import ContactUs from "../parts/ContactUs";
import OurClient from "../parts/OurPartners";
import OurTeam from "../parts/OurTeam";

import WhyChooseUs from "../parts/WhyChooseUs";

class ServicesPage extends Component {
  render() {
    return (
      <>
        <Header />
        <OurTeam />
        <WhyChooseUs/>
        <OurClient />
        <ContactUs />
        <FooterAbra />
      </>
    );
  }
}
export default ServicesPage;
