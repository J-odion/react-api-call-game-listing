import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_RESULT } from '../../redux/types';
import './dropdown.css';

// HELPER FUNCTION
import { getGroupOption, getLevelOption } from './../_helper/getOptions';

export const Dropdown = () => {
    const dispatch = useDispatch();

    const [filterByGroup, setFilterByGroup] = useState("");
    const [filterByLevel, setFilterByLevel] = useState("");


    const { games } = useSelector(state => state.availableGames)

    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        console.log(filterByGroup && filterByGroup ? "true" : "False");
        if(filterByGroup){// FILTER ONLY BY GROUP
            console.log("1");
            const result = games.filter((game)=>game.Group === filterByGroup)
            dispatch({
                type: FILTER_RESULT,
                payload: {result, filterByGroup}
            })
        }else if(filterByLevel){// FILTER ONLY BY LEVEL
            console.log("2");
            const result = games.filter((game)=>game.Level === filterByLevel)
            dispatch({
                type: FILTER_RESULT,
                payload: {result, filterByGroup}
            })
            console.log(result);
        }else if(filterByGroup && filterByGroup){
            console.log("3");
            const findByGroup = games.filter((game)=>game.Group === filterByGroup)
            const findByLevel = findByGroup.filter((game)=>game.Level === filterByLevel)
            console.log(findByLevel);
            dispatch({
                type: FILTER_RESULT,
                payload: {result: findByLevel, filterBy:"Group and Level"}
            })
        }
    }, [games, dispatch, filterByLevel, filterByGroup])

    // FUNCTION THAT HANDLES THE SUBMITION FUNCTION
    const handleSubmit = () =>{
        return null
    }

    // FUNCTION THAT HANDLES THE GROUP DROPDOWN SELECTION
    const handleGroupChange = (event) =>{
        setFilterByGroup(event.target.value)
    }


    // FUNCTION THAT HANDLES THE LEVEL DROPDOWN SELECTION
    const handleLevelChange = (event) =>{
        setFilterByLevel(event.target.value)
    }



    return (
        <React.Fragment>
            <section className="filter__container">

                {
                    showFilter ? (

                        <form onSubmit={handleSubmit} className="filter__form">
                            <div className="group__selection">
                                <label>
                                    Group:
                                </label>
                                <select value={filterByGroup} onChange={handleGroupChange}>
                                    <option>Select any option</option>
                                    {
                                        getGroupOption(games)?.map(({Group, GameTitle})=>{
                                            return(
                                                <option value={Group} key={GameTitle}>{Group}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="level__selection">
                                <label>
                                    Level:
                                </label>
                                <select value={filterByLevel} onChange={handleLevelChange}>
                                    <option>Select any option</option>
                                    {
                                        
                                        getLevelOption(games)?.map(({Level, GameTitle})=>{
                                            return(
                                                <option value={Level} key={GameTitle}>{Level}</option>
                                                )
                                            })
                                        }
                                </select>
                            </div>
                        </form>
                    ):(
                        <button className="filter_btn" onClick={()=>setShowFilter(true)}>Filter Games</button>
                    )
                }
            </section>
        </React.Fragment>
    )
}
