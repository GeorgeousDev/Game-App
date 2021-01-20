import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/GameActions";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Styling
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
	const location = useLocation();
	const pathID = location.pathname.split("/")[2];

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	const { popular, upcoming, newGames } = useSelector((state) => state.games);

	return (
		<GameList>
			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence>{pathID && <GameDetail pathId={pathID} />}</AnimatePresence>
				<h2>Upcoming Games</h2>
				<Games>
					{upcoming.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							key={game.id}
							img={game.background_image}
						/>
					))}
				</Games>
				<h2>Popular Games</h2>
				<Games>
					{popular.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							key={game.id}
							img={game.background_image}
						/>
					))}
				</Games>
				<h2>New Games</h2>
				<Games>
					{newGames.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							key={game.id}
							img={game.background_image}
						/>
					))}
				</Games>
			</AnimateSharedLayout>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;
const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-row-gap: 5rem;
	grid-column-gap: 3rem;
	cursor: pointer;
`;

export default Home;
