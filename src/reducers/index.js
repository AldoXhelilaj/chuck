import { combineReducers } from 'redux';
import counter from './counter';
import isLogged from './isLogged';
import todo from './todo';
import categories from './categories';



const allReducers = combineReducers({
    counter,
    isLogged,
    todo,
    categories
});

export default allReducers;