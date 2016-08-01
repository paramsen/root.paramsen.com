import {combineReducers} from 'redux';
import * as types from '../const';

const initialState = {
    pathname: '/'
}

function location(state = initialState, action) {
    switch(action.type) {
        case types.BROWSER_HISTORY_CHANGE:
            return action.location;
        default:
            return state;
    }
}

export default location;