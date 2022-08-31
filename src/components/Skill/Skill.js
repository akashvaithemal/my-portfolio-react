import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faPen,faPersonWalkingLuggage,faBiohazard,faBrain,faPuzzlePiece,faBug } from '@fortawesome/free-solid-svg-icons';



const Skill = () => {
    return (
        
      <div>
         
         <div className='section-title my-5'>
       <h4 className='mb-5 bold text-start'>Skill</h4> 
         <Row className='w-80 mb-5' xs={1} md={2} lg={2} >
        
         <Row  className='px-5'>
            <Col><h3>HTML/HTML5</h3></Col>
            <Col><h3>100%</h3></Col>
           
            <ProgressBar variant="success" animated now={100}/>
        </Row>
         <Row className='px-5'>
            <Col><h3>CSS/CSS3</h3></Col>
            <Col><h3>100%</h3></Col>
           
            <ProgressBar variant="info"  animated now={100} />
        </Row>
         <Row  className='px-5'>
            <Col><h3>JavaScript</h3></Col>
            <Col><h3>80%</h3></Col>
           
            <ProgressBar variant="warning"  animated now={80} />
        </Row>
        <Row  className='px-5'>
            <Col><h3>React</h3></Col>
            <Col><h3>80%</h3></Col>
            <ProgressBar striped variant="dark" animated now={80} />
        </Row>
         <Row  className='px-5'>
            <Col><h3>BootStrap</h3></Col>
            <Col><h3>100%</h3></Col>
           
            <ProgressBar striped variant="danger" animated now={100} />
        </Row>
         <Row  className='px-5'>
            <Col><h3>Tailwind</h3></Col>
            <Col><h3>100%</h3></Col>
           
            <ProgressBar  animated now={100} />
        </Row>
      
        </Row>
       </div>
       <div className='section-title'>
       <h4 className=' bold text-start'>Interest</h4> 
         <Row className='w-80 p-5  btm' xs={1} md={2} lg={2} >
        
         <Row  className='px-5 m-auto mb-3 rounded bg-dark text-light'>
            
            <Col><h3>Programming</h3></Col>
            <Col className='p-2'> <FontAwesomeIcon icon={faCode}></FontAwesomeIcon></Col>
            
        </Row>
         <Row className='px-5 m-auto mb-3 rounded bg-warning text-dark'>
            <Col><h3>Problem Solving</h3></Col>
            <Col className='p-2'> <FontAwesomeIcon icon={faBug}></FontAwesomeIcon></Col>
           
        </Row>
         <Row  className='px-5 m-auto mb-3 rounded bg-dark text-light'>
            <Col><h3>Puzzle Solving</h3></Col>
            <Col  className='p-2'> <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon></Col>
           
           
        </Row>
        <Row  className='px-5 m-auto mb-3 rounded bg-warning text-dark'>
            <Col><h3>Brain Stroming</h3></Col>
            <Col  className='p-2'> <FontAwesomeIcon icon={faBrain}></FontAwesomeIcon></Col>
            
        </Row>
         <Row  className='px-5 m-auto mb-3 rounded bg-dark text-light'>
            <Col><h3>Science Fiction</h3></Col>
            <Col className='p-2'> <FontAwesomeIcon icon={faBiohazard}></FontAwesomeIcon></Col>
           
           
        </Row>
         <Row  className='px-5 m-auto mb-3 rounded bg-warning text-dark'>
            <Col><h3>Travelling</h3></Col>
            <Col className='p-2'> <FontAwesomeIcon icon={faPersonWalkingLuggage}></FontAwesomeIcon></Col>
           
            
        </Row>
         <Row  className='px-5 m-auto mb-3 rounded '>
            <Col className='bg-dark text-light '><h3>Writing</h3></Col>
            <Col className='p-2 bg-warning text-dark '> <FontAwesomeIcon icon={faPen}></FontAwesomeIcon></Col>
           
            
        </Row>
      
        </Row>
       </div>
      </div>
       
    );
};

export default Skill;