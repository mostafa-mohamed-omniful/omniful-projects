import { NavBar } from "../components/NavBar/NavBar";
import './Experience.css';

export const Experience = () => {
    return (
        <>
            <NavBar />
            <div>
                <h1 className="title">Experience</h1>
                <ul className="experience-list">
                    <li>
                        <h2>Software Engineer</h2>
                        <p>2020-2021</p>
                        <p>Company Name</p>
                        <p>Description</p>
                    </li>
                </ul>
            </div>
        </>
    )
}