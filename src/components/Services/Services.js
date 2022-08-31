import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import pdf from "../Resume.pdf";
import { Link } from 'react-router-dom';


const Services = (props) => {
    return (
      <div className='section-title'>
      <h4 className='mb-2  bold text-start'>Check my Resume</h4>   
      <Row  xs={1} md={1} lg={2}  className='m-5 px-5'>
        <Col className='text-start'>
        <Row>
        <div>
          <h2 className=''>Education</h2>
        
        <h3 className='ms-4'><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>  BSC. IN SOFTWARE ENGINEERING</h3>
        <p className='tag'>2018-Present</p>
        <p className='ms-5'>Major in Software Engineering</p>
        <p className='ms-5'>Daffodil International University</p>
        </div>
        </Row>
        <Row>
        <div>
         
        
        <h3 className='ms-4'><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> HIGHER SECONDARY CERTIFICATE</h3>
        <p className='tag'>2015-2017</p>
        <p className='ms-5'>Major in Higher Math </p>
        <p className='ms-5'><strong>Background:</strong> Science </p>
        <p className='ms-5'>Dhanmondi Ideal College</p>
        <p className='ms-5'><strong>GPA:</strong> 3.33</p>
        </div>
        </Row>
        <Row>
        <div>
      
        
        <h3 className='ms-4'><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> SECONDARY SCHOOL CERTIFICATE</h3>
        <p className='tag'>2013-2015</p>
        <p className='ms-5'>Major in Higher Math</p>
        <p className='ms-5'><strong>Background:</strong> Science </p>
        <p className='ms-5'>Ranigonj 2nd BL High School</p>
        <p className='ms-5'><strong>GPA:</strong> 4.78</p>
        </div>
        </Row>
       
        </Col>
        <Col  className='text-start'>
        <Row>
        <div>
          <h2 className=''>Exprience</h2>
        
        <h3 className='ms-4'><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> Hili Boyz Zone</h3>
        <p className='tag'>26 JUNE 2018-Present</p>
        <p className='ms-5'>Hili Boyz Zone is a cloth selling team focused on the common people of Bangladesh for taking a better clothing experience as Bangladesh is the world’s second largest cloth exporting country.
        </p>
        <li className='ms-5'>Developer</li>
        <li className='ms-5'>Hili,Dinajpur,Bangladesh</li>
        </div>
        </Row>
        <Row></Row>
        </Col>
      </Row>
      <Link className='resume' to={pdf} target="_blank" download>Download Resume</Link>
      </div>
      
    );
};

export default Services;