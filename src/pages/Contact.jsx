import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      alert("Message sent! (Simulation)");
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <motion.div
      className={styles.contact}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}

        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Contact;