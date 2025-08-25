import { Link } from "react-router-dom";
import './Projects.css';
import { NavBar } from "../components/NavBar/NavBar";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 'todo-list',
      title: 'To Do List',
      description: 'A dynamic task management application with add, complete, and clear functionality',
      icon: '📝',
      path: '/todo-list',
      color: '#4CAF50'
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      description: 'Classic game with modern UI and smooth animations',
      icon: '#️⃣',
      path: '/tic-tac-toe',
      color: '#2196F3'
    },
    {
      id: 'infinite-scroll',
      title: 'Infinite Scroll',
      description: 'Dynamic content loading with seamless scrolling experience',
      icon: '♾️',
      path: '/infinite-scroll',
      color: '#9C27B0'
    },
    {
      id: 'demo-ecommerce',
      title: 'Demo E-commerce',
      description: 'Interactive shopping experience with cart functionality',
      icon: '🛒',
      path: '/demo',
      color: '#FF9800'
    }
  ];

  return (
    <>
      <NavBar />
      <motion.div 
        ref={ref}
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="projects-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </motion.h1>
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={project.path} className="project-link">
                <div className="project-icon" style={{ backgroundColor: project.color }}>
                  {project.icon}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-arrow">→</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating background elements */}
        <motion.div
          className="floating-element"
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '25px',
            height: '25px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            zIndex: 1
          }}
          animate={isInView ? {
            y: [0, -25, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1]
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
            top: '75%',
            right: '12%',
            width: '20px',
            height: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '50%',
            zIndex: 1
          }}
          animate={isInView ? {
            y: [0, 20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.4, 1]
          } : {
            y: 0,
            opacity: 0,
            scale: 1
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </motion.div>
    </>
  );
}