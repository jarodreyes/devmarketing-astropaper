import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Card from "./GameCard";

function GameBoard() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isFacilitator, setIsFacilitator] = useState(true);

  // Function to draw a card
  const drawCard = () => {
    console.log(cards.length);
    if (cards.length > 0) {
      let randomIndex = Math.floor(Math.random() * cards.length);
      setCurrentCard(cards[randomIndex]);

      // Remove the drawn card from the deck
      setCards(prevCards =>
        prevCards.filter((_, index) => index !== randomIndex)
      );
    }
  };

  // Function to load cards from CSV
  const loadCards = () => {
    Papa.parse("/cards.csv", {
      download: true,
      header: true, // if your CSV has headers
      complete: results => {
        const loadedCards = results.data.map(row => ({
          title: row.Title, // Replace 'Title' with your CSV column name for the title
          description: row.Description, // Replace 'Description' with your CSV column name for the description
        }));
        setCards(loadedCards);
      },
    });
  };

  // Determine the facilitator (for simplicity, random selection)
  useEffect(() => {}, []);

  // Initialize the cards deck
  useEffect(() => {
    loadCards();
  }, []);

  return (
    <div className="game-board">
      {isFacilitator ? (
        <>
          <p className="mt-4 text-gray-600">
            As the facilitator, draw a card and read it aloud to the group.
          </p>
          <button
            onClick={drawCard}
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Draw Goal Card
          </button>
        </>
      ) : (
        <p className="mt-4 text-gray-600">
          Waiting for the facilitator to draw a Goal card...
        </p>
      )}
      <div className="flex items-center justify-center">
        {currentCard && (
          <Card
            key={1}
            title={currentCard.title}
            description={currentCard.description}
            index={1}
          />
        )}
      </div>
    </div>
  );
}

export default GameBoard;
