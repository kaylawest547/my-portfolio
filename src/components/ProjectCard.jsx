import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, techStack, github, demo }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tech}>
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;