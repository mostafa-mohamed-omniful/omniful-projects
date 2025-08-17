import { useState, createContext, useContext } from 'react';
import { NavBar } from "./components/NavBar/NavBar"
import ProductsList from "./components/Products/Products"
import { CartDropdown } from "./components/CartDropdown/CartDropdown"
import "./Demo.css"

// Create cart context at the top level
const CartContext = createContext<{
  cart: string[];
  addToCart: (title: string) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
} | null>(null);

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Separate CartProvider component
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (productTitle: string) => {
    setCart(prev => [...prev, productTitle]);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const Demo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleFilterChange = (category: string) => {
    setFilterCategory(category);
    // Clear search when changing categories for better UX
    if (category !== filterCategory) {
      setSearchTerm('');
    }
  };

  return (
    <CartProvider>
      <div className="demo-container">
        <NavBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
          filterCategory={filterCategory}
          onFilterChange={handleFilterChange}
          onCartClick={toggleCart}
          isCartOpen={isCartOpen}
        />
        
        <CartDropdown
          isOpen={isCartOpen}
          onToggle={toggleCart}
        />
        
        <ProductsList searchTerm={searchTerm} filterCategory={filterCategory} />
      </div>
    </CartProvider>
  )
}