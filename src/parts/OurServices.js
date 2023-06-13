import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const services = [
  {
    title: "Exclusive Agenda Books",
    description: "Customized agenda books for organizations",
  },
  {
    title: "Corporate Profiles",
    description: "Creating compelling company profiles for Organiztions",
  },
  {
    title: "Directories",
    description: "Designing and publishing directories for Organizations",
  },
  {
    title: "Event Calendars",
    description: "Developing event calendars for organizations",
  },
  {
    title: "Newspapers",
    description: "Producing high-quality newspapers for organizations needs",
  },
  {
    title: "Outdoor Media",
    description: "Creating impactful outdoor advertising materials",
  },
];

export default function OurServices() {
  return (
    <div>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
      <div class="section services-section" id="services">
        <div class="container">
          <Row>
            <Col>
              <Container className="ourvalues-abra">
                <h1>Our Services</h1>
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
                  <i class="fa fa-desktop"></i>
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
