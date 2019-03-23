import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialSate = {
    searchField: ''
}

export const searchPokemons = (state = initialSate, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};