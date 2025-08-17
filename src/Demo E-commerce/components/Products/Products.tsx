import { useState, useEffect } from 'react';
import "./Products.css"
import { useCart } from "../../Demo";

// Updated type to match Fake Store API response
type ProductProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

// Fetch products from Fake Store API
export const useProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

function ProductCard({ title, price, image, description }: ProductProps) {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
      <button className="product-button" onClick={() => addToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
}

const searchProducts = (products: ProductProps[], searchTerm: string) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const filterProductsByCategory = (products: ProductProps[], category: string) => {
  if (category === 'all') return products;
  return products.filter((product) => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export default function ProductsList({ searchTerm, filterCategory }: { searchTerm: string; filterCategory: string }) {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-message">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">Error: {error}</div>
      </div>
    );
  }

  // Apply both search and category filters
  const searchFiltered = searchProducts(products, searchTerm);
  const filteredProducts = filterProductsByCategory(searchFiltered, filterCategory);

  return (
    <div className="products-container">
      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <p>
            {searchTerm || filterCategory !== 'all' 
              ? `No products found for "${searchTerm}" ${filterCategory !== 'all' ? `in ${filterCategory}` : ''}`
              : 'No products available'
            }
          </p>
        </div>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      )}
    </div>
  );
}
  