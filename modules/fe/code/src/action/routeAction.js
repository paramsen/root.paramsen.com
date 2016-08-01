import * as types from '../const';

export function routeLocationChange(location) {
    return {
        type: types.BROWSER_HISTORY_CHANGE,
        location
    };
}