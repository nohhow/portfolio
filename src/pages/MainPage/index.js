import React from "react";
import { Fade } from "react-awesome-reveal";
import { Button, Container, Row, Col } from "react-bootstrap";

import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import ProfileImage from "../../images/about-me-img/profile-img.png";

import arrowSm from "../../images/sm-arrow.png";
import gitLogo from "../../images/github-icon.png";
import blogLogo from "../../images/blog-icon.png";

function MainPage() {
  console.log("rendering");

  return (
    <div>
      <section id="intro">
        <h1>새로움을 갈망하고</h1>
        <h1>변화가 두렵지 않은</h1>
        <h1 className="mt-5">
          <strong>개발자</strong>
        </h1>
        <h2 className="mt-5">노진현 입니다.</h2>
        <hr className="section-divider" />
        <div className="intor-desc">
          <p className="intro-desc">
            다양한 경험을 토대로 새로운 환경과 변화에 맞춰 잘 해낼 수 있습니다.
          </p>
          <p className="intro-desc">
            사용자의 관점에서 많이 생각하고 문제 해결 과정을 즐길 줄 아는
            개발자입니다.
          </p>
        </div>
        <div className="d-block text-center">
          <img
            className="d-inline-block blink"
            width="50rem"
            src={arrowSm}
            alt="arrow"
          />
          <br />
          <img
            className="d-inline-block blink-second"
            width="30rem"
            src={arrowSm}
            alt="arrow"
          />
        </div>
      </section>

      <section id="about-me">
        <Fade bottom>
          <h1 className="section-title">ABOUT ME</h1>
          <Container>
            <img className="profile-img" src={ProfileImage} alt="프로필 사진" />
            <Row>
              <Col sm={4} className="about-me-col align-items-center">
                <h4 className="half-highlight">이름</h4>
                <span>노진현</span>
              </Col>
              <Col sm={4} className="about-me-col align-items-center">
                <h4 className="half-highlight">생년월일</h4>
                <span>1997.04.03</span>
              </Col>
              <Col sm={4} className="about-me-col align-items-center">
                <h4 className="half-highlight">연락처</h4>
                <span>010-4466-6129</span>
              </Col>
              <Col sm={4} className="about-me-col align-items-center">
                <h4 className="half-highlight">이메일</h4>
                <span>jinhyeon.noh@gmail.com</span>
              </Col>
              <Col sm={4} className="about-me-col align-items-center">
                <h4 className="half-highlight">주소지</h4>
                <span>서울특별시 관악구</span>
              </Col>
              <Col sm={4} className="about-me-col align-items-center">
                <h4 className="half-highlight">학력</h4>
                <span>
                  한남대학교 컴퓨터통신무인기술학과
                  <br />
                  (컴퓨터공학 전공 & 교직 이수)
                </span>
              </Col>
            </Row>
            <Button
              className="about-me-btn mt-5"
              onClick={() =>
                (window.location.href = "https://github.com/nohhow")
              }
            >
              <img className="about-me-icon" src={gitLogo} alt="Github" />
            </Button>
            <Button
              className="about-me-btn mt-5"
              onClick={() =>
                (window.location.href = "https://nohhow.github.io")
              }
            >
              <img className="about-me-icon" src={blogLogo} alt="Blog" />
            </Button>
          </Container>
        </Fade>
      </section>

      <section id="skills">
        <Fade>
          <h1 className="section-title">SKILLS</h1>
          <Skills />
        </Fade>
      </section>

      <section id="projects">
        <Fade top>
          <h1 className="section-title">PROJECTS</h1>
          <Projects />
        </Fade>
      </section>
    </div>
  );
}

export default MainPage;
