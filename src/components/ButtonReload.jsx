import React, { useEffect, useState } from "react";

const ButtonsComponent = () => {
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    // Check if the flag is set in localStorage
    const buttonClicked = localStorage.getItem("buttonClicked");
    if (buttonClicked) {
      setShowButtons(false);
    }
  }, []);

  const handleClick = e => {
    // Set a flag in localStorage and reload the page
    localStorage.setItem("buttonClicked", "true");
    console.log(e);
    window.location.reload();
  };

  if (!showButtons) {
    return null; // or some placeholder if you want
  }

  return (
    <div>
      <h2>Which do you prefer?</h2>
      <button onClick={handleClick} value="buffy">
        Buffy
      </button>
      <button onClick={handleClick} value="spongebob">
        Spongebob
      </button>
      <button onClick={handleClick} value="fry">
        Fry
      </button>
    </div>
  );
};

export default ButtonsComponent;
