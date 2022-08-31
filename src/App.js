
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Skill from './components/Skill/Skill';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import About from './components/About/About';


function App() {
  return (
   
    <div className="App">
    

      <Header></Header>
       <Routes>
       
        <Route path="/home" element={<Home></Home>} />
        <Route path="/skills" element={<Skill></Skill>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/about" element={<About></About>} />
        
      </Routes>
       
    </div>
  );
}

export default App;
