import { cards } from '../../card-data/set1-en_us';
import _ from 'underscore';

import {
    TOGGLE_NAV_MENU,
    TOGGLE_FILTER
} from '../actions/index';

const initialState = {
    cards: _.sortBy(cards.filter(card => card.collectible === true), 'cost'),
    menuToggle: true,
    filterToggle: true
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAV_MENU:
            return {
                ...state,
                menuToggle: !state.menuToggle
            }
        case TOGGLE_FILTER:
            return {
                ...state,
                filterToggle: !state.filterToggle
            }
        default:
            return state;
    };
};

export default reducer;