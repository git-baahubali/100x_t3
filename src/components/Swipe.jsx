import React, { useState } from "react";

const SwipeButton = () => {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].pageX);
  };

  const handleTouchMove = (event) => {
    setEndX(event.touches[0].pageX);
    if (isSwiping && endX - startX > 100) {
      // The user has swiped across the button.
      // Perform the desired action here.
      console.log("iron man");
    }
  };

  const handleTouchEnd = (event) => {
    setIsSwiping(false);
  };
console.log("Swipe Button ran");
  return (
    <button
      className="swipe-button"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      Swipe Right
    </button>
  );
};

export default SwipeButton;
