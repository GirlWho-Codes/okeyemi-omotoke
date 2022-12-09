import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projImg1, projImg2, projImg3, projImg4, projImg5, projImg6, projImg7, projImg8, projImg9, projImg10, projImg11, projImg12, projImg13, projImg14,code03, projImg15, projImg16, projImg17, projImg18, code11, code5, code8 } from "./index";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Button from 'react-bootstrap/Button'


export const Projects = () => {

  const projects1 = [
    {
      title: "Admin Dashboard",
      description: "An Admin Dashboard with Syncfusion",
      imgUrl: code11,
      hrefData: "https://admin-dashboard-bice-delta.vercel.app/"
    },
    {
      title: "Admin Dashboard",
      description: "An Admin Dashboard with Syncfusion",
      imgUrl: code03,
      hrefData: "https://admin-dashboard-bice-delta.vercel.app/"
    },
    {
      title: "Admin Dashboard",
      description: "An Admin Dashboard with Syncfusion",
      imgUrl: code8,
      hrefData: "https://admin-dashboard-bice-delta.vercel.app/"
    },
   
    {
      title: "Omotoke's Gadget",
      description: "E-commerce",
      imgUrl: projImg1,
      hrefData: "https://ecommerce-sanity-nine-omega.vercel.app/"
    },
    {
      title: "Omotoke's Gadget",
      description: "E-commerce",
      imgUrl: projImg2,
      hrefData: "https://ecommerce-sanity-nine-omega.vercel.app/"
    },
    {
      title: "Omotoke's Gadget",
      description: "E-commerce",
      imgUrl: projImg3,
      hrefData: "https://ecommerce-sanity-nine-omega.vercel.app/"
    },
    
    
]
const projects2 = [
   {
      title: "Songly",
      description: "A music player Application",
      imgUrl: projImg4, 
      hrefData: "https://songly.vercel.app/"
    },
   {
      title: "Songly",
      description: "A music player Application",
      imgUrl: projImg5, 
      hrefData: "https://songly.vercel.app/"
    },
   
  
      {
        title: "Gpt3",
        description: "Modern UI/UX website",
        imgUrl: projImg10,
      },
   
      {
        title: "Gpt3",
        description: "Modern UI/UX website",
        imgUrl: projImg12,
        hrefData: "https://modern-ui-ux-gpt-3-xi.vercel.app/"
      },
   {
        title: "RealGram",
        description: "Social Media Application",
        imgUrl: projImg7,
        hrefData: "https://github.com/GirlWho-Codes/RealGram"
      },
      {
        title: "RealGram",
        description: "Social Media Application",
        imgUrl: projImg8,
        hrefData: "https://github.com/GirlWho-Codes/RealGram"
      },
    ]  

const projects3 = 
    [
        {
            title: "My Portfolio",
            description: "Portfolio",
            imgUrl: projImg13,
          },
          {
            title: "My Portfolio",
            description: "Portfolio",
            imgUrl: projImg14,
          },
          {
            title: "My Portfolio",
            description: "Portfolio",
            imgUrl: projImg15,
          },
      {
            title: "Journal App",
            description: "Journal",
            imgUrl: projImg16,
            hrefData: "https://journal-app-uftq.vercel.app/"
          },
          {
            title: "Journal App",
            description: "Journal",
            imgUrl: projImg17,
            hrefData: "https://journal-app-uftq.vercel.app/"
          },
          {
            title: "Journal App",
            description: "Journal",
            imgUrl: projImg18,
            hrefData: "https://journal-app-uftq.vercel.app/"
          },
      
    ];                

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am a Software engineer with a Bachelor's degree in Computer Engineering. I specialize in building exceptional digital experiences by creating efficient, scalable, readable codes and converting your dreams into reality.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                        
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
