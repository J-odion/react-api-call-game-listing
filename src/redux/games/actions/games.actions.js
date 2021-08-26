import GAMESERVICE from "../service.js/games.services";
import { ERROR_GETTING_GAMES, GOT_GAMES_SUCCESSFULLY } from "./../../types/index";

export const fetchGames = () => dispatch =>{
    GAMESERVICE.fetchGames()
    .then((response)=>{
        dispatch({
            type: GOT_GAMES_SUCCESSFULLY,
            payload: response.data
        })
    })
    .catch((error)=>{
        dispatch({
            type: ERROR_GETTING_GAMES,
            payload: error
        })
    })
}


