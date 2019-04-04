import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class QuestionUnanswered extends Component {
  render() {
    const { question, author } = this.props

    return (
      <div>
        <h3>Would you rather...</h3>
        <p>{question.optionOne.text}</p>
        <p>{question.optionTwo.text}</p>
        <img src={author.avatarURL} className='avatar' alt={`Avatar of ${author.name}`} />
        <p>{formatDate(question.timestamp)}</p>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(QuestionUnanswered)