import { createContext, useContext } from 'react';

type CartContextValue = {
  cart: string[];
  addToCart: (title: string) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextValue | null>(null);

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
