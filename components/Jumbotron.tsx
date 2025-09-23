"use client";
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Image1 from "@/public/Image1.webp";
import NBCLogo from "@/public/NBC.svg";

function Jumbotron() {
  return (
    <section className="mt-5">
      <Row>
        <Col>
          <Card className="border-0 rounded-5 me-5 mb-5">
            <Card.Img variant="top" src={Image1.src} className="rounded-5" />
          </Card>
        </Col>
      </Row>

      <Row className="me-5">
        <Col>
          <Card className="border-0  mb-5">
            <Card.Img variant="top" src={Image1.src} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0  mb-5">
            <Card.Img variant="top" src={Image1.src} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0  mb-5">
            <Card.Img variant="top" src={Image1.src} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0  mb-5">
            <Card.Img variant="top" src={Image1.src} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0 mb-5">
            <Card.Img variant="top" src={Image1.src} />
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card
            className="border-0 rounded-5 me-5 px-3 py-2 d-flex align-items-center"
            style={{ backgroundColor: "rgb(16,17,18)" }}
          >
            <Card.Body className="d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-4">
              <div>
                <Image
                  src={NBCLogo}
                  width={100}
                  style={{ objectFit: "contain" }}
                  alt="NBC Logo"
                />
              </div>
              <div>
                <p className="text-primary fs-7 mb-2">
                  Top 10 Best Golf Equipment and Accessories
                </p>
                <h1 className="fs-6 text-light mb-2 lh-base fw-bold">
                  "Feels as close to real grass as any artificial putting turf
                  I've encountered, and the ball rolls true across it"
                </h1>
                <p className="fs-7 text-light fw-bold mb-0">NBC GolfPass </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Jumbotron;
