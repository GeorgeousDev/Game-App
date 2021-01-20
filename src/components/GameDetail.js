import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const GameDetail = ({ pathId }) => {
	const { screen, game, isLoading } = useSelector((state) => state.detail);
	const history = useHistory();
	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};

	const getPlatfrom = (platform) => {
		switch (platform) {
			case "PlayStation 4":
				return playstation;
			case "Xbox One":
				return xbox;
			case "PC":
				return steam;
			case "Nintendo Switch":
				return nintendo;
			case "iOS":
				return apple;
			default:
				return gamepad;
		}
	};
	return (
		<>
			{!isLoading && (
				<CardShadow className="shadow" onClick={exitDetailHandler}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className="rating">
								<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<div className="platforms">
											<img
												key={data.platform.id}
												src={getPlatfrom(data.platform.name)}
												alt="platform symbol"
											/>
											<h4>{data.platform.name}</h4>
										</div>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img
								layoutId={`image ${pathId}`}
								src={smallImage(game.background_image, 1280)}
								alt="screenshot"
							/>
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className="gallery">
							{screen.results.map((result) => (
								<img
									src={smallImage(result.image, 1280)}
									alt="screenshot"
									key={result.id}
								/>
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: darkgray;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	z-index: 10;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		height: 2rem;
		width: 2rem;
		display: inline;
	}
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		margin-left: 3rem;
		padding: 2rem;
		min-height: 13vh;
		width: 100%;
	}
	h4 {
		margin-left: 6rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;

export default GameDetail;
