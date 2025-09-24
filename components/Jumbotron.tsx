"use client";
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Image1 from "@/public/Image1.webp";
import Image2 from "@/public/Image2.jpg";
import Image3 from "@/public/Image3.webp";
import Image4 from "@/public/Image4.webp";
import Image5 from "@/public/Image5.webp";
import NBCLogo from "@/public/NBC.svg";

function Jumbotron() {
  const [mainImage, setMainImage] = useState(Image1);

  return (
    <section className="mt-4 mt-lg-5">
      {/* Main Image */}
      <Row className="d-flex mb-0 mb-lg-5">
        <Col lg={12}>
          <Card className="border-0 rounded-5 me-0 mb-5 w-100 h-100">
            <Card.Img variant="top" src={mainImage.src} className="rounded-5 w-100 h-100" style={{ objectFit: "cover" }} />
          </Card>
        </Col>
      </Row>

      {/* Image Gallery */}
      <Row className="d-none d-lg-flex">
        <Col className="px-2">
          <Card
            className={` rounded-4 mb-5 ${
              mainImage === Image1 ? "border-primary" : "border-dark"
            }`}
            onClick={() => setMainImage(Image1)}
          >
            <Card.Img variant="top rounded-4" src={Image1.src} />
          </Card>
        </Col>
        <Col className="px-2">
          <Card
            className={` rounded-4 mb-5 ${
              mainImage === Image2 ? "border-primary" : "border-dark"
            }`}
            onClick={() => setMainImage(Image2)}
          >
            <Card.Img variant="top rounded-4" src={Image2.src} />
          </Card>
        </Col>
        <Col className="px-2">
          <Card
            className={` rounded-4 mb-5 ${
              mainImage === Image3 ? "border-primary" : "border-dark"
            }`}
            onClick={() => setMainImage(Image3)}
          >
            <Card.Img variant="top rounded-4" src={Image3.src} />
          </Card>
        </Col>
        <Col className="px-2">
          <Card
            className={` rounded-4 mb-5 ${
              mainImage === Image4 ? "border-primary" : "border-dark"
            }`}
            onClick={() => setMainImage(Image4)}
          >
            <Card.Img variant="top rounded-4" src={Image4.src} />
          </Card>
        </Col>
        <Col className="px-2">
          <Card
            className={` rounded-4 mb-5 ${
              mainImage === Image5 ? "border-primary" : "border-dark"
            }`}
            onClick={() => setMainImage(Image5)}
          >
            <Card.Img variant="top rounded-4" src={Image5.src} />
          </Card>
        </Col>
      </Row>

      {/* Testimonial */}
      <Row className="mb-5 d-none d-lg-flex">
        <Col lg={12} className="px-0">
          <Card
            className="border-0 rounded-5 px-3 py-2 d-flex align-items-center"
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
                  &ldquo;Feels as close to real grass as any artificial putting
                  turf I&apos;ve encountered, and the ball rolls true across
                  it&rdquo;
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
