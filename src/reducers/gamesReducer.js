const initState = {
    popular: [],
    upcoming: [],
    newGames: [],
    searched: [],
    isLoading: true,
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAME':
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
                isLoading: false,
            };
        case 'searchGame':
            return {
                ...state,
                searched: action.payload.searched,
                isLoading: false,
            };
        case 'clearSearch':
            return {
                ...state,
                searched: [],
            };
        case 'loadingDetial':
            return {
                ...state,
                isLoading: true,
            };

        default:
            return { ...state };
    }
};

export default gameReducer;
