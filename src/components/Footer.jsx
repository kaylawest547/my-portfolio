import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Kayla West. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://github.com/kaylawest547" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/kaylaawest/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:kaylawest547@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
