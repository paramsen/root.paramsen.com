import {TOGGLE_DRAWER} from '../const';

export function toggleDrawer() {
    return (dispatch) => {
        return {
            toggleDrawer: () => {
                dispatch({
                    type: TOGGLE_DRAWER
                })
            }
        }
    }
}

