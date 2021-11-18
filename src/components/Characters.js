import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "./Characters.css";
import Character from "./Character";

export default function Characters() {
  // Base URL
  const baseUrl = "https://rickandmortyapi.com/api";

  // State declaration and initialisation
  const [characters, setCharacters] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // API calling function
  async function getData(page) {
    await axios
      .get(`${baseUrl}/character/?species=human&page=${page}`)
      .then((response) => {
        // Check received data
        // console.log(response.data);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // React Query hook for paginated API query
  const { status, error, isPreviousData } = useQuery(
    [characters, pageNumber],
    () => getData(pageNumber),
    { keepPreviousData: true }
  );

  // Return null if there is nothing in characters
  if (!characters) {
    return <h1 className="error-messages">There's an error!</h1>;
  }

  // Return loading tag if status is loading
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  // Return error message if status is error
  if (status === "error") {
    return <h1 className="error-messages">Error: {error.message}</h1>;
  }

  return (
    <div className="characters-container">
      <div className="page-interaction">
        <button
          // Bring the user to previous page
          onClick={() => setPageNumber((current) => Math.max(current - 1, 0))}
          disabled={pageNumber === 1}
        >
          PREVIOUS PAGE
        </button>

        <h4>CURRENT PAGE: {pageNumber}</h4>

        <button
          // Take the user to next page
          onClick={() => {
            if (!isPreviousData) {
              setPageNumber((current) => current + 1);
            }
          }}
          disabled={isPreviousData || pageNumber === 22}
        >
          NEXT PAGE
        </button>
      </div>

      <div className="characters">
        {characters &&
          characters.map((character) => (
            <Character
              key={character.id}
              characterName={character.name}
              characterStatus={character.status}
              characterOrigin={character.origin.name}
              characterLocation={character.location.name}
              characterImageUrl={character.image}
              characterCreatedDate={character.created}
            />
          ))}
      </div>
    </div>
  );
}
