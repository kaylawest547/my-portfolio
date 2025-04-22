import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Me</h1>

      {/* BIO SECTION */}
      <section className={styles.bio}>
        <p>
          Hi! I'm Kayla West, a senior at the University of Central Florida pursuing a degree in Digital Media. I'm passionate about combining design and technology to create meaningful, user-friendly experiences.
        </p>
        <p>
          I enjoy working on creative projects that involve web development, UI/UX design, and storytelling through digital platforms. I'm always eager to learn new tools and collaborate on exciting ideas!
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul className={styles.skillList}>
          <li>React.js</li>
          <li>Figma</li>
          <li>CSS Modules</li>
          <li>JavaScript</li>
          <li>Framer Motion</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* INTERESTS SECTION */}
      <section className={styles.interests}>
        <h2>Interests</h2>
        <p>I love design, animation, indie games, digital art, and exploring new tech tools. In my free time, you’ll find me sketching ideas, watching game development videos, or experimenting with creative coding!</p>
      </section>
    </div>
  );
};

export default About;