import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import gitLogo from "./images/github-icon.png";
import blogLogo from "./images/blog-icon.png";
import Projects from "./components/Projects";

const App = () => {
  const [ScrollY, setScrollY] = useState(0); // 스크롤값 저장
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleScroll = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    if (ScrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // 버튼 숨김
  };

  useEffect(() => {
    console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleScroll);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleScroll); // addEventListener 함수를 삭제
    };
  });

  return (
    <div>
      <button
        className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={handleTop} // 버튼 클릭시 함수 호출
      >
      TOP
      </button>
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
