import React from "react";
import { Accordion } from "react-bootstrap";
import { PiRulerLight, PiEye, PiHeart } from "react-icons/pi";
import Box from "@/public/Box.svg";
import Description from "@/public/Description.svg";
import Image from "next/image";

function DetailsAccordion() {
  return (
    <Accordion
      className="custom-accordion px-0"
      alwaysOpen
    >
      {/* Details */}
      <Accordion.Item eventKey="0" className="bg-transparent border-0">
        <Accordion.Header className="custom-accordion-header">
          <div className="d-flex align-items-center fw-medium">
            <PiEye className="me-2" size={24} />
            Details
          </div>
        </Accordion.Header>
        <Accordion.Body className="text-light bg-transparent px-0">
          <ul className="mb-3">
            <li>
              Engineered for at-home practice to master skills that translate to
              the course
            </li>
            <li>
              Designed to fit spaces of any size, from living rooms and offices
              to studio apartments
            </li>
            <li>
              Durable, easy to store and set up, and immediately lays flat and
              is ready to use
            </li>
            <li>
              Uses premium materials like US-made nylon, natural rubber, and the
              same plastic as regulation golf cups
            </li>
            <li>Made in the USA</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      {/* Dimensions */}
      <Accordion.Item eventKey="1" className="bg-transparent border-0">
        <Accordion.Header className="custom-accordion-header">
          <div className="d-flex align-items-center fw-medium">
            <PiRulerLight className="me-2" size={24} />
            Dimensions
          </div>
        </Accordion.Header>
        <Accordion.Body className="text-light bg-transparent px-0">
          <ul className="mb-3">
            <li>Mat Size: 3 feet x 15 feet</li>
            <li>Mat Thickness: 1/2 inch</li>
            <li>Max. Putt Length: 14 feet</li>
            <li>Cup Size: Regulation (4.25 inches)</li>
            <li>Speed: (9-11 stimpmeter rating)</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      {/* What's Included */}
      <Accordion.Item eventKey="2" className="bg-transparent border-0">
        <Accordion.Header className="custom-accordion-header">
          <div className="d-flex align-items-center fw-medium">
            <Image
              src={Box}
              className="me-2"
              width={24}
              height={24}
              alt={""}
            />
            What&apos;s Included
          </div>
        </Accordion.Header>
        <Accordion.Body className="text-light bg-transparent px-0">
          <ul className="mb-4">
            <li>
              <strong>Tour-grade turf mat</strong> that gives the same feedback
              as a grass green.
            </li>
            <li>
              <strong>Innovative multi-make cups</strong> that hold up to 3
              putts in a row.
            </li>
            <li>
              <strong>Custom-engineered backstop</strong> that keeps missed
              putts out of the way.
            </li>
            <li>
              <strong>Alignment aids</strong> at three-foot intervals that let
              you dial in your distances.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      {/* Setup & Care */}
      <Accordion.Item eventKey="3" className="bg-transparent border-0">
        <Accordion.Header className="custom-accordion-header">
          <div className="d-flex align-items-center fw-medium">
            <PiHeart className="me-2" size={24} />
            Setup & Care
          </div>
        </Accordion.Header>
        <Accordion.Body className="text-light bg-transparent px-0 accordion-text">
          <p className="accordion-text">
            Start practice in less than a few minutes. Simply open the box,
            unroll the mat, position the backstop, set up your cups, and start
            putting.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Description */}
      <Accordion.Item eventKey="4" className="bg-transparent border-0">
        <Accordion.Header className="custom-accordion-header">
          <div className="d-flex align-items-center fw-medium">
            <Image
              src={Description}
              className="me-2"
              width={24}
              height={24}
              alt={"Description Icon"}
            />
            Description
          </div>
        </Accordion.Header>
        <Accordion.Body className="text-light bg-transparent px-0">
          <p className="accordion-text">
            Bar none, our PrimePutt putting mat is the premium indoor putting
            mat designed for golfers, by golfers. We know how important putting
            is to lowering your scores, so we set out to create the most
            realistic, high-quality putting mat on the market. In doing so, we
            dedicated months of research alongside turf-grass experts, material
            scientists, and PGA professionals to find the closest surface to a
            real grass putting green.
          </p>

          <p className="accordion-text">
            Our tour-grade nylon turf material guarantees the most realistic
            feedback of any other putting mat, which is why PGA tour pros and
            golf experts everywhere use it. Regardless of skill level, PrimePutt
            offers the perfect practice surface for golfers looking to lower
            their scores and build short-game confidence. And no matter what
            home or office space you have to dedicate to your practice time, our
            various sizes provide the flexibility to fit any area and practice
            any distance.
          </p>

          <p className="accordion-text">
            Even better, PrimePutt&apos;s proprietary cup design guarantees you&apos;ll
            never have a putt blocked by another ball. At the same time, these
            innovative cups perfectly replicate full-depth golf cups: the misses
            miss, and the makes go in. For setup, our specially-designed
            rubberized bottom and no-memory material mean the PrimePutt mat lays
            flat and doesn&apos;t move right out of the box every time. These same
            materials lend incredible durability to our putting mats, so you can
            use yours indoors or outdoors, putt with the kids, and let the dog
            walk over it—still rest assured that your PrimePutt indoor putting
            mat will last a lifetime.
          </p>

          <p className="accordion-text mb-4">
            All told, our mat is just what you need to start making more 5-8
            footers, stop three-putting from longer distances, and start
            lowering your score today.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default DetailsAccordion;
