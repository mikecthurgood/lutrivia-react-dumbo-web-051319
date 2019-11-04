import React from 'react'
import { Button } from 'semantic-ui-react'


const Controls = (props) => {
    return (
        <div className="controls">
            <div className="new"><Button content="New Game" onClick={props.newGame} /></div>
            <div className="score"><h2 >Score: {props.score}</h2></div>
        </div>
    )

}

export default Controls