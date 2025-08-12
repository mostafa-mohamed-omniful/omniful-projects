import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function InfiniteScroll() {
  const [cards, setCards] = useState<{ id: number; text: string }[]>([]);

  // Load initial cards
  useEffect(() => {
    loadMoreCards();
  }, []);

  const loadMoreCards = () => {
    setCards(prevCards => {
      const newCards = Array.from({ length: 10 }, (_, i) => ({
        id: prevCards.length + i + 1,
        text: `Card ${prevCards.length + i + 1}`
      }));
      return [...prevCards, ...newCards];
    });
  };
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadMoreCards();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards]);

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
    </div>
  );
}
