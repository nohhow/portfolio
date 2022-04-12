import React from "react";
import { Button, Container} from "react-bootstrap";

import gitLogo from "../images/github-icon.png";
import blogLogo from "../images/blog-icon.png";

function Footer() {
  return (
    <div>
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
}

export default Footer;
