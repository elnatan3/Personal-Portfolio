import React, { useEffect, useRef } from 'react';
import './Styles/Project.css'; 
import event from './Images/event.gif'; 
import musipedia from './Images/MusipediaWeb.gif'; 
import pointillist from './Images/Pointillist.gif'; 
import instanews from './Images/news.gif'; 
import emoji from './Images/emoji.gif'; 
import threeDBoard from './Images/3DBoardCreator.gif.gif'; 
import roommixer from './Images/roommixer.gif';


const projectsData = [
    {
        title: "Roommixer",
        description: "Find your vibe, skip the drama! Match with roommates who get you, chat securely, and keep it all organized. For admins, it's got pro tools to tailor matches, manage conflicts, and keep things smooth. Roommixer—where living together just got a whole lot easier!",
        language: "React, Next.js, Material-UI, Firebase(firestore database, authentication, storage), Render(hosting)",
        imageUrl: roommixer,
        liveUrl: "https://roommixer.com",
        githubUrl: "https://github.com/AugustanaCSC490Spring2024/Magpie"
    },
    {
        title: "EventiQ",
        description: "Your backstage pass to epic events! Organize like a pro, join what matters, and vibe with your own crowd. Secure, smart, and totally in sync with your tribe. Let the good times roll with EventIQ!",
        language: "React, Firebase, SCSS, Hostinger, SVG, HTML, JavaScript",
        imageUrl: event,
        liveUrl: "https://eventiq.tech",
        githubUrl: "https://github.com/elnatan3/EventiQ"
    },
    {
        title: "3D board Creator",
        description: "This project is a Java-based application designed for creating 3D game boards and terrains. The app was created with my team through agile methodology and GitHub integration. The app is user-friendly and has features that allows for easy customization and design of game boards. It also offers a 3D preview feature which is compatible with 3D printers, allowing users to bring their digital creations into the physical world.",
        language: "Java, JavaFx, Scenebuilder, Unit Testing, and Software Development",
        imageUrl: threeDBoard,
        liveUrl: "https://github.com/AugustanaCSC305Fall22/IbisRepo",
        githubUrl: "https://github.com/AugustanaCSC305Fall22/IbisRepo"

    },
    {
        title: "Instanews",
        description: "All your news, all in one page—instantly! Stay up-to-date with a sleek, smooth experience you can flip from light to dark mode. Fast, easy, and stylish—get the latest news in a flash with Instanews!",
        language: "React, API",
        imageUrl: instanews,
        liveUrl: "https://instanews.vercel.app",
        githubUrl: "https://github.com/elnatan3/Instanews"

    },
    {
        title: "Pointillist Creator and Viewer",
        description: "This app converts 'gif' images into pointillist art, displaying them in a window. It achieves this by transforming pixels into colored points and saving the artwork in '.art_files'. It's a valuable tool for artists and designers exploring new visual styles or for educational purposes to teach pointillism.",
        language: "Python, Tikinter, OS",
        imageUrl: pointillist,
        liveUrl: "https://github.com/elnatan3/Pointillist_Creator_and_Viewer",
        githubUrl: "https://github.com/elnatan3/Pointillist_Creator_and_Viewer"

    },
    
];

const Projects = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });


        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="projects-section" id="projects">
            <h2>My Latest Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                        ref={(el) => projectRefs.current[index] = el}
                    >
                        <div className="project-image">
                            <img src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <h4>{project.language}</h4>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View App</a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;