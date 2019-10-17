import { cards } from '../../card-data/set1-en_us';
import _ from 'underscore';

import {
    TOGGLE_NAV_MENU 
} from '../actions/index';

const initialState = {
    cards: _.sortBy(cards.filter(card => card.collectible === true), 'cost'),
    menuToggle: true
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAV_MENU:
            console.log('Inside of the reducer!');
            return {
                ...state,
                menuToggle: !state.menuToggle
            }
        default:
            return state;
    };
};

export default reducer;