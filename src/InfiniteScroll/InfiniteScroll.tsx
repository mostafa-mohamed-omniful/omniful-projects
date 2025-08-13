import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export default function InfiniteScroll() {
  const [cards, setCards] = useState<{ id: number; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load initial cards
  useEffect(() => {
    loadMoreCards();
  }, []);

  const loadMoreCards = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    setCards(prevCards => {
      const newCards = Array.from({ length: 10 }, (_, i) => ({
        id: prevCards.length + i + 1,
        text: `Card ${prevCards.length + i + 1}`
      }));
      return [...prevCards, ...newCards];
    });
    
    // Small delay to prevent rapid loading
    setTimeout(() => setIsLoading(false), 100);
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're near the bottom (within 100px)
      if (scrollTop + windowHeight >= documentHeight - 100) {
        loadMoreCards();
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [loadMoreCards]);

  return (
    <div>
      <Link to="/">Home</Link>
      {cards.map(card => (
        <div
          key={card.id}
          style={{
            color: "black",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            margin: "10px",
            background: "#f9f9f9"
          }}
        >
          {card.text}
        </div>
      ))}
      {isLoading && (
        <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
          Loading more cards...
        </div>
      )}
    </div>
  );
}
