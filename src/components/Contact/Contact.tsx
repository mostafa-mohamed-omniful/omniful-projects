import './Contact.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <h2 className="contact-list-title">Email</h2>
          <motion.p
            whileHover={{ color: "#f5f5dc" }}
            transition={{ duration: 0.2 }}
          >
            mostafa12.official@gmail.com
          </motion.p>
        </motion.li>
        
        <motion.li
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02,
            rotateY: -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <h2 className="contact-list-title">Phone</h2>
          <motion.p
            whileHover={{ color: "#f5f5dc" }}
            transition={{ duration: 0.2 }}
          >
            +201067073657
          </motion.p>
        </motion.li>
      </ul>
      
      {/* Add floating background elements */}
      <motion.div
        className="floating-element"
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
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
        className="floating-element"
        style={{
          position: 'absolute',
          top: '70%',
          right: '15%',
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