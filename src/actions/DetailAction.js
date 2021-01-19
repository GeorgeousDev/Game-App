import axios from "axios";
import { gamesDetailUrl, gamesScreenshotUrl } from "../Api";

const loadDetail = (id) => async (dispatch) => {
	dispatch({
		type: "LOAD_DETAIL",
	});

	const detailData = await axios.get(gamesDetailUrl(id));
	const screenshotData = await axios.get(gamesScreenshotUrl(id));
	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screen: screenshotData.data,
		},
	});
};

export default loadDetail;
