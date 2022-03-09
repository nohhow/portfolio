import React, {useState} from 'react'
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import FaJs from "../images/skill-icon/js.svg";
import FaHtml5 from "../images/skill-icon/html5.svg";
import FaCss3 from "../images/skill-icon/css3.svg";
import FaReact from "../images/skill-icon/react.svg";
import FaBootstrap from "../images/skill-icon/bootstrap.svg";
import FaPhp from "../images/skill-icon/php.svg";
import FaNodeJs from "../images/skill-icon/node-js.svg";
import FaDatabase from "../images/skill-icon/database.svg";

const Skills = ()=>{
    const [skillData, setSkill] = useState([
        {
          id: "1",
          icon: `${FaJs}`,
          title: "JavaScript",
          rating: 90,
          isHover: false,
        },
        {
          id: "2",
          icon: `${FaHtml5}`,
          title: "HTML5",
          rating: 95,
          isHover: false,
        },
        {
          id: "3",
          icon: `${FaCss3}`,
          title: "CSS5",
          rating: 90,
          isHover: false,
        },
        {
          id: "4",
          icon: `${FaReact}`,
          title: "React.js",
          rating: 80,
          isHover: false,
        },
        {
          id: "5",
          icon: `${FaNodeJs}`,
          title: "Node.js",
          rating: 70,
          isHover: false,
        },
        {
          id: "6",
          icon: `${FaBootstrap}`,
          title: "Bootstrap",
          rating: 90,
          isHover: false,
        },
        {
          id: "7",
          icon: `${FaPhp}`,
          title: "PHP",
          rating: 80,
          isHover: false,
        },
        {
          id: "8",
          icon: `${FaDatabase}`,
          title: "MySQL",
          rating: 70,
          isHover: false,
        },
      ]);

      const handleMouseOver = (id) => {
        let newSkillData = skillData.map((data)=>{
          console.log(id);
          if(data.id === id){
            data.isHover = true;
          }else{
            data.isHover = false;
          }
          return data;
        });
        console.log(newSkillData);
        setSkill(newSkillData);
      };
    
      const handleMouseOut = () => {
        let newSkillData = skillData.map((data)=>{
          data.isHover = false;
          return data;
        });
    
        setSkill(newSkillData);
      }
    
  return (
    <div>
        <h3>main</h3>
        <div className="skill-group mb-5">
            <Container>
              <Row>
                {skillData.map((data) => (
                  <Col key={data.id} onMouseOver={()=> handleMouseOver(`${data.id}`)} onMouseOut={()=>handleMouseOut()} sm={3} className="skill">
                    <img className="skill-icon" src={data.icon} alt="icon"/>
                    <span>{data.title}{data.isHover ? <ProgressBar variant="primary" now={data.rating} label=""/> : ""}</span>
                  </Col>
                ))}
              </Row>
            </Container>
        </div>
        <h3>sub</h3>
        <div className="skill-group my-3">
            <Container>
              <Row>
                <Col sm={3} className="skill">
                  <span>Java</span>
                </Col>
                <Col sm={3} className="skill">
                  <span>AndroidStudio</span>
                </Col>
                <Col sm={3} className="skill">
                  <span>Python</span>
                </Col>
                <Col sm={3} className="skill">
                  <span>C</span>
                </Col>
              </Row>
            </Container>
        </div>
    </div>
  )
}

export default Skills