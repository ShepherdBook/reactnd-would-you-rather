import React, { Component } from 'react'

class Question extends Component {
  render() {
    return (
      <div>
        <p>Question {this.props.id}</p>
      </div>
    )
  }
}

export default Question