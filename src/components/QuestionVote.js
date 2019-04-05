import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { handleSaveAnswer } from '../actions/users';

class QuestionVote extends Component {

  handleClick = (e, vote) => {
    e.preventDefault()

    const { question, dispatch } = this.props

    dispatch(handleSaveAnswer(
      question.id,
      vote
    ))
  }

  render() {

    const { activeUser, question, author } = this.props

    const activeUserAnsweredOne = 
      question.optionOne.votes.includes(activeUser)

    const activeUserAnsweredTwo = 
      question.optionTwo.votes.includes(activeUser)

    return (
      <div>
        <h3>Would you rather...</h3>
        <p>{question.optionOne.text}</p>
        <button onClick={(e) => this.handleClick(e, 'optionOne')}>Vote</button>
        <p>{question.optionTwo.text}</p>
        <button onClick={(e) => this.handleClick(e, 'optionTwo')}>Vote</button>
        {activeUserAnsweredOne && <p>You said {question.optionOne.text}!</p>}
        {activeUserAnsweredTwo && <p>You said {question.optionTwo.text}!</p>}
        <div>
        <img src={author.avatarURL} className='avatar' alt={`Avatar of ${author.name}`} />
        <p>{formatDate(question.timestamp)}</p>
        </div>
        
      </div>
    )
  }
}

function mapStateToProps({ activeUser, questions, users }, props) {
  const { id } = props.match.params

  const question = questions[id]
  const author = users[question.author]

  console.log('Users', users)

  return {
    id,
    activeUser,
    question,
    author
  }
}

export default connect(mapStateToProps)(QuestionVote)