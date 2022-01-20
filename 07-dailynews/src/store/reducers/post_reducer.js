import {GET_POSTS, GET_POST_BY_ID, CLEAR_POST_BY_ID} from '../types';

export default function postReducer(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return {...state, ...action.payload};
        case GET_POST_BY_ID:
            return {...state, post: action.payload};
        case CLEAR_POST_BY_ID:
            return {...state, post: action.payload};
        default:
            return state;
    }
}
