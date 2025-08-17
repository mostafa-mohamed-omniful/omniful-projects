import { useRef, useEffect } from 'react';
import { useCart } from '../../Demo';
import './CartDropdown.css';

interface CartDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CartDropdown = ({ isOpen, onToggle }: CartDropdownProps) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  if (!isOpen) return null;

  return (
    <div className="cart-dropdown" ref={dropdownRef}>
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <span className="cart-count">{cart.length} items</span>
      </div>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span className="item-name">{item}</span>
                <button 
                  className="remove-item-btn"
                  onClick={() => removeFromCart(index)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-footer">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout-btn">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
