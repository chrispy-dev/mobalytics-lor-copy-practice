export const TOGGLE_NAV_MENU = 'TOGGLE_NAV_MENU';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const SEARCH_INPUT_TERM = 'SEARCH_INPUT_TERM';
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const ADD_FILTER_OPTION = 'ADD_FILTER_OPTION';
export const REMOVE_FILTER_OPTION = 'REMOVE_FILTER_OPTION';
export const CHECK_FOR_OPTIONS = 'CHECK_FOR_OPTIONS';

export const toggleNavMenu = () => (dispatch) => {
    dispatch({ type: TOGGLE_NAV_MENU });
};

export const toggleFilter = () => (dispatch) => {
    dispatch({ type: TOGGLE_FILTER });
};

export const handleInputChange = (term) => (dispatch) => {
    dispatch({ type: HANDLE_INPUT_CHANGE, payload: term });
};

export const searchInputTerm = () => (dispatch) => {
    dispatch({ type: SEARCH_INPUT_TERM });  
};

export const addFilterOption = (filterOption) => (dispatch) => {
    dispatch({ type: ADD_FILTER_OPTION, payload: filterOption })
};

export const removeFilterOption = (filterOption) => (dispatch) => {
    dispatch({ type: REMOVE_FILTER_OPTION, payload: filterOption })
};

export const checkForOptions = () => (dispatch) => {
    dispatch({ type: CHECK_FOR_OPTIONS });
};