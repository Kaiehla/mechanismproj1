"use client";
import { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import LogoImage from "@/public/PrimePutt_Logo_White.avif";
import Search from "@/public/Search.svg";
import User from "@/public/User.svg";
import Basket from "@/public/Basket.svg";
import { CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import "@/styles/Navigation.scss";

function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <section>
      {/* Main Navbar */}
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        sticky="top"
        className="justify-content-between py-4"
      >
        {/* Hamburger Toggle for tablet and smaller */}
          <Navbar.Toggle 
            aria-controls="offcanvas-menu" 
            onClick={handleShowOffcanvas}
            className="d-lg-none"
            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}            
          />

        {/* Logo */}
        <Navbar.Brand href="#home">
          <Image src={LogoImage.src} alt="Logo" width={120} height={30} />
        </Navbar.Brand>
        
        {/* Links */}
        <Nav className="gap-4 d-none d-lg-flex">
          <Nav.Link href="#putting-mat" active className="nav-link-active">
            Putting Mat
          </Nav.Link>
          <Nav.Link href="#all-products" className="nav-link-default">
            All Products
          </Nav.Link>
          <Nav.Link href="#contactus" className="nav-link-default">
            Contact
          </Nav.Link>
        </Nav>

        {/* Icon Links */}
        <Nav className="d-flex flex-row gap-0 gap-md-1 gap-lg-2">
          <Nav.Link href="#search" className="px-0">
            <Image src={Search} alt="Search" width={44} height={44} className="nav-icon" />
          </Nav.Link>
          <Nav.Link href="#user" className="px-0 d-none d-md-block">
            <Image src={User} alt="User" width={44} height={44} className="nav-icon" />
          </Nav.Link>
          <Nav.Link href="#cart" className="px-0">
            <Image src={Basket} alt="Cart" width={44} height={44} className="nav-icon" />
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas 
        show={showOffcanvas} 
        onHide={handleCloseOffcanvas} 
        placement="start"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <Image src={LogoImage.src} alt="Logo" width={120} height={30} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3" data-bs-theme="dark">
            <Nav.Link href="#putting-mat" active className="nav-link-active" onClick={handleCloseOffcanvas}>
              Putting Mat
            </Nav.Link>
            <Nav.Link href="#all-products" className="nav-link-default" onClick={handleCloseOffcanvas}>
              All Products
            </Nav.Link>
            <Nav.Link href="#contactus" className="nav-link-default" onClick={handleCloseOffcanvas}>
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}

export default Navigation;
