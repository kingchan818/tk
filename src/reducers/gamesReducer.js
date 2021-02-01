const initState = {
    popular: [],
    upcoming: [],
    newGames: [],
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAME':
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            };
        default:
            return { ...state };
    }
};

export default gameReducer;
