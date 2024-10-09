import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";

import "../../styles/home.css";

export const Home = () => (
	<div data-bs-theme="dark" className="text-center mt-5">
		<CharacterCard />
		<PlanetCard />
		<StarshipCard />
	</div>
);