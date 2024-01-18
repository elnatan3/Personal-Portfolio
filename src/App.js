import React from 'react';
import './App.css';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Research from './Components/Research'; 
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App" id="top">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Research /> 
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
