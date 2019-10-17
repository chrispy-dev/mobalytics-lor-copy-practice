export const TOGGLE_NAV_MENU = 'TOGGLE_NAV_MENU';

export const toggleNavMenu = () => (dispatch) => {
    console.log('Inside of actions!');
    dispatch({ type: TOGGLE_NAV_MENU });
};