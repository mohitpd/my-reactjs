import {combineReducers} from 'redux';
import posts from './post_reducer';
import users from './user_reducer';

const appReducers = combineReducers({
    users,
    posts,
});

export default appReducers;
