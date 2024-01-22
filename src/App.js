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
import { useState, useEffect } from 'react';
import Loading from './Components/Loading'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id="top">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Home />
          <AboutMe />
          <Projects />
          <Research /> 
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

