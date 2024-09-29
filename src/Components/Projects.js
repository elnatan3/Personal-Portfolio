import React, { useEffect, useRef } from 'react';
import './Styles/Project.css'; 
import event from './Images/ultimateEvent.gif'; 
import musipedia from './Images/MusipediaWeb.gif'; 
import pointillist from './Images/Pointillist.gif'; 
import instanews from './Images/news.gif'; 
import emoji from './Images/emoji.gif'; 
import threeDBoard from './Images/3DBoardCreator.gif.gif'; 
import roommixer from './Images/roommixer.gif';


const projectsData = [
    {
        title: "Roommate Matching App",
        description: "Roommixer is a revolutionary roommate matching app with user-friendly features. Admins can tailor questionnaires, target specific users, manage issues, upload agreements, and track user matches effortlessly. Users enjoy a seamless experience, answering questions, editing their profile, filtering matches, and connecting securely with in-app messaging. Other features include listing houses, accessing agreements, and sharing feedback",
        language: "React, Next.js, Material-UI, Firebase(firestore database, authentication, storage), Render(hosting)",
        imageUrl: roommixer,
        liveUrl: "https://roommixer.com",
        githubUrl: "https://github.com/AugustanaCSC490Spring2024/Magpie"
    },
    {
        title: "Event App",
        description: "Ultimate Event is an efficient platform for organizing and attending events, featuring user-friendly registration, domain-specific visibility, and secure email verification. Participants can easily engage with events, manage their attendance, and contact organizers. For event organizers, it offers comprehensive tools to create, manage, and track events, including the ability to communicate with attendees. This platform enhances community interaction and ensures a relevant audience for every event.",
        language: "Python, Firebase, Flask, HTML, CSS, JavaScript, SQL",
        imageUrl: event,
        liveUrl: "https://the-ultimate-event.replit.app/",
        githubUrl: "https://github.com/elnatan3/New_Ultimate_Event"
    },
    {
        title: "Instanews",
        description: "Instanews is a react app that instantly allows you to view latest news all in one page. It saves you so much time and has intuitive user experience where you can modify the display between light and dark mode and has easy and smooth transitions using advanced and extensive css design to make the site very appealing and fully functional.",
        language: "React, API",
        imageUrl: instanews,
        liveUrl: "https://instanews.vercel.app",
        githubUrl: "https://github.com/elnatan3/Instanews"

    },
    {
        title: "Musipedia",
        description: "Musipedia is a comprehensive music library website offering easy access to songs, artists, albums, and playlists. It features intuitive search and filtering, along with robust security for user accounts and personalized playlists. The site enhances user engagement with diverse music genres, interactive functionalities, and efficient management of music collections.",
        language: "Python, Flask, HTML, CSS, JavaScript, SQL",
        imageUrl: musipedia,
        liveUrl: "https://musipedia.replit.app",
        githubUrl: "https://github.com/elnatan3/Musipedia"

    },
    {
        title: "Pointillist Creator and Viewer",
        description: "This app converts 'gif' images into pointillist art, displaying them in a window. It achieves this by transforming pixels into colored points and saving the artwork in '.art_files'. It's a valuable tool for artists and designers exploring new visual styles or for educational purposes to teach pointillism.",
        language: "Python, Tikinter, OS",
        imageUrl: pointillist,
        liveUrl: "https://github.com/elnatan3/Pointillist_Creator_and_Viewer",
        githubUrl: "https://github.com/elnatan3/Pointillist_Creator_and_Viewer"

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
        title: "Emojiverse",
        description: "EmojiVerse is a React app that translates sentences into expressive emojis, offering contextually relevant suggestions. It also provides emoji meanings and enriches messaging experiences. Elevate your conversations with EmojiVerse! Currently working to advance the site by using APIs.",
        language: "React",
        imageUrl: emoji,
        liveUrl: "https://emoji-verse-ivory.vercel.app/",
        githubUrl: "https://github.com/elnatan3/EmojiVerse"

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