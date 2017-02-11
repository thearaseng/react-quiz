import React, {Component} from 'react';
import Question from './Question.jsx'

class QuestionList extends Component {

  render() {
    return(
        <div>
          {
            this.props.questions.map(question => {
              return(<Question key={question.id} question={question} />)
            })
          }
        </div>
      )
  }
}

export default QuestionList
