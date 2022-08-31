import React from 'react';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const ExtraIntro = () => {
  return (
    <div>
      <Row xs={1} md={2} lg={2} className="g-4 p-5 bg-black">

        <Col className=" text-light m-auto">
         
            
              <h3>Project </h3>
              <h3> Statistics 2022</h3>
              <Button className='m-3 py-2 px-3'  as={Link} to='/projects' variant="primary">Know More</Button>
           

          
        </Col>
        <Col className="text-light">
         <Row xs={1} md={2} lg={2}>
          <Col>  <h5>Html5 And CSS3 Project</h5></Col>
          <Col><h5>22</h5></Col>
         </Row>
         <hr></hr>
         <Row xs={1} md={2} lg={2}>
          <Col>  <h5>Bootstrap/Tailwind Project</h5></Col>
          <Col><h5>22</h5></Col>
         </Row>
         <hr></hr>
         <Row xs={1} md={2} lg={2}>
          <Col> <h5>JavaScript Project</h5></Col>
          <Col><h5>22</h5></Col>
         </Row>
         <hr></hr>
         <Row xs={1} md={2} lg={2}>
          <Col> <h5>React Project</h5></Col>
          <Col><h5>22</h5></Col>
         </Row>
         <hr></hr>
              
         
       
             
              
                  
           
        </Col>



      </Row>
    </div>
  );
};

export default ExtraIntro;