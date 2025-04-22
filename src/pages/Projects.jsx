import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

// Images
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/project3.png';

function Projects() {
  const projects = [
    {
      title: 'SIPS',
      description: 'A social platform concept for small businesses to connect with the drink community.',
      image: proj1,
      techStack: ['HTML', 'CSS', 'RENDER'],
      github: 'https://github.com/kaylawest547/SIPS',
      demo: 'https://sips-rh1i.onrender.com',
    },
    {
      title: 'Quiz App',
      description: 'A simple React Native quiz app that accepts a list of questions and answers and renders them to the screen.',
      image: proj2,
      techStack: ['React', 'Typescript', 'Javascript'],
      github: 'https://github.com/kaylawest547/QuizzApp',
      demo: 'https://youtu.be/Bco6TLTDKxE',
    },
    {
      title: 'Exercise Tracker App',
      description: 'A simple Exercise Tracker application, based on your design from exercise app design.',
      image: proj3,
      techStack: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/kaylawest547/exercise-app',
      demo: '',
    },
  ];

  return (
    <div className={styles.projectsPage}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
