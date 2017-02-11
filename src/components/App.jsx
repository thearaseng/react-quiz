import React, {Component} from 'react';
import QuestionList from './QuestionList.jsx'
import Scorebox from './Scorebox.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      questions : [
        {
          id:1,
          text:'What is your name?',
          choices:[
            {
              id:'a',
              text:'Theara'
            },
            {
              id:'b',
              text:'Dara'
            },
            {
              id:'c',
              text:'Veasna'
            },
            {
              id:'d',
              text:'Srey Oun'
            }
          ],
          correct:'a'
        },
        {
          id:2,
          text:'What is your university?',
          choices:[
            {
              id:'a',
              text:'IFL'
            },
            {
              id:'b',
              text:'RUPP'
            },
            {
              id:'c',
              text:'Setec'
            },
            {
              id:'d',
              text:'Norton'
            }
          ],
          correct:'d'
        },
        {
          id:3,
          text:'What field do you take in colleage?',
          choices:[
            {
              id:'a',
              text:'Health Care'
            },
            {
              id:'b',
              text:'Computer Science'
            },
            {
              id:'c',
              text:'Accountant'
            },
            {
              id:'d',
              text:'Business'
            }
          ],
          correct:'b'
        },
      ],
      score:0,
      current:1
    }
  }

  render() {
    let state = this.state
    return(
        <div>
          <Scorebox current={state.current} count={state.questions.length} score={state.score}/>
          <QuestionList questions={state.questions} ></QuestionList>
        </div>
      )
  }
}

export default App
