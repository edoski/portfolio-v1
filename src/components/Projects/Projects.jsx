import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';

library.add(fab, faGithub);

function Projects() {
  const projectList = [
    {
      title: 'pub-sub',
      description: "(SO course project, temp. private upon prof's request) a client-server, terminal-based, pub-sub application leveraging java's multithreading capabilities.",
      techStack: 'java, multithreading',
      link: '',
    },
    {
      title: 'web-chat',
      description: 'a web-based chat interface, where users can register themselves, and interact with other users either in a general chat, or individually.',
      techStack: 'html, css, javascript',
      link: 'https://github.com/edoski/web-chat/',
    },
    {
      title: 'fantasy-cards',
      description: 'a javafx application (university project), where users can save, load, and play a turn-based fantasy card game.',
      techStack: 'java, javafx',
      link: 'https://github.com/edoski/scontroElementale',
    },
    {
      title: 'md-notes-app',
      description: 'a web-based note-taking application, where users can create, edit, and preview markdown notes, stored on firebase.',
      techStack: 'react, firebase',
      link: 'https://github.com/edoski/mde-notes-app/',
    },
    {
      title: 'youtube-clone',
      description: 'a web-based application where users can authenticate via their google account, and upload or watch videos on the platform.',
      techStack: 'react, typescript, google api',
      link: 'https://github.com/edoski/youtube-clone',
    },
    {
      title: 'portfolio-v2',
      description: "the very website you're currently on; originally in vanilla js, now in react; everything you see here is freely available on my github.",
      techStack: 'html, css, javascript',
      link: 'https://github.com/edoski/portfolio-v1',
    },
  ];

  return (
      <>
        <hr className="nav-hr"/>
        <div className="hero-subtitle-container-flex">
          <div className="hero-subtitle-container">
            <h1 className="hero-subtitle">...here&#39;s some of my projects.</h1>
          </div>
        </div>
        <div id="projects" className="projects-container">
          {projectList.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <FontAwesomeIcon icon={['fab', 'github']}/>
                    </div>
                    <p>{project.description}</p>
                    <p className="tech-stack bold">tech-stack: {project.techStack}</p>
                  </a>
                </div>
              </div>
          ))}
        </div>
      </>
  );
}

export default Projects;