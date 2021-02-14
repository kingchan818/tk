import axios from 'axios';
import { popluarGamesURL, newGamesURL, upcomingGamesURL, searchGameUrl } from '../api';

export const loadGame = () => async (dispatch) => {
    dispatch({
        type: 'loadingDetial',
    });

    const popularData = await axios.get(popluarGamesURL());
    const newData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());

    dispatch({
        type: 'FETCH_GAME',
        payload: {
            popular: popularData.data.results,
            newGames: newData.data.results,
            upcoming: upcomingData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchData = await axios.get(searchGameUrl(game_name));

    dispatch({
        type: 'searchGame',
        payload: {
            searched: searchData.data.results,
        },
    });
};
