import React from "react";
import "./App.css";
import { Button, Navbar, Nav, Container, Card, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import gitLogo from "./images/github-icon.png";
import blogLogo from "./images/blog-icon.png";


const App = () => {
  return (
    <div>
      <nav>
        <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
          <Navbar.Brand>
            <a href="" className="nav-brand">
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
      <article id="intro">
        <Fade bottom>
          <h1>새로움을 갈망하고<br/> 변화가 두렵지 않은 <strong>개발자</strong> </h1>
          <h2 className="mt-5">노진현 입니다.</h2>
          <hr className="article-divider"/>
        </Fade>
      </article>

      <article id="about-me">
        <Fade bottom>
          <h1 className="article-title">ABOUT ME</h1>
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
      </article>
      <article id="skills">
        <Fade bottom>
          <h1 className="article-title">SKILLS</h1>
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
      </article>
      <article id="projects">
        <Fade bottom>
          <h1 className="article-title">PROJECTS</h1>
          <Container className="card-container">
            <Row>
              <Col lg={6} md={6} className="my-3">
                <Card>
                  <div className="card-img-container">
                    <Card.Img variant="top" src="https://placeimg.com/300/120/any"/>
                  </div>
                  <Card.Body>
                    <a
                      className="card-link stretched-link" 
                      href="https://www.naver.com">
                      <h3>비즈니스 자동화 관리 웹</h3>
                      <hr/>
                      <span>스티커/라벨 생산업체 비즈니스 자동화 관리 도구</span>
                      <hr/>
                      <div className="tech-stacks">
                        <span className="tech-stack">HTML</span>
                        <span className="tech-stack">CSS</span>
                        <span className="tech-stack">JavaScript</span>
                        <span className="tech-stack">Bootstrap</span>
                        <span className="tech-stack">WEM</span>
                      </div>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} md={6} className="my-3">
                <Card>
                  <div className="card-img-container">
                    <Card.Img variant="top" src="https://placeimg.com/300/120/any"/>
                  </div>
                  <Card.Body>
                    <a
                      className="card-link stretched-link" 
                      href="https://www.naver.com">
                      <h3>AI 사상체질 진단</h3>
                      <hr/>
                      <span>AI 사상체질 진단 모바일 웹 & 안드로이드 앱</span>
                      <hr/>
                      <div className="tech-stacks">
                        <span className="tech-stack">HTML</span>
                        <span className="tech-stack">CSS</span>
                        <span className="tech-stack">JavaScript</span>
                        <span className="tech-stack">Bootstrap</span>
                        <span className="tech-stack">WEM</span>
                        <span className="tech-stack">Java</span>
                        <span className="tech-stack">AndroidStudio</span>
                      </div>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} md={6} className="my-3">
                <Card>
                  <div className="card-img-container">
                    <Card.Img variant="top" src="https://placeimg.com/300/120/any"/>
                  </div>                  
                  <Card.Body>
                    <a
                      className="card-link stretched-link" 
                      href="https://www.naver.com">
                      <h3>WEM 개발자 커뮤니티</h3>
                      <hr/>
                      <span>WEM 노코드 개발자 커뮤니티 웹</span>
                      <hr/>
                      <div className="tech-stacks">
                        <span className="tech-stack">HTML</span>
                        <span className="tech-stack">CSS</span>
                        <span className="tech-stack">JavaScript</span>
                        <span className="tech-stack">Bootstrap</span>
                        <span className="tech-stack">WEM</span>
                      </div>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} md={6} className="my-3">
                <Card>
                  <div className="card-img-container">
                    <Card.Img variant="top" src="https://placeimg.com/300/120/any"/>
                  </div>
                  <Card.Body>
                    <a
                      className="card-link stretched-link" 
                      href="https://www.naver.com">
                      <h3>BS태그</h3>
                      <hr/>
                      <span>NFC Read/Write Android App</span>
                      <hr/>
                      <span className="tech-stack">Java</span>
                      <span className="tech-stack">AndroidStudio</span>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>  
        </Fade>
      </article>

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
