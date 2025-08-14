import { Link } from "react-router-dom"
import './NavBar.css'
import search from '../../../assets/search-interface-symbol.png'

export const NavBar = () => {
    return (
        <nav className="navbar">
            <Link className="title" to="/demo">Tifa's Store</Link>
            <div className="search-box">
                <input className="search-input" type="text" placeholder="Search" />
                <button className="search-button">
                    <img className="search-icon" src={search} alt="search" />
                </button>
            </div>
            <select>
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
            </select>
        </nav>
    )
}