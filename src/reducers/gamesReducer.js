const initState = {
    popular: [],
    upcoming: [],
    newGames: [],
    searched: [],
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
        case 'searchGame':
            return {
                ...state,
                searched: action.payload.searched,
            };
        case 'clearSearch':
            return {
                ...state,
                searched: [],
            };

        default:
            return { ...state };
    }
};

export default gameReducer;
