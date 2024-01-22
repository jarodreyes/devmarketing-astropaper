import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Card from "./GameCard"; // Assuming Card can render title and description

function PromptCards() {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  // Load prompts from the CSV file
  const loadPrompts = () => {
    Papa.parse("/prompts.csv", {
      download: true,
      header: true, // Assuming your CSV has headers
      complete: results => {
        // Convert each row into an object with title and description
        const loadedPrompts = results.data.map(row => ({
          title: row.Title, // Replace 'Title' with your CSV column name for the title
          description: row.Description, // Replace 'Description' with your CSV column name for the description
        }));
        setDeck(loadedPrompts);
      },
    });
  };

  // Draw 6 prompt cards from the deck
  const drawPrompts = () => {
    let newDrawnCards = [];
    let newDeck = [...deck];

    for (let i = 0; i < 6 && newDeck.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * newDeck.length);
      newDrawnCards.push(newDeck[randomIndex]);
      newDeck.splice(randomIndex, 1); // Remove the drawn card
    }

    setDrawnCards(newDrawnCards);
    setDeck(newDeck);
  };

  // Load the deck of cards when the component mounts
  useEffect(() => {
    loadPrompts();
  }, []);

  return (
    <div className="prompt-cards">
      <button onClick={drawPrompts}>Draw Prompt Cards</button>
      <div className="grid grid-cols-3 gap-4">
        {drawnCards.map((prompt, index) => (
          <Card
            key={index}
            title={prompt.title}
            description={prompt.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default PromptCards;
