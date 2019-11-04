import React from 'react';
import Controls from './Components/Controls'
import QuestionContainer from './Components/QuestionContainer'
import './App.css'
const QUESTIONURL = 'http://localhost:3000/questions'


class App extends React.Component {

  state = {
    score: 0,
    questions: [],
    answers: []
  }

  componentDidMount() {
    fetch(QUESTIONURL)
      .then(resp => resp.json())
      .then(questions => this.setState({ questions }))
  }

  newGame = () => {
    this.setState({
      score: 0,
      answers: []
    })
  }

  answerQuestion = (e, id, answer) => {
    const playerAnswer = e.target.value === "true" ? true : false
    const newQ = this.state.answers.find(ans => ans.id === id)
    const newScore = answer === playerAnswer && !newQ ? this.state.score + 10 : this.state.score
    if (newQ) return
    else {
      this.setState({
        answers: [...this.state.answers, { id: id, playerAnswer: playerAnswer }],
        score: newScore
      })
    }

  }

  render() {
    return (
      <div className="Main">
        <br />
        <h1>Lutrivia</h1>
        <Controls score={this.state.score} newGame={this.newGame} />
        <QuestionContainer
          questions={this.state.questions}
          answerQuestion={this.answerQuestion}
          answers={this.state.answers}
        />
      </div>
    )
  }
}

export default App;
