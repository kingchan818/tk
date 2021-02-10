const initialState = {
    game: {},
    screen: {},
};

const detialReducder = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
            };
        default:
            return { ...state };
    }
};

export default detialReducder;
