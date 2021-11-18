import React, { useState } from "react";
import "./Character.css";

// Get props from the parent component
export default function Character({
  characterName,
  characterStatus,
  characterOrigin,
  characterLocation,
  characterImageUrl,
  characterCreatedDate,
}) {
  // Declare and initialise the toggle state
  const [isClicked, setIsClicked] = useState(false);

  // Toggle function
  function toggleClick() {
    setIsClicked(!isClicked);
  }

  // Cut off unnecessary pieces of the date string
  const createdDateString = characterCreatedDate
    .split("")
    .slice(0, 10)
    .join("");

  return (
    <div>
      <div onClick={toggleClick} className="character-profile">
        <h3>{characterName}</h3>

        {/* Character's profile details will only be displayed once isClicked === true */}
        {isClicked === true ? (
          <div className="character-details">
            <img src={characterImageUrl} alt="Character" />

            <div className="character-details-text">
              <h4>Status: {characterStatus}</h4>
              <h4>Origin: {characterOrigin}</h4>
              <h4>Location: {characterLocation}</h4>
              <h4>Date created: {createdDateString}</h4>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
