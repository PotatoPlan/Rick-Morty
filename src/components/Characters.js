import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css";

export default function Characters() {
  // Base URL
  const baseUrl = "https://rickandmortyapi.com/api";

  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/character/?species=human`).then((response) => {
      // Check response data
      console.log(response.data);
      setCharacters(response.data.results);
    });
  }, []);

  if (!characters) {
    return null;
  }

  return (
    <div className="characters-container">
      {characters &&
        characters.map((character, index) => <h6>{character.name}</h6>)}
    </div>
  );
}
