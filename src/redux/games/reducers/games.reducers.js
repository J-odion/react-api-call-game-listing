import { FILTER_RESULT, GOT_GAMES_SUCCESSFULLY, SEARCH_RESULT } from "./../../types/index";

const INITIAL_STATE = {
    games: null,
    errors: null,
    searchResult: null,
    searchQuery: null,
    filterResult: null
}

// redux reducer function
const gamesReducer = (state=INITIAL_STATE, action) =>{
    // Destructure type and payload from action
    const { type, payload } = action;

    switch (type) {
        case GOT_GAMES_SUCCESSFULLY: // when the games have been fetched, store it in games
            return({
                    ...state, 
                    games: payload
                })
        case SEARCH_RESULT: // set the search result for other component to use
            return({
                    ...state,
                    searchResult: payload.result,
                    searchQuery: payload.searchKeyword
            })
        case FILTER_RESULT: // set the search result for other component to use
            return({
                    ...state,
                    searchResult: payload.result,
                    searchQuery: payload.filterBy
            })
    
        default: // return the state by default else react will shout
            return state;
    }
}

export default gamesReducer