import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import baThumbnail from "../images/project-img/ba-thumbnail.png";
import comThumbnail from "../images/project-img/com-thumbnail.png";
import nfcThumbnail from "../images/project-img/nfc-thumbnail.png";
import sasangThumbnail from "../images/project-img/sasang-thumbnail.png";
import ba1 from "../images/project-img/ba-1.png";
import ba2 from "../images/project-img/ba-2.png";
import ba3 from "../images/project-img/ba-3.png";
import sasang1 from "../images/project-img/sasang-1.png";
import sasang2 from "../images/project-img/sasang-2.png";
import sasang3 from "../images/project-img/sasang-3.gif";
import com1 from "../images/project-img/com-1.png";
import com2 from "../images/project-img/com-2.png";
import com3 from "../images/project-img/com-3.png";
import com4 from "../images/project-img/com-4.gif";
import nfc1 from "../images/project-img/nfc-1.png";
import nfc2 from "../images/project-img/nfc-2.png";
import nfc3 from "../images/project-img/nfc-3.png";
import nfc4 from "../images/project-img/nfc-4.png";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  };

  const [projectClicked, setProjectClicked] = useState(false);
  const [projectData, setProjectData] = useState([
    {
      id: "1",
      img: `${baThumbnail}`,
      title: "비즈니스 자동화 관리 웹",
      subtitle: "스티커/라벨 생산업체 비즈니스 자동화 관리 도구",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "WEM"],
      imgs: [`${ba1}`, `${ba2}`, `${ba3}`],
      type: "기업 프로젝트",
      detail: [
        "WEM 노코드 플랫폼으로 1차적인 개발 진행",
        "인쇄 미리보기, UI디자인 등은 Javascript로 커스텀",
      ],
      isClicked: false,
    },
    {
      id: "2",
      img: `${sasangThumbnail}`,
      title: "AI 사상체질 진단",
      subtitle: "AI 사상체질 진단 모바일 웹 & 안드로이드 앱",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "WEM",
        "Java",
        "AndroidStudio",
      ],
      imgs: [`${sasang1}`, `${sasang2}`, `${sasang3}`],
      type: "기업 프로젝트",
      detail: [
        "WEM 노코드 플랫폼으로 1차적인 개발 진행",
        "인쇄 미리보기, UI디자인 등은 Javascript로 커스텀",
      ],
      isClicked: false,
    },
    {
      id: "3",
      img: `${comThumbnail}`,
      title: "WEM 개발자 커뮤니티",
      subtitle: "WEM 노코드 개발자 커뮤니티 웹",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "WEM"],
      imgs: [`${com1}`, `${com2}`, `${com3}`, `${com4}`],
      type: "기업 프로젝트",
      detail: [
        "WEM 노코드 플랫폼으로 1차적인 개발 진행",
        "인쇄 미리보기, UI디자인 등은 Javascript로 커스텀",
      ],
      isClicked: false,
    },
    {
      id: "4",
      img: `${nfcThumbnail}`,
      title: "BS태그",
      subtitle: "NFC Read/Write 안드로이드 앱",
      tech: ["Java", "AndroidStudio"],
      imgs: [`${nfc1}`, `${nfc2}`, `${nfc3}`, `${nfc4}`],
      type: "기업 프로젝트",
      detail: [
        "WEM 노코드 플랫폼으로 1차적인 개발 진행",
        "인쇄 미리보기, UI디자인 등은 Javascript로 커스텀",
      ],
      isClicked: false,
    },
  ]);

  const handleClick = (id) => {
    console.log(id);
    let newProjectData = projectData.map((data) => {
      if (data.id === id) {
        data.isClicked = true;
        console.log(data);
      } else {
        data.isClicked = false;
      }
      return data;
    });
    setProjectData(newProjectData);
    setProjectClicked(true);
  };

  const handleBackBtn = () => {
    let newProjectData = projectData.map((data) => {
      data.isClicked = false;
      return data;
    });
    setProjectData(newProjectData);
    setProjectClicked(false);
  };

  if (projectClicked) {
    return (
      <div>
        {projectData.map((data) => {
          if (data.isClicked === true) {
            return (
              <Container fluid key={data.id}>
                <button
                  className="d-flex justify-content-start mb-3"
                  onClick={() => handleBackBtn()}
                >
                  뒤로가기
                </button>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <div className="d-flex justify-content-center">
                        <Slider {...settings}>
                            {data.imgs.map((imgsData, index) => {
                                return (
                                    <div key={index}>
                                        <img className="slider-img" src={imgsData} alt="프로젝트 이미지"/>
                                    </div>
                                )
                            })}
                        </Slider>
                        </div>
                        <Card.Title>{data.title}</Card.Title>
                        {data.type}
                        <ul className="mt-3">
                          {data.detail.map((detailData, index) => {
                            return <li key={index}>{detailData}</li>;
                          })}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            );
          } else {
            return <div key={data.id}></div>;
          }
        })}
      </div>
    );
  } else {
    return (
      <div>
        <Container fluid className="card-container">
          <Row>
            {projectData.map((data) => (
              <Col
                lg={6}
                md={6}
                className="my-3 project-card"
                key={data.id}
                onClick={() => {
                  handleClick(data.id);
                }}
              >
                <Card>
                  <div className="card-img-container">
                    <Card.Img variant="top" src={data.img} />
                  </div>
                  <Card.Body>
                    <span className="card-link">
                      <h3>{data.title}</h3>
                      <hr />
                      <span>{data.subtitle}</span>
                      <hr />
                      <div className="tech-stacks">
                        {data.tech.map((stack, index) => (
                          <span className="tech-stack" key={index}>
                            {stack}
                          </span>
                        ))}
                      </div>
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Projects;
