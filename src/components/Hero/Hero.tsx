import './Hero.css';
import profile from '../../assets/Profile.png';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="hero-container">
            <div className="content">
                <h1 className="title">Hi, I'm Mostafa</h1>
                <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="description"
                >I'm a 19-year-old Computer Science and Engineering student in my third year, passionate about building clean, efficient, and user-friendly solutions. Skilled in Java, JavaScript, TypeScript, HTML, CSS, Python, and Tailwind CSS, I've gained real-world experience through internships at Orange and Omniful, where I honed my development skills and teamwork abilities. I'm currently exploring freelance opportunities to take on diverse projects and keep growing as a developer. Outside of code, you'll usually find me at the gym, watching football, gaming, or diving into the latest tech trends.</motion.p>
            </div>
            <motion.img 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="image" 
                src={profile} 
                alt="Hero" />
        </section>
    )
}