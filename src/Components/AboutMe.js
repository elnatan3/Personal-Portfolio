import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Styles/About.css';

const AboutMe = () => {
    const aboutRef = useRef(null);
    const circleSmallRef = useRef(null);
    const circleMediumRef = useRef(null);
    const circleLargeRef = useRef(null);

    useEffect(() => {
    
        gsap.to(aboutRef.current, { duration: 1, scale: 1, opacity: 1, ease: "power3.out" });

    
        const circles = [circleSmallRef, circleMediumRef, circleLargeRef];
        circles.forEach((circle, index) => {
            gsap.set(circle.current, { xPercent: -100 + index * 10 });
            gsap.fromTo(circle.current, 
                        { x: '-50%' }, 
                        { duration: 3 + index, x: '0%', ease: "power1.inOut", repeat: -1, yoyo: true });
        });
    }, []);

    return (
        <div className="about-me" id="about">
            <div className="background-circle circle-small" ref={circleSmallRef}></div>
            <div className="background-circle circle-medium" ref={circleMediumRef}></div>
            <div className="background-circle circle-large" ref={circleLargeRef}></div>
            <div className="about-me-content" ref={aboutRef}>
                <h2>About Me</h2>
                <p>
                    I'm a 22-year-old college student, passionate about leveraging my deep-seated interest in computers and data analytics to solve real-world challenges. With a knack for coding in various languages and a meticulous attention to detail, I excel in dissecting complex problems and delivering precise, data-driven solutions. Thriving in leadership and collaborative settings, I am constantly seeking out new learning opportunities in the ever-evolving tech landscape. My dedication to continuous personal and professional growth makes me a valuable asset in any tech-centric role, where creativity, strategic thinking, and adaptability are paramount.
                </p>
                <div className="cv-section">
                <a href="https://drive.google.com/file/d/1AfCtVybvuHLyDtyWYf6c8dm5SZdJLGtU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download-cv">
                    <div className="cv">Download CV</div>
                </a>
            </div>
            </div>
            
        </div>
    );
};

export default AboutMe;
