import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import {Github, Linkedin, Twitter} from 'react-bootstrap-icons'

 
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <a className="social-icon"  href="https://github.com/GirlWho-Codes">
                <Github size="1.5rem" />
                            
              </a>
              <a className="social-icon" href="https://www.linkedin.com/in/omotoke-okeyemi-2a3922202">
                <Linkedin size="1.5rem"/>
              
              </a>
              <a className="social-icon" href="https://twitter.com/tokenotmakinwa">
                <Twitter size="1.5rem"/>
                
              </a>

            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
