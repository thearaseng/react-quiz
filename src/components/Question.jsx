import React, {Component} from 'react';

class Question extends Component {

  render() {
    let question = this.props.question
    return(
        <div className="well">
          <h3>{question.text}</h3>
          <hr />
          <ul className="list-group">
            {
              question.choices.map(choice => {
                return(
                  <li key={choice.id} className="list-group-item">
                    {choice.id} <input name={'question-'+question.id} type="radio" onChange={this.onChange.bind(choice)} /> {choice.text}
                  </li>
                  )
              })
            }
          </ul>
        </div>
      )
  }

  onChange(){
    console.log(this.text)
  }

}

export default Question
