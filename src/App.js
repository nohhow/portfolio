import React from "react";
import "./App.css";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import gitLogo from "./images/github-icon.png";
import blogLogo from "./images/blog-icon.png";
import Projects from "./components/Projects";
import Scroll from "./components/Scroll";
import ProfileImage from "./images/about-me-img/profile-img.png"


const App = () => {

  return (
    <div>
      <Scroll/>
      <nav>
        <Navbar expand="lg" bg="dark" variant="dark" className="py-3 fixed-top">
          <Navbar.Brand>
            <a href="https://nohhow.github.io/portfolio" className="nav-brand">
              노진현의 포트폴리오
            </a>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
      <section id="intro">
        <h1>새로움을 갈망하고</h1>
        <h1>변화가 두렵지 않은</h1>
        <h1 className="mt-5">
          <strong>개발자</strong>
        </h1>
        <h2 className="mt-5">노진현 입니다.</h2>
        <hr className="section-divider" />
      </section>

      <section id="about-me">
        <Fade bottom>
          <h1 className="section-title">ABOUT ME</h1>
          <Container>
              <img className="profile-img" src={ProfileImage}/>
            <Row>
               <Col sm={4} className="about-me-col align-items-center"><h4 className="half-highlight">이름</h4><span>노진현</span></Col>
               <Col sm={4} className="about-me-col align-items-center"><h4 className="half-highlight">생년월일</h4><span>1997.04.03</span></Col>
               <Col sm={4} className="about-me-col align-items-center"><h4 className="half-highlight">연락처</h4><span>010-4466-6129</span></Col>
               <Col sm={4} className="about-me-col align-items-center"><h4 className="half-highlight">이메일</h4><span>jinhyeon.noh@gmail.com</span></Col>
               <Col sm={4} className="about-me-col align-items-center"><h4 className="half-highlight">주소지</h4><span>충청북도 충주시</span></Col>
               <Col sm={4} className="about-me-col align-items-center"><h4 className="half-highlight">학력</h4><span>한남대학교 컴퓨터통신무인기술학과<br/>(컴퓨터공학 전공 & 교직 이수)</span></Col>
            </Row>
          </Container>
        </Fade>
      </section>

      <section id="skills">
        <Fade>
          <h1 className="section-title">SKILLS</h1>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <p>넥슨 폰트 체크합니다.</p>
          <Button>버튼</Button>
        </Fade>
      </section>

      <section id="projects">
        <Fade top>
          <h1 className="section-title">PROJECTS</h1>
          <Projects />
        </Fade>
      </section>

      <footer id="footer" className="bg-dark">
        <Container fluid>
          <Button
            className="footer-btn"
            onClick={() => (window.location.href = "https://github.com/nohhow")}
          >
            <img className="footer-icon" src={gitLogo} alt="Github" />
          </Button>
          <Button
            className="footer-btn"
            onClick={() => (window.location.href = "https://nohhow.github.io")}
          >
            <img className="footer-icon" src={blogLogo} alt="Blog" />
          </Button>
          <div className="text-white mt-2">
            © 2022. Jinhyeon Noh. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;
