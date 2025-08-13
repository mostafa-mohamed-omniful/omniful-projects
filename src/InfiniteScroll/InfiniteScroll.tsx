import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./InfiniteScroll.css";

export default function InfiniteScroll() {
  const [cards, setCards] = useState<{ id: number; text: string }[]>([]);

  // Load initial cards
  useEffect(() => {
    loadMoreCards();
  }, []);

  const loadMoreCards = () => {
    setCards((prevCards) => {
      const newCards = Array.from({ length: 10 }, (_, i) => ({
        id: prevCards.length + i + 1,
        text: `Card ${prevCards.length + i + 1}`
      }));
      return [...prevCards, ...newCards];
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're near the bottom (within 50px)
      if (scrollTop + windowHeight >= documentHeight - 50) {
        loadMoreCards();
      }
    };

    window.addEventListener("scroll", handleScroll );
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards]);

  return (
    <div>
      <Link to="/">Home</Link>
      <div className="cards-container">
        {cards.map(card => (
          <div
            key={card.id}
            className="card">
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}
