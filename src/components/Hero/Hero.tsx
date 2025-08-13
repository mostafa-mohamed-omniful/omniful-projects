import './Hero.css';
import boy from '../../assets/boy.png';

export const Hero = () => {
    return (
        <section className="container">
            <div className="content">
                <h1 className="title">Hi, I'm Mostafa</h1>
                <p className="description">I'm a 19-year-old Computer Science and Engineering student in my third year, passionate about building clean, efficient, and user-friendly solutions. Skilled in Java, JavaScript, TypeScript, HTML, CSS, Python, and Tailwind CSS, I've gained real-world experience through internships at Orange and Omniful, where I honed my development skills and teamwork abilities. I'm currently exploring freelance opportunities to take on diverse projects and keep growing as a developer. Outside of code, you'll usually find me at the gym, watching football, gaming, or diving into the latest tech trends.</p>
            </div>
            <img className="image" src={boy} alt="Hero" />
        </section>
    )
}