import React from "react";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
import "../../styles/home.css";

export const Home = () => (
	<div data-bs-theme="dark" className="container mt-5">
		{/* Section for Characters */}
		<h2 className="text-white">Characters</h2>
		<div className="row">
			<CharacterCard />
		</div>

		{/* Section for Planets */}
		<h2 className="text-white mt-5">Planets</h2>
		<div className="row">
			<PlanetCard />
		</div>

		{/* Section for Starships */}
		<h2 className="text-white mt-5">Starships</h2>
		<div className="row">
			<StarshipCard />
		</div>
	</div>
);
