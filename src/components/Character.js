import React from "react";
import "./Character.css";

export default function Character({
  characterName,
  characterStatus,
  characterOrigin,
  characterLocation,
  characterImageUrl,
  characterCreatedDate,
}) {
  return (
    <div>
      <div className="character-profile">
        {/* <img src={characterImageUrl} alt="Character" /> */}
        <h3>{characterName}</h3>
      </div>
    </div>
  );
}
