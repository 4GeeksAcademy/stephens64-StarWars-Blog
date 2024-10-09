import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarShipDescription = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [starship, setStarShip] = useState({});
    
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://swapi.dev/api/starships/${id}`);
            const data = await res.json();
            setStarShip(data);
        }
        fetchData();
    }, [id]);

    return (
        <div className="container mt-5">
            <div className="row bg-dark p-4" style={{ borderRadius: '10px' }}>
                {/* Left column for starship image */}
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                        className="img-fluid"
                        alt={starship.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "http://vignette4.wikia.nocookie.net/starwarsfantasyrpg/images/6/6c/Imperium.png/revision/latest?cb=20120814112440&path-prefix=de"; // Fallback image
                        }}
                    />
                </div>

                {/* Right column for starship details */}
                <div className="col-md-8">
                    <h2 className="text-white">Name: {starship.name}</h2>
                    <h2 className="text-white">Model: {starship.model}</h2>
                    <h2 className="text-white">Manufacturer: {starship.manufacturer}</h2>
                    <h2 className="text-white">Crew: {starship.crew}</h2>
                    <h2 className="text-white">Passengers: {starship.passengers}</h2>
                </div>
            </div>
        </div>
    );
};
