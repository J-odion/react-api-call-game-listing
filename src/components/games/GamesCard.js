// react
import React from 'react';

export const GamesCard = ({GameTitle, GameDescription, GameImage}) => {
    return (
        <React.Fragment>
            <div className="game_card">
                <img src={GameImage} alt={`${GameTitle} Avatar`} style={{width:"100%"}}/>
                <div className="game_caption">
                    <h4 className="game_title"><b>{GameTitle}</b></h4> 
                    <p className="game_description">{GameDescription}</p> 
                </div>
            </div>
        </React.Fragment>
    )
}
