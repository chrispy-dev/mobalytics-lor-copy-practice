import { cards } from '../../card-data/data/set1-en_us';
import fs from 'fs';
import path from 'path';
import _ from 'underscore';

const initialState = {
    cards: _.sortBy(cards.filter(card => card.collectible === true), 'cost')
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default reducer;