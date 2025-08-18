import { Link } from "react-router-dom"
import './NavBar.css'
import { useCart } from "../../Demo"

interface NavBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterCategory: string;
  onFilterChange: (value: string) => void;
  onCartClick: () => void;
  isCartOpen: boolean;
}

export const NavBar = ({ searchTerm, onSearchChange, filterCategory, onFilterChange, onCartClick, isCartOpen }: NavBarProps) => {
    const { cart } = useCart();
    
    return (
        <nav className="navbar">
            <Link className="title" to="/demo">Tifa's Store</Link>
            <div className="search-box">
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <button className="search-button">
                🔍
                </button>
            </div>
            <div className="filter-container">
            <div className="filter-select-container">
            <label className="filter-label">Filter:</label>
            <select 
                className="filter-select"
                value={filterCategory}
                onChange={(e) => onFilterChange(e.target.value)}
            >
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
            </select>
            </div>
            {filterCategory !== 'all' && (
                <span className="active-filter-indicator">
                    Showing: {filterCategory}
                </span>
            )}
            </div>
            <div className="welcome-cart-container">
            <p className="welcome-message">Welcome, Guest!</p>
            <div className="cart-container">
            <button 
                className={`cart-button ${isCartOpen ? 'active' : ''}`} 
                onClick={onCartClick}
                aria-label="Toggle cart"
            >
                🛒
            </button>
            <p className="cart-count">{cart.length}</p>
            </div>
            </div>
        </nav>
    )
}