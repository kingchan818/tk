const initialState = {
    game: { platforms: [] },
    screen: { results: [] },
    isLoading: true,
};

const detialReducder = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            };
        case 'LOADING_DETIAL':
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};

export default detialReducder;
