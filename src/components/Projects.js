import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// Image
import nbThumbnail from "../images/project-img/nb-thumbnail.png";
import baThumbnail from "../images/project-img/ba-thumbnail.png";
import comThumbnail from "../images/project-img/com-thumbnail.png";
import sasangThumbnail from "../images/project-img/sasang-thumbnail.png";
import capThumbnail from "../images/project-img/cap-thumbnail.jpeg";
import pThumbnail from "../images/project-img/p-thumbnail.jpeg";
import classThumbnail from "../images/project-img/class-thumbnail.png";
import habitThumbnail from "../images/project-img/habit-thumbnail.jpeg";
import hnuThumbnail from "../images/project-img/hnu-thumbnail.png";
import nb1 from "../images/project-img/nb-1.png";
import nb2 from "../images/project-img/nb-2.png";
import nb3 from "../images/project-img/nb-3.gif";
import nb4 from "../images/project-img/nb-4.png";
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
import cap1 from "../images/project-img/cap-1.jpeg";
import p1 from "../images/project-img/p-1.jpeg";
import p2 from "../images/project-img/p-2.jpeg";
import p3 from "../images/project-img/p-3.jpeg";
import p4 from "../images/project-img/p-4.jpeg";
import class1 from "../images/project-img/class-1.png";
import class2 from "../images/project-img/class-2.png";
import class3 from "../images/project-img/class-3.png";
import class4 from "../images/project-img/class-4.png";
import class5 from "../images/project-img/class-5.png";
import habit1 from "../images/project-img/habit-1.jpeg";
import habit2 from "../images/project-img/habit-2.jpeg";
import habit3 from "../images/project-img/habit-3.jpeg";
import hnu1 from "../images/project-img/hnu-1.png";

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
      img: `${nbThumbnail}`,
      title: "No Bakery 온라인 스토어",
      subtitle: "온라인 스토어 형태를 가진 베이커리 온라인 주문 사이트",
      tech: ["HTML", "CSS", "React.js", "Express.js", "MySQL", "Netlify", "Heroku"],
      imgs: [`${nb1}`, `${nb2}`, `${nb3}`, `${nb4}`],
      type: "개인 프로젝트",
      detail: [
        "온라인 쇼핑몰의 기본적인 흐름과 기능을 이해할 수 있었던 프로젝트",
        "사용 가능한 웹 기술들을 대부분 활용하여 Front, Back-end 모두 혼자서 다뤄본 프로젝트",
        "소셜 로그인, 장바구니, 구매 통계 등 구현",
        "기능 소개는 https://github.com/nohhow/no-bakery 참고",
        "서버와 클라이언트를 구분하여 개발하고 각각 따로 배포 진행",
        "도메인 구매 및 적용",
      ],
      result: [
        "배포완료 : https://nobakery.xyz/",
        "실사용 가능하지만 현재 추가 정비 중",
        "배운점과 아쉬운점은 https://github.com/nohhow/no-bakery 참고",
      ],
      isClicked: false,
    },
    {
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
      img: `${nfc1}`,
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
    {
      id: "6",
      img: `${habitThumbnail}`,
      title: "My Precious Habit",
      subtitle: "습관 관리 안드로이드 앱",
      tech: ["Java", "AndroidStudio, SQLite"],
      imgs: [`${habitThumbnail}`, `${habit1}`, `${habit2}`, `${habit3}`],
      type: "개인 프로젝트",
      detail: [
        "To-Do 리스트와 유사한 형태의 기본적인 CRUD 기능 구현 및 Database 연동",
      ],
      result: [
        "안드로이드 어플리케이션 생애주기 이해",
        "Database 연동 안드로이드 앱 개발 경험, SQL 활용 경험",
      ],
      isClicked: false,
    },
    {
      id: "7",
      img: `${hnuThumbnail}`,
      title: "한남대 공지모아",
      subtitle: "한남대학교 공지 모아보기 (크롬 확장프로그램) 개발",
      tech: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap"],
      imgs: [`${hnuThumbnail}`, `${hnu1}`],
      type: "개인 프로젝트",
      detail: [
        "한남대학교의 다양한 공지사항이 여러 경로에서 제공되어 접근이 불편하다는 것을 개선하고자 진행한 프로젝트",
        "크롬 확장프로그램의 프로젝트 구조 이해",
        "크롬 브라우저 권한을 이용한 '자주 방문한 페이지' 리스트 제공",
        "종강 시계 구현(종강까지 남은 기간이 실시간 표시'",
        "iframe기반으로 제작된 학교 홈페이지의 공지사항을 활용하여 단일 페이지에서 모아 볼 수 있도록 함",
      ],
      result: [
        "크롬 브라우저 웹 스토어에 게시",
        "별도의 홍보 없이 5명의 사용자 확보",
        "학습한 언어와 라이브러리들을 다양하게 적용해 볼 수 있었던 프로젝트",
      ],
      isClicked: false,
    },
    {
      id: "8",
      img: `${classThumbnail}`,
      title: "모두의 클래스",
      subtitle: "온라인 교육 클래스 플랫폼 개발",
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "PHP",
        "Apache",
        "MySQL",
      ],
      imgs: [
        `${classThumbnail}`,
        `${class1}`,
        `${class2}`,
        `${class3}`,
        `${class4}`,
        `${class5}`,
      ],
      type: "2인 팀 프로젝트",
      detail: [
        "구글 클래스룸의 기능 전반을 구현해보고자 프로젝트 진행",
        "'초대 받아야 입장이 가능한 클래스룸', '해시 함수를 활용한 초대코드 생성기', '게시판', '댓글 기능' 등 구현",
        "Front, Back-end를 동시에 개발 수행",
        "AWS EC2를 활용하여 서버 호스팅",
      ],
      result: [
        "Back-end 개발, AWS 서버 호스팅 경험",
        "Entity간 관계에 대한 고민이 선행되지 못해서 후반부에 다시 관계 정의를 하며 개발에 앞선 설계의 중요성을 되돌아볼 수 있었음",
      ],
      isClicked: false,
    },
    {
      id: "9",
      img: `${pThumbnail}`,
      title: "한남대 AR 동아리 게시판",
      subtitle: "한남대학교 AR 동아리 안내 게시판 Demo 개발",
      tech: ["Unity", "C#", "Vuforia"],
      imgs: [`${p1}`, `${p2}`, `${p3}`, `${pThumbnail}`, `${p4}`],
      type: "2인 팀 프로젝트",
      detail: [
        "이미지 태그를 활용하여 특정 이미지에 카메라를 비추면 AR 오브젝트로 한남대학교 모든 동아리 안내글과 홍보 영상을 선택하여 볼 수 있도록 구현",
        "Android SDK를 활용하여 안드로이드 앱 개발",
        "Vuforia SDK를 활용하여 AR 기능 구현",
        "Unity로 AR 오브젝트 생성하고 C#으로 스크립트 작성",
      ],
      result: [
        "새로운 개발 분야인 AR 개발을 경험",
        "한남대학교 2021 총동아리회에 Demo 버전 시연 및 공개",
      ],
      isClicked: false,
    },
    {
      id: "10",
      img: `${capThumbnail}`,
      title: "시약 장 콘트롤러 임베디드 시스템",
      subtitle: "[캡스톤 프로젝트] 시약 장 콘트롤러 임베디드 시스템 개발",
      tech: ["Arduino", "C", "Nextion"],
      imgs: [`${capThumbnail}`, `${cap1}`],
      type: "기업 프로젝트 - 명품시스템",
      detail: [
        "(주)명품시스템으로부터 '시약 장 콘트롤러 장치 고도화'프로젝트를 의뢰받아 진행",
        "시약장 콘트롤러는 시약장 내부 공기 순환 장치와 이온클러스터, 잠금장치 등을 제어",
        "기업 요구사항 분석 및 설계, 개발, 테스트 수행 = 폭포수 모델을 따라 개발 진행",
        "주요 담당 업무 : 시약장 콘트롤러 장치의 터치 스크린 UI 설계 및 개발",
      ],
      result: [
        "개발 완료 후 제품화 및 유지 보수 진행 중",
        "기존 콘트롤러 대비 30%이상 단가 절감",
      ],
      isClicked: false,
    },
  ]);

  const handleClick = (id) => {
    let newProjectData = projectData.map((data) => {
      if (data.id === id) {
        data.isClicked = true;
      } else {
        data.isClicked = false;
      }
      return data;
    });
    setProjectData(newProjectData);
    setProjectClicked(true);

    var projectTop = document.querySelector("#projects").offsetTop;
    window.scrollTo({top:projectTop, behavior:'smooth'});
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
                            <div className="tech-stacks">
                              {data.tech.map((stack, index) => (
                                <span className="tech-stack text-start" key={index}>
                                  {stack}
                                </span>
                              ))}
                            </div>
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
                xxl={4}
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
