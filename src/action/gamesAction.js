import axios from 'axios';
import { popluarGamesURL, newGamesURL, upcomingGamesURL } from '../api';

export const loadGame = () => async (dispatch) => {
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