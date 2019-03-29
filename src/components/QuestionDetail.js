import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class QuestionDetail extends Component {
  render() {
    const { question, author, userCount } = this.props

    const optionOneVoteCount = question.optionOne.votes.length
    const optionTwoVoteCount = question.optionTwo.votes.length

    const optionOnePercentage = (optionOneVoteCount === 0 
      ? 0 
      : (optionOneVoteCount / userCount)).toFixed(2) * 100

    const optionTwoPercentage = (optionTwoVoteCount === 0 
      ? 0 
      : (optionTwoVoteCount / userCount)).toFixed(2) * 100

    return (
      <div>
        <h3>Would you rather...</h3>
        <p><b>{question.optionOne.text}</b> - {optionOnePercentage}% chose this ({optionOneVoteCount})</p>
        <p><b>{question.optionTwo.text}</b> - {optionTwoPercentage}% chose this ({optionTwoVoteCount})</p>
        <p>Asked by {author.name} on {formatDate(question.timestamp)}</p>

      </div>
    )
  }
}

function mapStateToProps({ activeUser, users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author]

  const userCount = Object.keys(users).length

  return {
    activeUser,
    userCount,
    question,
    author
  }
}

export default connect(mapStateToProps)(QuestionDetail)