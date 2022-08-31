import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./About.css";
import pic from "../../images/m.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';



const About = () => {
    return (
        <div className='section-title bg-black text-light'>
       <h4 className='mb-2  bold text-start'>About</h4> 
       <Row  xs={1} md={1} lg={2}>
        <Col lg={4} className='pic m-auto'> <img src={pic} alt=''/></Col>
        <Col lg={8} className='line p-5'>
        <h3 className='heading'>Full Stake Developer</h3>
        <p className='font-italic'>
                    I am a Web developer working on this field for the last 3 years.
                    I develop web based application with React (JavaScript Framework).I am also capable of
                    working on machine
                    learning projects with python.
                </p>
                <Row>
                  <Col>
                  
                    <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Birthday:</strong> 26 June,1999</p>
                    <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Age:</strong> 23</p>
                    <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Zone:</strong> Dhanmondi,Dhaka</p>
                    
                    <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>City:</strong> Dhaka</p>
                    <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Country:</strong> Bangladesh</p>

                  
                  </Col>
                  <Col>
                
                  <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Degree:</strong> BSc. In SWE</p>
                  <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Freelance:</strong>Available</p>

                  <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Phone:</strong> +8801929497587</p>
                  
                    <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  <strong>Email:</strong> sahmmed974@gmail.com</p>
                  </Col>
                </Row>
        </Col>
        
        </Row>    
        </div>
        
    );
};

export default About;