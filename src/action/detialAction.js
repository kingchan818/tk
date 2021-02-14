import axios from 'axios';
import { gameDetialsURL, gameScreenURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: 'LOADING_DETIAL',
    });

    const detialData = await axios.get(gameDetialsURL(id));
    const screenData = await axios.get(gameScreenURL(id));

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detialData.data,
            screen: screenData.data,
        },
    });
};
