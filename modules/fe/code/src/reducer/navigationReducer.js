import {combineReducers} from 'redux';
import {TOGGLE_DRAWER} from '../const';

export function openDrawer(state = false, action) {
    switch(action.type) {
        case TOGGLE_DRAWER:
            return !state;
        default:
            return state;
    }
}

export default combineReducers({
    openDrawer
});