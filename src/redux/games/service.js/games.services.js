import axios from "axios";
import { KIDS_GAMES_ENDPOINT } from "./root-endpoints";

const fetchGames = async () =>{
    const header ={
        "Access-Control-Allow-Origin": "*"
    }
    const response = await axios.get(KIDS_GAMES_ENDPOINT, header);
    return response;
}




const GAMESERVICE = {
    fetchGames
}

export default GAMESERVICE;