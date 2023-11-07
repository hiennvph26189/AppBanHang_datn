import {createStore, combineReducers} from 'redux';
import {Reducers} from '../reducers/Reducers';

const routeReducer = combineReducers({Reducers});
export const store = createStore(routeReducer)

