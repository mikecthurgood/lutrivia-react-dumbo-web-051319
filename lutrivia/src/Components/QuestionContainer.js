import React from 'react'
import Question from './Question'

const QuestionContainer = (props) => {

    const questions = props.questions
    return (
        <>
            {questions.map(question =>
                <Question
                    question={question}
                    key={question.id}
                    answerQuestion={props.answerQuestion}
                    playerAnswer={props.answers.filter(ans => ans.id === question.id)}
                />
            )}
        </>
    )
}

export default QuestionContainer