import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import baThumbnail from "../images/project-img/ba-thumbnail.png";

const Projects = () => {
  const [projectData, setProjectData] = useState([
    {
      id: "1",
      img: `${baThumbnail}`,
      title: "비즈니스 자동화 관리 웹",
      subtitle: "스티커/라벨 생산업체 비즈니스 자동화 관리 도구",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "WEM"],
    },
    {
      id: "2",
      img: `${baThumbnail}`,
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
    },
    {
      id: "3",
      img: `${baThumbnail}`,
      title: "WEM 개발자 커뮤니티",
      subtitle: "WEM 노코드 개발자 커뮤니티 웹",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "WEM"],
    },
    {
      id: "4",
      img: `${baThumbnail}`,
      title: "BS태그",
      subtitle: "NFC Read/Write 안드로이드 앱",
      tech: ["Java", "AndroidStudio"],
    },
  ]);

  return (
    <div>
      <Container className="card-container">
        <Row>
          {projectData.map((data) => (
            <Col lg={6} md={6} className="my-3" key={data.id}>
              <Card>
                <div className="card-img-container">
                  <Card.Img variant="top" src={data.img} />
                </div>
                <Card.Body>
                  <a
                    className="card-link stretched-link"
                    href="https://www.naver.com"
                  >
                    <h3>{data.title}</h3>
                    <hr />
                    <span>{data.subtitle}</span>
                    <hr />
                    <div className="tech-stacks">
                      {data.tech.map((stack, index) => (
                         <span className="tech-stack" key={index}>{stack}</span>
                      ))}
                    </div>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
