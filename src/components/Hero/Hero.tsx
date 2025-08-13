import './Hero.css';
import boy from '../../assets/boy.png';

export const Hero = () => {
    return (
        <section className="container">
            <div className="content">
                <h1 className="title">Hi, I'm Mostafa</h1>
                <p className="description">I'm a software engineer with a passion for building web applications.</p>
            </div>
            <img className="image" src={boy} alt="Hero" />
        </section>
    )
}