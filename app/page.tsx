"use client";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import Navigation from "@/components/Navigation";
import Jumbotron from "@/components/Jumbotron";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="bg-dark text-light min-vh-100">
      <Container>
        <Navigation />
        <Row>
          <Col lg={7} className="pe-lg-5 mb-4 mb-lg-0 h-100 sticky-lg-top">         
            <Jumbotron /> 
          </Col>
          <Col lg={5} className="d-lg-block">
            <ProductSection
              productName="Tour-Quality Indoor/Outdoor Golf Putting Green"
              productOptions={[
                {
                  optionName: "Compact",
                  optionSize: "9' x 1.5'",
                  optionHelper: "Single Hold",
                  optionPrice: "₱21,700.00 PHP",
                },
                {
                  optionName: "Standard",
                  optionSize: "9' x 3'",
                  optionHelper: "",
                  optionPrice: "₱28,800.00 PHP",
                },
                {
                  optionName: "XL",
                  optionSize: "12' x 3'",
                  optionHelper: "",
                  optionPrice: "₱32,300.00 PHP",
                },
                {
                  optionName: "XXL",
                  optionSize: "15' x 3'",
                  optionHelper: "",
                  optionPrice: "₱36,400.00 PHP",
                },
              ]}
              productDescriptionTitle="American Turf. Tour Tested."
              productDescription="Lower your score and increase consistency by practicing daily on a quality, tour-grade turf putting green for both indoors & outdoors. Our product offers a true roll with a 9-11 Stimpmeter reading and the most realistic experience you'll find anywhere outside a real course."
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
