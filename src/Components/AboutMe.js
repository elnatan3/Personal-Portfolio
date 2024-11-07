import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Styles/About.css';

const AboutMe = () => {
    const aboutRef = useRef(null);
    const textRefs = useRef([]);
    const circleSmallRef = useRef(null);
    const circleMediumRef = useRef(null);
    const circleLargeRef = useRef(null);

    useEffect(() => {
        gsap.to(aboutRef.current, { duration: 1, scale: 1, opacity: 1, ease: "power3.out" });

        gsap.fromTo(textRefs.current, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" });

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
                <div className="frame-border">
                    <h2>About Me</h2>
                    <p ref={el => textRefs.current[0] = el}>What’s up! I’m a 22-year-old tech enthusiast and data analytics whiz, living in the digital matrix and loving every byte of it. Computers? Data? That’s my jam.</p>
                    <p ref={el => textRefs.current[1] = el}>With code as my toolkit, I'm here to turn real-world problems into neatly packaged solutions (with a dash of flair, of course). Breaking down gnarly issues and building data-fueled fixes? Count me in!</p>
                    <p ref={el => textRefs.current[2] = el}>Whether I’m the captain of the code or part of the squad, I’m all about soaking up knowledge and leveling up in the ever-evolving tech realm.</p>
                    <p ref={el => textRefs.current[3] = el}>Driven by a mission to be the ultimate tech chameleon—creative, strategic, and flexible—I’m here to bring a fresh perspective to any team daring enough to embrace the future. Let’s make some digital magic happen!</p>
                    <div className="cv-section">
                        <a href="https://drive.google.com/file/d/1yjJ6v3WIbIXQOgCE_-n09emX84Be-LGJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download-cv">
                            <div className="cv">Download CV</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
