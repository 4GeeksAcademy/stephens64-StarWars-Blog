import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const StarshipCard = () => {
  const { store, actions } = useContext(Context);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.dev/api/starships/");
      const data = await res.json();
      setStarships(data.results);
    }
    fetchData();
  }, []);

  function handleFavorites(name) {
    store.favorites.includes(name) ? actions.removeFromFavorites(name) : actions.addToFavorites(name);
  }

  return (
    <div className="container d-flex col-10 overflow-auto mt-5 mx-auto">
      {starships?.map((starship, index) => {
        const starshipId = starship.url.split("/").slice(-2)[0];

        return (
          <div className="card m-2" style={{ minWidth: "200px" }} key={index}>
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`}
              className="card-img-top"
              alt={starship.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "http://vignette4.wikia.nocookie.net/starwarsfantasyrpg/images/6/6c/Imperium.png/revision/latest?cb=20120814112440&path-prefix=de";  // Fallback image
              }}
            />
            <div className="card-body">
              <h5 className="card-title text-dark">{starship.name}</h5>
              <button className="btn btn-primary" onClick={() => handleFavorites(starship.name)}>
                <i className="far fa-heart"></i>
              </button>
              <Link to={"starshipDescription/" + starshipId} className="btn btn-primary ml-2" style={{ marginLeft: "10px" }}>
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
