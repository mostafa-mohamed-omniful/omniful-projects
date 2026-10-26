import './Contact.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const contacts = [
  {
    title: 'Email',
    value: 'mostafa12.official@gmail.com',
    href: 'mailto:mostafa12.official@gmail.com',
    icon: '✉️'
  },
  {
    title: 'Phone',
    value: '+201067073657',
    href: 'tel:+201067073657',
    icon: '📞'
  },
  {
    title: 'GitHub',
    value: 'github.com/12tifa12',
    href: 'https://github.com/12tifa12',
    icon: '💻'
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/mostafa-mohamed',
    href: 'https://www.linkedin.com/in/mostafa-mohamed-272bb8372/',
    icon: '💼'
  }
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="contact-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.2, 
          ease: "easeOut"
        }}
      >
        Contact
      </motion.h1>
      
      <ul className="contact-list">
        {contacts.map((contact, index) => {
          // Alternate the slide-in direction and hover tilt for each card
          const direction = index % 2 === 0 ? -1 : 1;
          const isExternal = contact.href.startsWith('http');
          return (
            <motion.li
              key={contact.title}
              initial={{ opacity: 0, x: 30 * direction }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 * direction }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                rotateY: -5 * direction,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                className="contact-link"
                href={contact.href}
                {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <span className="contact-icon" aria-hidden="true">{contact.icon}</span>
                <h2 className="contact-list-title">{contact.title}</h2>
                <motion.span
                  className="contact-value"
                  whileHover={{ color: "#f5f5dc" }}
                  transition={{ duration: 0.2 }}
                >
                  {contact.value}
                </motion.span>
              </a>
            </motion.li>
          );
        })}
      </ul>
      
      {/* Add floating background elements */}
      <motion.div
        className="contact-floating"
        style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '20px',
          height: '20px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1
        }}
        animate={isInView ? {
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        } : {
          y: 0,
          opacity: 0,
          scale: 1
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="contact-floating"
        style={{
          position: 'absolute',
          top: '65%',
          right: '12%',
          width: '15px',
          height: '15px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          zIndex: 1
        }}
        animate={isInView ? {
          y: [0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.3, 1]
        } : {
          y: 0,
          opacity: 0,
          scale: 1
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  )
}