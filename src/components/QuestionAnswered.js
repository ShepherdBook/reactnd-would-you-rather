import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class QuestionAnswered extends Component {

  render() {

    const { question, author, userCount, activeUser } = this.props

    const optionOneVoteCount = question.optionOne.votes.length
    const optionTwoVoteCount = question.optionTwo.votes.length

    const optionOnePercentage = (optionOneVoteCount === 0 
      ? 0 
      : (optionOneVoteCount / userCount)).toFixed(2) * 100

    const optionTwoPercentage = (optionTwoVoteCount === 0 
      ? 0 
      : (optionTwoVoteCount / userCount)).toFixed(2) * 100

    const activeUserAnsweredOne = 
      question.optionOne.votes.includes(activeUser)

    const activeUserAnsweredTwo = 
      question.optionTwo.votes.includes(activeUser)

    return (
      <div>
        <h3>Would you rather...</h3>
        <p><b>{question.optionOne.text}</b> - {optionOnePercentage}% chose this ({optionOneVoteCount})</p>
        <p><b>{question.optionTwo.text}</b> - {optionTwoPercentage}% chose this ({optionTwoVoteCount})</p>
        {activeUserAnsweredOne && <p>You said {question.optionOne.text}!</p>}
        {activeUserAnsweredTwo && <p>You said {question.optionTwo.text}!</p>}
        <img src={author.avatarURL} className='avatar' alt={`Avatar of ${author.name}`} />
        <p>{formatDate(question.timestamp)}</p>
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

export default connect(mapStateToProps)(QuestionAnswered)