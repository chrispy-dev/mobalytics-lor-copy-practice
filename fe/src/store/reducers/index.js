import { cards } from '../../card-data/set1-en_us';
import _ from 'underscore';

import {
    TOGGLE_NAV_MENU,
    TOGGLE_FILTER,
    HANDLE_INPUT_CHANGE,
    SEARCH_INPUT_TERM,
    ADD_FILTER_OPTION,
    REMOVE_FILTER_OPTION
} from '../actions/index';

const collectibleCards = cards.filter(card => card.collectible === true);

const initialState = {
    searchTerm: '',
    filterOptions: [],
    cards: _.sortBy(collectibleCards, 'cost'),
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
        case HANDLE_INPUT_CHANGE:
            return {
                ...state,
                searchTerm: action.payload
            }
        case SEARCH_INPUT_TERM:
            return {
                ...state,
                cards: _.sortBy(collectibleCards.filter(card => {
                    if(card.name.toUpperCase().includes(state.searchTerm.toUpperCase())) {
                        return card;
                    } else if(card.keywords.length > 0 && card.keywords[0].toUpperCase().includes(state.searchTerm.toUpperCase())) {
                        return card;
                    } else if(card.keywords.length > 1 && card.keywords[1].toUpperCase().includes(state.searchTerm.toUpperCase())) {
                        return card;
                    } else if(card.description.toUpperCase().includes(state.searchTerm.toUpperCase())) {
                        return card;
                    }
                }), 'cost')
            }
        case ADD_FILTER_OPTION:
            return {
                ...state,
                filterOptions: [ ...state.filterOptions, action.payload ]
            }
        case REMOVE_FILTER_OPTION:
            return {
                ...state,
                filterOptions: state.filterOptions.filter(option => option != action.payload)
            }
        default:
            return state;
    };
};

export default reducer;