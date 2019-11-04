import React from 'react'
import { Button } from 'semantic-ui-react'


const Question = (props) => {
    const { id, text, answer } = props.question
    // const playerAnswer = props.playerAnswer[0].playerAnswer === answer ? true
    const handleClick = (e) => {
        props.answerQuestion(e, id, answer)
    }
    const answered = props.playerAnswer.find(ans => ans.id === id)

    return (
        <div className="question-container">
            <div className="question">
                <h3>{props.question.text}</h3>
                <Button.Group size='large' onClick={handleClick}>
                    answered? <Button positive value="true" content="True" />
                    <Button negative value="false" content="False" />
                </Button.Group>
                <div className="answer">
                    <br />
                </div>
            </div>

        </div>
    )
}

export default Question 
