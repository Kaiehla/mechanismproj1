"use client";
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Image1 from "@/public/Image1.webp";

function Jumbotron() {
  return (
    <section className="mt-5">
      <Row>
        <Col>
          <Card className="border-0 rounded-5 me-5">
            <Card.Img variant="top" src={Image1.src} className="rounded-5" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="fs-4 mt-4 mb-3 text-center">
            Perfect Your Putt Anytime, Anywhere
          </h2>
          <p className="mb-4 small text-center">
            Elevate your putting game with our innovative training aids.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default Jumbotron;
