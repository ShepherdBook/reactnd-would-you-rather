import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDetail from './QuestionDetail'
import User from './User';

class Dashboard extends Component {
  state = {
    showAnsweredQuestions: false
  }
  // local state to track showAnsweredQuestions toggle

  render() {
    return (
      <div>
        <User />
        <h3>Unanswered Questions</h3>
        <ul>
          {this.props.unansweredQuestionIds.map((id) => (
            <li key={id}>
              <QuestionDetail id={id} />
            </li>
          ))}
        </ul>
        <h3>Answered Questions</h3>
        <ul>
          {this.props.answeredQuestionIds.map((id) => (
            <li key={id}>
              <QuestionDetail id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {

  return {
    answeredQuestionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unansweredQuestionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(Dashboard)