import React from 'react';
import './Styles/Project.css'; 
import event from './Images/event.gif'; 
import musipedia from './Images/MusipediaWeb.gif'; 
import pointillist from './Images/Pointillist.gif'; 
import instanews from './Images/news.gif'; 
import emoji from './Images/emoji.gif'; 

const projectsData = [
    {
        title: "Event App",
        description: "Ultimate Event simplifies organizing and attending events with a user-friendly platform. It features easy event registration, community interaction, and event tracking. The platform enhances community engagement and supports various event types.",
        language: "Python, Flask, HTML, CSS, JavaScript, SQL",
        imageUrl: event,
        liveUrl: "https://ultimate-event.replit.app/",
        githubUrl: "https://github.com/elnatan3/Ultimate_Event"
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
        title: "Pointillist Creator and Viewer",
        description: "This app converts 'gif' images into pointillist art, displaying them in a window. It achieves this by transforming pixels into colored points and saving the artwork in '.art_files'. It's a valuable tool for artists and designers exploring new visual styles or for educational purposes to teach pointillism.",
        language: "Python, Tikinter, OS",
        imageUrl: pointillist,
        githubUrl: "https://github.com/elnatan3/Pointillist_Creator_and_Viewer"

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
        title: "Emojiverse",
        description: "EmojiVerse is a React app that translates sentences into expressive emojis, offering contextually relevant suggestions. It also provides emoji meanings and enriches messaging experiences. Elevate your conversations with EmojiVerse! Currently working to advance the site by using APIs.",
        language: "React",
        imageUrl: emoji,
        liveUrl: "https://emoji-verse-ivory.vercel.app/",
        githubUrl: "https://github.com/elnatan3/EmojiVerse"

    },
    

    
  
];

const Projects = () => {
    return (
        <div className="projects-section" id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.imageUrl} loading='lazy' alt={project.title} />
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
