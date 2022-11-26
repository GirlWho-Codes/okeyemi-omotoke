import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

export const ProjectCard = ({ title, description, imgUrl, hrefData }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <div>
         <Button variant="dark" href={hrefData} >Live site</Button>
                                </div>
          </div>
         
          </div>
          
    </Col>
  )
}
