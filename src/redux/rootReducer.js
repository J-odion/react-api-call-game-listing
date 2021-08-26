import { combineReducers } from 'redux';
import gamesReducer from "./games/reducers/games.reducers";

const rootReducer = combineReducers({
    availableGames: gamesReducer,
});

export default rootReducer;