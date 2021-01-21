import React from "react";
import { Link } from "react-router-dom";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { popUp } from "../animations";
//Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/DetailAction";
import { smallImage } from "../util";

const Game = ({ name, released, id, img }) => {
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};
	const stringPathId = id.toString();
	return (
		<StyledGame
			variants={popUp}
			initial="hidden"
			animate="show"
			layoutId={stringPathId}
			onClick={loadDetailHandler}
		>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<h3>{released}</h3>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={smallImage(img, 640)}
					alt="game"
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;
export default Game;
