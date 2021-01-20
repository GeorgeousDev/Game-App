import axios from "axios";
import {
	popularGamesUrl,
	upcomingGamesUrl,
	newGamesUrl,
	gameSearchUrl,
} from "../Api";

export const loadGames = () => async (dispatch) => {
	const popularData = await axios.get(popularGamesUrl());
	const upcomingData = await axios.get(upcomingGamesUrl());
	const newGamesData = await axios.get(newGamesUrl());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	const searchGame = await axios.get(gameSearchUrl(game_name));
	dispatch({
		type: "FETCH_SEARCHED",
		payload: { searched: searchGame.data.results },
	});
};


