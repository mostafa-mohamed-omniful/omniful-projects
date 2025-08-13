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
                        <h2>Computer Science IGCSE and A-Level</h2>
                        <p>2022-2023</p>
                        <p>Nefertari International School</p>
                        <p>I studied Computer Science IGCSE and A-Level, where I learned the basics of computer science and programming.</p>
                    </li>
                    <li>
                        <h2>Networks Intern</h2>
                        <p>2024</p>
                        <p>Orange</p>
                        <p>I trained and leaned from network engineers and gained experience in network security and network management.</p>
                    </li>
                    <li>
                        <h2>Software Engineer Intern</h2>
                        <p>2025</p>
                        <p>Omniful</p>
                        <p>I worked on the Omniful dashboard project, where I was responsible for developing a good looking dashboard for the company.</p>
                    </li>
                    <li>
                        <h2>Computer Science and Engineering major</h2>
                        <p>2023-present</p>
                        <p>German University in Cairo</p>
                        <p>I am currently studying Computer Science and Engineering at the German University in Cairo, where I am learning advanced programming concepts and gaining experience in software development.</p> 
                    </li>
                    
                </ul>
            </div>
        </>
    )
}