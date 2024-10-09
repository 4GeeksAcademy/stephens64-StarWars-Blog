import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDescription = () => {
	const { store, actions } = useContext(Context);
    const { id } = useParams(); // Retrieve the planet ID from the URL params
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://swapi.dev/api/planets/${id}`);
            const data = await res.json();
            setPlanet(data);
        }
        fetchData();
    }, [id]);

	return (
		<div className="container mt-5">
            <div className="row bg-dark p-4" style={{ borderRadius: '10px' }}>
                {/* Left column for planet image */}
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        className="img-fluid"
                        alt={planet.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "http://vignette4.wikia.nocookie.net/starwarsfantasyrpg/images/6/6c/Imperium.png/revision/latest?cb=20120814112440&path-prefix=de"; // Fallback image
                        }}
                    />
                </div>

                {/* Right column for planet details */}
                <div className="col-md-8">
                    <h2 className="text-white">Name: {planet.name}</h2>
                    <h2 className="text-white">Gravity: {planet.gravity}</h2>
                    <h2 className="text-white">Climate: {planet.climate}</h2>
                    <h2 className="text-white">Terrain: {planet.terrain}</h2>
                    <h2 className="text-white">Population: {planet.population}</h2>
                </div>
            </div>
		</div>
	);
};
