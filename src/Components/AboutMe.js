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
                I'm a 22-year-old college student with a strong passion for computers and data analytics. I love using my coding skills to solve real-world problems. I'm detail-oriented and enjoy breaking down complex issues to find clear, data-based solutions. Whether leading a team or working with others, I always look for new ways to learn and grow in the fast-changing tech world. My focus on improving both personally and professionally makes me a great fit for any tech role that values creativity, strategic thinking, and adaptability."
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
