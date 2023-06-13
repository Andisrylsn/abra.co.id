import React, { Component } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import AboutUs from "../parts/AboutUs";
import WhyChooseUs from "../parts/WhyChooseUs";
import FooterAbra from "../parts/FooterAbra";
import OurTeam from "../parts/OurTeam";

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
        <OurTeam />
        <WhyChooseUs />
        <FooterAbra />
      </>
    );
  }
}
export default LandingPage;
