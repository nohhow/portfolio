import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

import Scroll from "./components/Scroll";
import MainPage from "./pages/MainPage";
import ClonePage from "./pages/ClonePage";
import CloneDetailPage from "./pages/CloneDetailPage";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Scroll />
        <nav>
          <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            className="py-3 fixed-top"
          >
            <Navbar.Brand>
              <Link className="navbar-dark navbar-nav nav-brand" to="/portfolio">
                노진현의 포트폴리오
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-collapse-id" />
            <Navbar.Collapse id="navbar-collapse-id">
              <Nav as="ul" activeKey="/link" className="ms-auto">
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-event-key" href="#about-me">
                    About me
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-event-key" href="#skills">
                    Skills
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-event-key" href="#projects">
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    className="navbar-dark navbar-nav nav-link"
                    to="portfolio/practices"
                  >
                    Practices
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
        <Routes>
          <Route path="/portfolio" element={<MainPage />} />
          <Route path="/portfolio/practices" element={<ClonePage />} />
          <Route path="/portfolio/practices/:id" element={<CloneDetailPage />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
