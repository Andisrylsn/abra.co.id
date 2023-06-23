import React, { Component } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import AboutUs from "../parts/AboutUs";
import FooterAbra from "../parts/FooterAbra";
import Portfolio from "../parts/Portfolio";
import OurServices from "../parts/OurServices";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header></Header>
        <Hero />
        <AboutUs />
        <OurServices />
        <Portfolio />
        <FooterAbra />
      </>
    );
  }
}
export default LandingPage;
