const DEFAULT_STORE = {
    userName: 'Mohit',
    userId: 1234,
};

export default function appReducer(state = DEFAULT_STORE, action) {
    switch (action.type) {
        case 'MOVIES_LIST':
            return {...state, moviesList: action.payload};
        case 'MOVIE_DATA':
            return {...state, movieData: action.payload};
        case 'GET_USER':
            return {...state, users: action.payload};
        default:
            return state;
    }
}
