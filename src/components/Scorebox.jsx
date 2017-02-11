import React, {Component} from 'react';

class Scorebox extends Component {

  render() {
    let props = this.props
    return(
        <div className="well">
          Question {props.current} of {props.count} <span className="pull-right"><strong>Score : {props.score}</strong></span>
        </div>
      )
  }
}

export default Scorebox
