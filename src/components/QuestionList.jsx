import React, {Component} from 'react';
import Question from './Question.jsx'

class QuestionList extends Component {

  render() {
    let question = this.props.question
    return(
        <div>
          <Question key={question.id} question={question} answer={this.setAnswer.bind({com: this, question: question})} />
        </div>
      )
  }

  setAnswer(answer){
    this.com.props.nextAnswer()
    if(this.question.correct == answer){
      this.com.props.answerRight()
    }
  }
}

export default QuestionList
