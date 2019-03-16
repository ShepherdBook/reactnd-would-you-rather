import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class Question extends Component {
  render() {
    const { question, author } = this.props

    return (
      <div>
        <h3>Would you rather...</h3>
        <p>{question.optionOne.text} OR {question.optionTwo.text}?</p>
        <p>Asked by {author.name} on {formatDate(question.timestamp)}</p>
      </div>
    )
  }
}

function mapStateToProps({ activeUser, users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author]

  return {
    activeUser,
    question,
    author
  }
}

export default connect(mapStateToProps)(Question)