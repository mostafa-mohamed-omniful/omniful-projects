import { Link } from "react-router-dom";
import './Projects.css';

export default function Projects() {
    return (
      <div>
        <h1 className='projects-title'>Projects</h1>
        <div><Link className='todo-link' to="/todo-list">📝To Do List📝</Link></div>
        <div><Link className='tic-link' to="/tic-tac-toe">#️⃣Tic Tac Toe#️⃣</Link></div>
        <div><Link className='infinite-link' to="/infinite-scroll">♾️⬇️Infinite Scroll⬇️♾️</Link></div>
      </div>
    );
  }