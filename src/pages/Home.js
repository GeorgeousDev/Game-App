import React, { useEffect } from "react";
import { useLocation} from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/GameActions";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Styling and animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

const Home = () => {
	const location = useLocation();
	const pathID = location.pathname.split("/")[2];
	

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	const { popular, upcoming, newGames, searched } = useSelector(
		(state) => state.games,
	);


	return (
		<GameList variants={fadeIn} initial="hidden" animate="show">
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					{pathID && <GameDetail pathId={pathID} />}
				</AnimatePresence>
				{searched.length ? (
					<div className="searched">
						<h2>Searched Games</h2>
						<Games>
							{searched.map((game) => (
								<Game
									name={game.name}
									released={game.released}
									id={game.id}
									key={game.id}
									img={game.background_image}
								/>
							))}
						</Games>
					</div>
				) : (
					""
				)}
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
	@media (max-width: 760px) {
		padding: 0rem;
		h2 {
			text-align: center;
		}
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
