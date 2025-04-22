import styles from './Home.module.css';
import { motion } from 'framer-motion';
import backgroundImg from '../assets/background.jpg';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className={styles.home}
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span className={styles.name}>Kayla West</span>
        </h1>
        <h2 className={styles.typewriter}>
          <Typewriter
            words={['Web Developer.', 'Designer.', 'React Enthusiast.', 'Lifelong Learner.']}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p>
          I build responsive, interactive web apps using modern tools like React, Vite, and CSS Modules.
        </p>
        <button onClick={() => navigate('/projects')}>View My Work</button>
      </motion.div>
    </div>
  );
}

export default Home;