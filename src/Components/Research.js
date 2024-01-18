import React from 'react';
import './Styles/Research.css'; // Import your Research.css file

const Research = () => {
  return (
    <div className="research-section" id="research">
      <h2>My Research Work</h2> {/* Updated header for a more descriptive title */}
      <div className="research-grid">
      <div className="research-item">
          <h3>The Ethics and Effects of Employee Monitoring:
                            Balancing, Productivity, Security, and Privacy in the
                            Workplace</h3>
          <p>
          The paper explores the ethics and legal considerations of
                            employee monitoring in our current society. I investigate whether constant surveillance is
                            morally acceptable and if it improves productivity and security or damages employee autonomy
                            and trust in light of the growing usage of software and systems to track employee activity.
                            I argue that although employee monitoring presents privacy issues, it can have
                            positive effects on productivity and security if done so while adhering to rigorous moral
                            and legal guidelines that safeguard employee rights and privacy.          </p>
          <a href="https://drive.google.com/file/d/1UuQOdhYMsou9wPJZfk8iVQPMMRA3MkbK/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read Paper</a>
        </div>
        <div className="research-item">
          <h3>Exploring the vulnerabilities of WiFi hacking
                            through different lenses</h3>
          <p>
          The paper explores the vulnerabilities of
                            Wi-Fi
                            networks to hacking and stealing sensitive information. Then it explores the different types
                            of
                            Wi-Fi security protocols and compares and contrastes them. Afterwards, it highlights the
                            weaknesses of the
                            Wired Equivalent Privacy (WEP) protocol and other protocols, which was phased out due to
                            security flaws, and the importance of having strong passwords to protect against brute force
                            attacks. The paper concludes by emphasizing the need for updating passwords frequently and avoiding
                            default passwords to prevent hackers from accessing the system.          </p>
          <a href="https://drive.google.com/file/d/1w7CwHxaF8CZqq4Uciv6LbaAjwjkwUK8z/view?usp=share_link" target="_blank" rel="noopener noreferrer">Read Paper</a>

        </div>
        
        
        <div className="research-item">
          <h3>Prevention and Detection of Network Attacks: A
                            Comprehensive Study</h3>
          <p>
          The paper discusses the prevention and detection of various network attacks, including DDoS, man-in-the-middle, injection, and brute force attacks. It examines the use of AI in both creating and defending against cyber attacks, presenting findings on IRP preventions and machine learning methods for attack detection. The study highlights the effectiveness of different detection mechanisms for various attack types. Accepted for publication in Springer's LNBIP series and featured in the E-book "Decision Support Systems XIII: Decision Support System in An Uncertain World: The Contribution of Digital Twins," the paper appears on page 56 and was presented at ICDSST 2023.
          </p>
          <a href="https://drive.google.com/file/d/1S-G80Ka_XJhY765qMWAYtVZy28nm7JIg/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read Paper</a>
          <a href="https://drive.google.com/file/d/1WpsU1nU_xn5mVSNmEpahKp8uGAXBCuDO/view?usp=sharing" target="_blank" rel="noopener noreferrer">E-book</a>
       
        </div>
        <div className="research-item">
          <h3>Exploring Technical Capabilities of Unmanned Aerial Vehicles</h3>
          <p>
            The paper explores the capabilities of UAVs in different industries. It addresses the risks and evaluates the security concerns of these UAVs and reveals surprising results. The paper recommends the next moves for these UAVs and suggests ideas for further research. The paper was recommended and accepted for publication in Springer by the ICISS 2023.
          </p>
          <a href="https://drive.google.com/file/d/109xpzD06HMg1b7OuZwq8JiRcovkf8uhJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read Paper</a>
          <a href="https://drive.google.com/file/d/12oOnJbz1--vNCLpcjulQIbpmyMXHvX4c/view?usp=share_link" target="_blank" rel="noopener noreferrer">Presentation</a>

        </div>
        <div className="research-item">
          <h3>The Effectiveness of Using Kinect Studio in the
                            Study of Human Anatomy for Academic Purpose</h3>
          <p>
          The paper evaluates Kinect Studio as a tool for teaching human anatomy, comparing its effectiveness and accuracy with Azure Kinect SDK. Experiments demonstrate its potential in creating engaging educational simulations.          </p>
          <a href="https://drive.google.com/file/d/1jHWkQ3BJ3klHMKE2SwFOF0IvCzQtRuAx/view?usp=share_link">Read Paper</a>

        </div>

        
      </div>
    </div>
  );
};

export default Research;
