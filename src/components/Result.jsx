import React, {Component} from 'react';

class Result extends Component {

  render() {
    let props = this.props.props
    return(
        <div className="well">
          <h4>Your score is {props.score} out of {props.total}</h4>
          <br />
          <button className="btn btn-primary" onClick={props.reload} >Take quiz again</button>
        </div>
      )
  }
}

export default Result
