export const TOGGLE_NAV_MENU = 'TOGGLE_NAV_MENU';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const toggleNavMenu = () => (dispatch) => {
    dispatch({ type: TOGGLE_NAV_MENU });
};

export const toggleFilter = () => (dispatch) => {
    dispatch({ type: TOGGLE_FILTER });
};