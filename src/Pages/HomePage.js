import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateTrackerForm from "../Components/CreateTrackerForm";
import FAQ from "../Components/FAQ";
import TrackerForm from "../Components/TrackerForm";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="p-4 text-center">Have I been Hacked?</h1>
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <CreateTrackerForm />
            </Col>
            <Col>
              <TrackerForm />
            </Col>
          </Row>
          <Row>
            <FAQ />
          </Row>
        </Container>
      </div>
    );
  }
}
