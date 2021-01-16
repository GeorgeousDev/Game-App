import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, id, img }) => {
	return (
		<StyledGame>
			<h3>{name}</h3>
			<h3>{released}</h3>
			<img src={img} alt="game" />
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;
export default Game;
