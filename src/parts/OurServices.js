import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const services = [
  {
    title: "Advertising",
    description: "Customized and give advertising materials for organizations",
  },
  {
    title: "Corporate Profiles",
    description: "Creating compelling company profiles for Organiztions",
  },
  {
    title: "Publishing",
    description: "Designing and publishing directories for Organizations",
  },
  {
    title: "Event Organizing",
    description: "Developing and organize event calendars for organizations",
  },
  {
    title: "Printing",
    description: "Producing high-quality printing for organizations needs",
  },
];

export default function OurServices() {
  return (
    <div id="services">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
      <div class="section services-section" id="services">
        <div class="container">
          <Row>
            <Col>
              <Container className="ourvalues-abra">
                <h1>OUR SERVICES</h1>
                <h6>Media and advertising company that helps you enlarge the business</h6>
              </Container>
            </Col>
          </Row>
        </div>
        <div class="row">
          {services.map((service, index) => (
            <div class="col-sm-6 col-lg-4" key={index}>
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa-twitter-square"></i>
                </div>
                <div class="feature-content">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
