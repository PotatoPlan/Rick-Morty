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
        console.log(response.data);
        setCharacters(response.data.results);
      });
  }

  // React Query hook for paginated API query
  const { status, error, isFetching, isPreviousData } = useQuery(
    [characters, pageNumber],
    () => getData(pageNumber),
    { keepPreviousData: true }
  );

  // Return null if there is nothing in characters
  if (!characters) {
    return null;
  }

  // Return loading tag if status is loading
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  // Return error message if status is error
  if (status === "error") {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className="characters-container">
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
      <div>Current page: {pageNumber}</div>
      <button
        onClick={() => setPageNumber((old) => Math.max(old - 1, 0))}
        disabled={pageNumber === 1}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData) {
            setPageNumber((old) => old + 1);
          }
        }}
        disabled={isPreviousData || pageNumber === 22}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}
