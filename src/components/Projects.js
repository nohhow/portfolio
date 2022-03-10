import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// Image
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

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
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
      type: "기업 프로젝트 - 디지포머싸스랩",
      detail: [
        "비즈니스 자동화 대상 프로젝트 이해",
        "WEM 노코드 플랫폼으로 Front, Back-End 개발 진행",
        "부가적인 기능은 인쇄 미리보기, UI디자인 등은 Javascript로 개발",
      ],
      result: [
        "기업에서 요구사항했던 산출물인 'ERD', 'IA', 'Database 모델링', '플로우차트', '테스트 시나리오' 등 작성 및 제출",
        "주어진 기간 내에 요구사항을 만족하였고, 프로젝트 결과물은 사업 홍보 수단으로 활용 예정",
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
      type: "기업 프로젝트 - 제이탑미래기술",
      detail: [
        "사내 연구 프로젝트로서 진행, WEM 개발의 모바일 친화성 확인차 개발 진행",
        "기획, 설계, 개발, 테스트 전반을 수행",
        "모바일 웹을 안드로이드 앱으로 패키징",
      ],
      result: [
        "WEM에 포함된 Native App 개발 기능을 사용하는 것보다 Mobile Web으로 개발 후 안드로이드 앱으로 패키징하는 것이 개발 효율성도 높고 사용성도 높다는 것을 인정받음",
        "프로젝트 수행 과정 전반을 이해",
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
      type: "기업 프로젝트 - 제이탑미래기술",
      detail: [
        "WEM 노코드 교육신청 페이지, 공공데이터 API를 활용한 위젯, 슬라이드 게시물 등 개발 수행",
        "개발 완료 후 전체적인 UI 개선 업무 수행",
      ],
      result: [
        "API를 활용하여 데이터를 받아오고, 활용하고자 하는 형태로 맵핑 및 가공하는 절차를 이해",
        "사용자에게 보여질 데이터를 정규표현식으로 전처리하는 것에 능숙해짐",
        "UI개선 업무를 수행하며 사용자 경험에 대해서 생각하게 되고 반응형 웹에 대한 고민을 할 수 있었음",
        "프로젝트 결과물은 사업 홍보 수단 및 개발자 커뮤니티로 활용 중",
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
      type: "기업 프로젝트 - 올댓애즈",
      detail: [
        "디자인을 제외한 모든 프로젝트 업무 수행",
        "DB 없이 Front-End 위주의 개발 수행",
        "NFC 태그를 읽고 쓸 수 있는 기능 중심 개발",
        "Google Maps API를 활용하여 사용자 위치를 NFC에 기록하는 기능 등을 구현",
      ],
      result: [
        "디자이너와 협업하여 완성도 있는 결과물 완성",
        "Play Store에 게시 (어플리케이션명 : BS태그)",
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
                                  <img
                                    className="slider-img"
                                    src={imgsData}
                                    alt="프로젝트 이미지"
                                  />
                                </div>
                              );
                            })}
                          </Slider>
                        </div>
                        <Card.Title>{data.title}</Card.Title>
                        {data.type}
                        <hr />
                        <Container>
                        <Row>
                            <h3 className="d-flex justify-content-left">
                              수행 업무
                            </h3>
                            {data.detail.map((detailData, index) => {
                              return (
                                <Col key={index} sm={12} className="">
                                  <p className="text-start">✔️ {detailData}</p>
                                </Col>
                              );
                            })}
                          </Row>
                        </Container>
                        <hr />
                        <Container>
                          <Row>
                            <h3 className="d-flex justify-content-left">
                              성과
                            </h3>
                            {data.result.map((resultData, index) => {
                              return (
                                <Col key={index} sm={12} className="">
                                  <p className="text-start">👏 {resultData}</p>
                                </Col>
                              );
                            })}
                          </Row>
                        </Container>
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
