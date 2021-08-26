// react AND hooks
import React, {useEffect, useState} from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';

//components
import { SEARCH_RESULT } from '../../redux/types';


// COMPONENT THAT HANDLES THE LIVE SEARCH OF GAMES
export const SearchBox = () => {

    // REDUX CALL HANDLER
    const dispatch = useDispatch()

    // USER KEYWORD HOLDER
    const [searchKeyword, setSearchKeyword] = useState(null)
    
    // REETRIEVE GAMES FROM THE REDUX STORE
    const { games } = useSelector(state => state.availableGames)

    // FUNCTION THAT COLLECTS THE USER KEYWORDS BY LETTERS FROM THE INPUT
    const handleChange = (event)=>{
        setSearchKeyword(event.target.value);
    }

    useEffect(() => {
        if(searchKeyword){// ONLY RUN IF THE USER START TYPING

            // GET THE USER KEYWORDS LETTER BY LETTER AND FILTER GAMES THAT RYTHMS WITH THEM ON THE GO
            const result = games.filter(game=>game.Topic.toLowerCase().includes(searchKeyword.toLowerCase()));

            // STORE THE RESULT TO REDUX FOR THE GAME COMPONENT TO RENDER
            dispatch({
                type: SEARCH_RESULT,
                payload: {result, searchKeyword}
            })
        }
    }, [dispatch, searchKeyword, games])

    return (
        <React.Fragment>
            {/* SET MAXIMUM LENGTH FOR THE SEARCHABLE KEYWORD, USERS CAN KEEP TYPING */}
            <input placeholder="Search Games by topic" maxLength="10" onChange={handleChange}/>
        </React.Fragment>
    )
}
