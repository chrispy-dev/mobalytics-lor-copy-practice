import { cards } from '../../card-data/set1-en_us';
import _ from 'underscore';

import {
    TOGGLE_NAV_MENU,
    TOGGLE_FILTER,
    HANDLE_INPUT_CHANGE,
    SEARCH_INPUT_TERM,
    ADD_FILTER_OPTION,
    REMOVE_FILTER_OPTION,
    CHECK_FOR_OPTIONS
} from '../actions/index';

const collectibleCards = cards.filter(card => card.collectible === true);

const initialState = {
    searchTerm: '',
    filterOptions: {
        regions: [],
        manaCosts: [],
        types: [],
        rarities: []
    },
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
            if(action.payload === 'Demacia' 
            || action.payload === 'Freljord' 
            || action.payload === 'Ionia' 
            || action.payload === 'Noxus' 
            || action.payload === 'Piltover & Zaun' 
            || action.payload === 'Shadow Isles') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        regions: [ 
                            ...state.filterOptions.regions,
                            action.payload
                        ]
                    }
                }
            } else if(action.payload === 0
            || action.payload === 1
            || action.payload === 2
            || action.payload === 3
            || action.payload === 4
            || action.payload === 5
            || action.payload === 6
            || action.payload === '7+') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        manaCosts: [
                            ...state.filterOptions.manaCosts,
                            action.payload
                        ]
                    }
                }
            } else if(action.payload === 'Champion'
            || action.payload === 'Spell'
            || action.payload === 'Follower') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        types: [
                            ...state.filterOptions.types,
                            action.payload
                        ]
                    }
                }
            }
        case REMOVE_FILTER_OPTION:
            if(action.payload === 'Demacia' 
            || action.payload === 'Freljord' 
            || action.payload === 'Ionia' 
            || action.payload === 'Noxus' 
            || action.payload === 'Piltover & Zaun' 
            || action.payload === 'Shadow Isles') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        regions: state.filterOptions.regions.filter((region) => region != action.payload)
                    }
                }
            } else if(action.payload === 0
            || action.payload === 1
            || action.payload === 2
            || action.payload === 3
            || action.payload === 4
            || action.payload === 5
            || action.payload === 6
            || action.payload === '7+') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        manaCosts: state.filterOptions.manaCosts.filter((manaCost) => manaCost != action.payload)
                    }
                }
            } else if(action.payload === 'Champion'
            || action.payload === 'Spell'
            || action.payload === 'Follower') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        types: state.filterOptions.types.filter((type) => type != action.payload)
                    }
                }
            }
        case CHECK_FOR_OPTIONS:
            return {
                ...state
            }
        default:
            return state;
    };
};

export default reducer;