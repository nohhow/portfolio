import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ClonePage() {
  const [posts, setPosts] = useState(["Huffington", "Google"]);

  return (
    <div>
      <section id="practices">
        <Fade top>
          <h1 className="section-title">Practices</h1>
          <p>
            과거/최신 웹 사이트들 재구현하며 웹 퍼블리싱에 익숙해지고자 연습하고
            결과물을 남깁니다.
          </p>
          <p className="textGrey">
            <a className="textGrey" href="http://web.archive.org/">
              Web Archive
            </a>
            에서 과거 웹 사이트를 참고
          </p>
          <hr className="section-divider" />
          <Container>
            <Row>
              {posts.map((data) => (
                <Col sm={12} key={data}>
                    <Link to={`${data}`}>
                        {data}
                    </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </Fade>
      </section>
    </div>
  );
}

export default ClonePage;
