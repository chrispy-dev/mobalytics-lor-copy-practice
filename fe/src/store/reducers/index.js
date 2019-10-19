import { cards } from '../../card-data/set1-en_us';
import _ from 'underscore';

import {
    TOGGLE_NAV_MENU,
    TOGGLE_FILTER,
    HANDLE_INPUT_CHANGE,
    SEARCH_INPUT_TERM,
    ADD_FILTER_OPTION,
    REMOVE_FILTER_OPTION,
    CHECK_FOR_OPTIONS,
    CLEAR_ALL_FILTERS,
    CLEAR_INDIVIDUAL_FILTER
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
    filteredCards: [],
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
            // ADD REGION
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
            // ADD 7+ MANA COST
            } else if(action.payload === '7+') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        manaCosts: [
                            ...state.filterOptions.manaCosts,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12
                        ]
                    }
                }
            // ADD MANA COST
            } else if(action.payload === 0
            || action.payload === 1
            || action.payload === 2
            || action.payload === 3
            || action.payload === 4
            || action.payload === 5
            || action.payload === 6) {
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
            // ADD TYPE
            } else if(action.payload === 'Spell'
            || action.payload === 'Unit') {
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
            // ADD RARITY
            } else if(action.payload === 'Champion'
            || action.payload === 'Rare'
            || action.payload === 'Epic'
            || action.payload === 'Common') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        rarities: [
                            ...state.filterOptions.rarities,
                            action.payload
                        ]
                    }
                }
            }
        case REMOVE_FILTER_OPTION:
            // REMOVE REGION
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
                        regions: state.filterOptions.regions.filter((region) => region !== action.payload)
                    }
                }
            // REMOVE 7+ MANA COSTS
            } else if(action.payload === 'REMOVE') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        manaCosts: state.filterOptions.manaCosts.filter((manaCost) => manaCost < 7)
                    }
                }
            // REMOVE MANA COST
            } else if(action.payload === 0
            || action.payload === 1
            || action.payload === 2
            || action.payload === 3
            || action.payload === 4
            || action.payload === 5
            || action.payload === 6) {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        manaCosts: state.filterOptions.manaCosts.filter((manaCost) => manaCost !== action.payload)
                    }
                }
            // REMOVE TYPE
            } else if(action.payload === 'Spell'
            || action.payload === 'Unit') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        types: state.filterOptions.types.filter((type) => type !== action.payload)
                    }
                }
            // REMOVE RARITY
            } else if(action.payload === 'Champion'
            || action.payload === 'Rare'
            || action.payload === 'Epic'
            || action.payload === 'Common') {
                return {
                    ...state,
                    filterOptions: {
                        ...state.filterOptions,
                        rarities: state.filterOptions.rarities.filter((rarity) => rarity !== action.payload)
                    }
                }
            }
        case CHECK_FOR_OPTIONS:
            if(state.filterOptions.regions.length === 0
            && state.filterOptions.manaCosts.length === 0
            && state.filterOptions.types.length === 0
            && state.filterOptions.rarities.length === 0) {
                return {
                    ...state,
                    cards: _.sortBy(collectibleCards, 'cost')
                }
            }

            return {
                ...state,
                cards: _.sortBy(collectibleCards.filter((card) => {
                    const regionCheck = state.filterOptions.regions.includes(card.region);
                    const manaCostCheck = state.filterOptions.manaCosts.includes(card.cost);
                    const typeCheck = state.filterOptions.types.includes(card.type);
                    const rarityCheck = state.filterOptions.rarities.includes(card.rarity);

                    const regionsLength = state.filterOptions.regions.length !== 0;
                    const manaCostsLength = state.filterOptions.manaCosts.length !== 0;
                    const typesLength = state.filterOptions.types.length !== 0;
                    const raritiesLength = state.filterOptions.rarities.length !== 0;

                    // Only Region selected
                    if(regionsLength && !manaCostsLength && !typesLength && !raritiesLength) {
                        if(regionCheck) {
                            return card;
                        };
                    // Only Cost selected
                    } else if(!regionsLength && manaCostsLength && !typesLength && !raritiesLength) {
                        if(manaCostCheck) {
                            return card;
                        }
                    // Only Type selected
                    } else if(!regionsLength && !manaCostsLength && typesLength && !raritiesLength) {
                        if(typeCheck) {
                            return card;
                        }
                    // Only Rarity selected
                    } else if(!regionsLength && !manaCostsLength && !typesLength && raritiesLength) {
                        if(rarityCheck) {
                            return card;
                        }
                    // Region and Cost selected
                    } else if(regionsLength && manaCostsLength && !typesLength && !raritiesLength) {
                        if(regionCheck && manaCostCheck) {
                            return card;
                        }
                    // Region and Type selected
                    } else if(regionsLength && !manaCostsLength && typesLength && !raritiesLength) {
                        if(regionCheck && typeCheck) {
                            return card;
                        }
                    // Region and Rarity selected
                    } else if(regionsLength && !manaCostsLength && !typesLength && raritiesLength) {
                        if(regionCheck && rarityCheck) {
                            return card;
                        }
                    // Cost and Type selected
                    } else if(!regionsLength && manaCostsLength && typesLength && !raritiesLength) {
                        if(manaCostCheck && typeCheck) {
                            return card;
                        }
                    // Cost and Rarity selected
                    } else if(!regionsLength && manaCostsLength && !typesLength && raritiesLength) {
                        if(manaCostCheck && rarityCheck) {
                            return card;
                        }
                    // Type and Rarity selected
                    } else if(!regionsLength && !manaCostsLength && typesLength && raritiesLength) {
                        if(typeCheck && rarityCheck) {
                            return card;
                        }
                    // Region, Cost, and Type selected
                    } else if(regionsLength && manaCostsLength && typesLength && !raritiesLength) {
                        if(regionCheck && manaCostCheck && typeCheck) {
                            return card;
                        }
                    // Region, Cost, and Rarity selected
                    } else if(regionsLength && manaCostsLength && !typesLength && raritiesLength) {
                        if(regionCheck && manaCostCheck && rarityCheck) {
                            return card;
                        }
                    // Region, Type, and Rarity selected
                    } else if(regionsLength && !manaCostsLength && typesLength && raritiesLength) {
                        if(regionCheck && typeCheck && rarityCheck) {
                            return card;
                        }
                    // Cost, Type, and Rarity selected
                    } else if(regionsLength && !manaCostsLength && typesLength && !raritiesLength) {
                        if(regionCheck && typeCheck) {
                            return card;
                        }
                    // All selected
                    } else if(regionsLength && manaCostsLength && typesLength && raritiesLength) {
                        if(regionCheck && manaCostCheck && typeCheck && rarityCheck) {
                            return card;
                        }
                    }
                }), 'cost')
            }
        case CLEAR_ALL_FILTERS:
            return {
                ...state,
                filterOptions: {
                    ...state.filterOptions,
                    regions: [],
                    manaCosts: [],
                    types: [],
                    rarities: []
                }
            }
        case CLEAR_INDIVIDUAL_FILTER:
            switch(action.payload) {
                case 'region':
                    return {
                        ...state,
                        filterOptions: {
                            ...state.filterOptions,
                            regions: []
                        }
                    }
                case 'cost':
                    return {
                        ...state,
                        filterOptions: {
                            ...state.filterOptions,
                            manaCosts: []
                        }
                    }
                case 'type':
                    return {
                        ...state,
                        filterOptions: {
                            ...state.filterOptions,
                            types: []
                        }
                    }
                case 'rarity':
                    return {
                        ...state,
                        filterOptions: {
                            ...state.filterOptions,
                            rarities: []
                        }
                    }
                default:
                    return state;
            }
        default:
            return state;
    };
};

export default reducer;