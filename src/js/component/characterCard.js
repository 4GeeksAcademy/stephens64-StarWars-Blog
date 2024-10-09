import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const CharacterCard = () => {
  const { store, actions } = useContext(Context); // Use context to get global store and actions
  const [characters, setCharacters] = useState([]); // Local state for characters

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.dev/api/people/");
      const data = await res.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);

  // Function to handle add/remove from favorites
  function handleFavorites(name) {
    store.favorites.includes(name) ? actions.removeFromFavorites(name) : actions.addToFavorites(name);
  }

  return (
    <div className="container d-flex col-10 overflow-auto mt-5 mx-auto">
      {characters?.map((character, index) => {
        const characterId = character.url.split("/").slice(-2)[0];

        return (
          <div className="card m-2" style={{ minWidth: "200px" }} key={index}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
              className="card-img-top"
              alt={character.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "http://vignette4.wikia.nocookie.net/starwarsfantasyrpg/images/6/6c/Imperium.png/revision/latest?cb=20120814112440&path-prefix=de"; // Fallback if image doesn't exist
              }}
            />
            <div className="card-body">
              <h5 className="card-title text-dark">{character.name}</h5>
              <button
                className="btn btn-primary"
                onClick={() => handleFavorites(character.name)}
              >
                <i className={store.favorites.includes(character.name) ? "fas fa-heart" : "far fa-heart"}></i>
              </button>
              <Link to={"characterDescription/" + characterId} className="btn btn-primary" style={{ marginLeft: "10px" }}>
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
