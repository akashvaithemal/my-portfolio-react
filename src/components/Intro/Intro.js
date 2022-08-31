import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../../code-solid.svg'
import pic from '../../images/m.jpg'
import  './Intro.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Intro = () => {
    return (
        
            <Row xs={1} md={1} lg={2} className='p-4'>
                <Col lg={{ order: 'first' }} md={{ order: 'first' }} xs={{ order: 'last' }}>
              <div  className='alingemt'>
              <h1 className='font-weight'>Hi! I Am </h1>
             <h1 className='font-weight'>Sabbir Ahmmed</h1>
             
             <p className='my-4'><strong>Working As A Full Stake Web Developer In Web Development Field For 4 Years So Far.</strong></p>
            
             <Button as={Link} className='py-2 me-5 my-4 px-4' variant="warning" to='/services'>Hire me</Button>
                <Button className='my-4 py-2 px-4' as={Link} to='/projects'>Projects</Button>
              </div>
               
               
                <Row className='code'>
                   <Col className='alingemt my-4'> <img src={logo} alt=''/><strong>Full Stake Developer Specialized In <span className='text-warning'>React.js</span> </strong></Col>
                   
                 
                
                </Row>
               
               
                </Col>
                <Col className='picture mb-5'>
                <img src={pic} alt=''/>
                </Col>
            </Row>
            
          
        
    );
};

export default Intro;