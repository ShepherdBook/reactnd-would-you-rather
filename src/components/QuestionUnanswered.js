import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class QuestionUnanswered extends Component {
  render() {
    const { question, author } = this.props

    return (
      <Link to={`/questions/${question.id}`}>
        <div>
          <strong>Would you rather...</strong>
          <p>{question.optionOne.text}</p>
          <p>{question.optionTwo.text}</p>
          <img src={author.avatarURL} className='avatar' alt={`Avatar of ${author.name}`} />
          <p>{formatDate(question.timestamp)}</p>
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(QuestionUnanswered))