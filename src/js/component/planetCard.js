import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const PlanetCard = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.dev/api/planets/");
      const data = await res.json();
      setPlanets(data.results);
    }
    fetchData();
  }, []);

  function handleFavorites(name) {
    store.favorites.includes(name) ? actions.removeFromFavorites(name) : actions.addToFavorites(name);
  }

  return (
    <div className="container d-flex col-10 overflow-auto mt-5 mx-auto">
      {planets?.map((planet, index) => {
        const planetId = planet.url.split("/").slice(-2)[0];

        return (
          <div className="card m-2" style={{ minWidth: "200px" }} key={index}>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} 
              className="card-img-top"
              alt={planet.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "http://vignette4.wikia.nocookie.net/starwarsfantasyrpg/images/6/6c/Imperium.png/revision/latest?cb=20120814112440&path-prefix=de";  // Fallback image
              }}
            />
            <div className="card-body">
              <h5 className="card-title text-dark">{planet.name}</h5>
              <button className="btn btn-primary" onClick={() => handleFavorites(planet.name)}>
                <i className="far fa-heart"></i>
              </button>
              <Link to={"planetDescription/" + planetId} className="btn btn-primary ml-2" style={{ marginLeft: "10px" }}>
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
