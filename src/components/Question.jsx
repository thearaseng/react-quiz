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
                    {choice.id} <input type="radio" onChange={this.onChange.bind(this)} /> {choice.text}
                  </li>
                  )
              })
            }
          </ul>
        </div>
      )
  }

  onChange(){
    console.log('fuck')
  }

}

export default Question
