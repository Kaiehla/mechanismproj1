import { useState } from "react";
import DetailsAccordion from "./DetailsAccordion";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import ShopPayLogo from "@/public/ShopPayLogoWhite.png";
import USFlag from "@/public/United-states_flag_icon_round.svg";
import FRating from "@/public/FRating.svg";
import Ship from "@/public/Ship.svg";

interface ProductOption {
  optionName: string;
  optionSize: string;
  optionHelper?: string;
  optionPrice: string;
}

interface ProductSectionProps {
  productName: string;
  productOptions: ProductOption[];
  productDescriptionTitle: string;
  productDescription: string;
}

function ProductSection(props: ProductSectionProps) {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <Row className="px-3 mt-5 mb-5">
      {/* Review Section */}
      <Col className="px-0 d-flex flex-column">
        {/* Product Name */}
        <h1 className="fs-3 mb-3 px-0 order-md-1 order-lg-2 mb-md-3 mb-lg-5">
          {props.productName}
        </h1>

        {/* Review Section */}
        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 order-md-2 order-lg-1">
          <div className="d-flex gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-primary" size={13} />
            ))}
          </div>
          <div className="mb-0 small text-nowrap">
            238+ Reviews by PGA Pros, Coaches & Players
          </div>
        </div>
      </Col>

      {/* Product Options & Price */}
      <p className="fs-2 px-0">
        {props.productOptions[selectedOption]?.optionPrice}
      </p>
      <hr />
      <Row className="mb-4 mb-lg-5 g-0 p-0 mt-2">
        <p className="fs-7 mb-2">Available size options:</p>
        {props.productOptions.map((option: ProductOption, index: number) => (
          <Col xs={3} md={6} lg={3} key={index} className="d-flex mb-2">
            <Card
              className={`text-center justify-content-between text-light align-items-center py-3 bg-dark-secondary w-100 ${
                selectedOption === index ? "border-primary bg-dark" : ""
              } ${
                index === props.productOptions.length - 1
                  ? "me-0"
                  : index === 1 || index === 3
                  ? "me-2 me-md-0 me-lg-2"
                  : "me-2"
              }`}
              onClick={() => setSelectedOption(index)}
              style={{ cursor: "pointer" }}
            >
              <p className="mb-1 fw-bold fs-7">{option.optionName}</p>
              <p className="mb-0 small fs-8 text-secondary">
                {option.optionHelper && `${option.optionHelper}`}
              </p>
              <p className="mb-0 small fw-semibold">{option.optionSize} </p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Button Section */}
      <div className="d-grid gap-2 p-0 mb-5">
        <Button
          variant="primary"
          onClick={() => console.log("Primary")}
          className="w-100 fw-bold text-uppercase py-3 rounded-1"
          style={{ letterSpacing: "2px" }}
        >
          Add to Cart
        </Button>
        <Button
          variant="info"
          onClick={() => console.log("Secondary")}
          className="w-100 mb-2 py-3 rounded-0"
        >
          <span className="me-1">Buy with</span>
          <Image src={ShopPayLogo} alt="Shop Pay Logo" width={85} height={20} />
        </Button>
        <a
          href="#"
          className="link-default fs-7 text-light d-flex justify-content-center"
        >
          More payment options
        </a>
      </div>

      {/* Features */}
      <Row className="px-0 mb-3">
        <Col
          lg={4}
          md={6}
          xs={4}
          className="d-flex align-items-center justify-content-center text-center"
        >
          <Image
            src={USFlag}
            alt="US Flag"
            width={24}
            height={24}
            className="me-2"
          />
          <p className="mb-0 features-text">Made in the USA</p>
        </Col>
        <Col
          lg={4}
          md={6}
          xs={4}
          className="d-flex align-items-center border-start border-end border-md-start-0 border-md-end-0 border-lg-start border-lg-end justify-content-center ps-3 ps-lg-4"  
        >
          <Image
            src={FRating}
            alt="FRating"
            width={24}
            height={24}
            className="me-2"
          />
          <p className="mb-0 features-text">Stimpmeter Rating: 9-11</p>
        </Col>
        <Col
          lg={4}
          md={12}
          xs={4}
          className="d-flex align-items-center justify-content-center mt-0 mt-md-3 mt-lg-0 ps-3 ps-lg-4"
        >
          <Image
            src={Ship}
            alt="Ship"
            width={24}
            height={24}
            className="me-2"
          />
          <p className="mb-0 features-text">Free shipping Continental US</p>
        </Col>
      </Row>

      {/* Product Description */}
      <Row className="px-0 mb-4">
        <Col>
          <h2 className="fs-4 mt-4 mb-4 text-center">
            {props.productDescriptionTitle}
          </h2>
          <p className="mb-4">{props.productDescription}</p>
        </Col>
      </Row>

      <DetailsAccordion />
    </Row>
  );
}

export default ProductSection;
