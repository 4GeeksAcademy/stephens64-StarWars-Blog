import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const CharacterDescription = () => {
	const { store, actions } = useContext(Context);
    const { id } = useParams();  // Retrieve the character ID from the URL params
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://swapi.dev/api/people/${id}`);
            const data = await res.json();
            setCharacter(data);
        }
        fetchData();
    }, [id]);

	return (
		<div className="container mt-5">
            <div className="row bg-dark p-4" style={{ borderRadius: '10px' }}>
                {/* Left column for character image */}
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        className="img-fluid"
                        alt={character.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "http://vignette4.wikia.nocookie.net/starwarsfantasyrpg/images/6/6c/Imperium.png/revision/latest?cb=20120814112440&path-prefix=de"; // Fallback image
                        }}
                    />
                </div>

                {/* Right column for character details */}
                <div className="col-md-8">
                    <h2 className="text-white">Name: {character.name}</h2>
                    <h2 className="text-white">Height: {character.height}</h2>
                    <h2 className="text-white">Hair Color: {character.hair_color}</h2>
                    <h2 className="text-white">Eye Color: {character.eye_color}</h2>
                    <h2 className="text-white">Gender: {character.gender}</h2>
                </div>
            </div>
		</div>
	);
};
