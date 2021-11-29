import { combineReducers } from 'redux';
import categories from './categories';



const allReducers = combineReducers({
    categories
});

export default allReducers;