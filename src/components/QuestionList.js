import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionUnanswered from './QuestionUnanswered';
import QuestionAnswered from './QuestionAnswered';

class QuestionList extends Component {

  render() {
    return (
      <div>
        <h3>Unanswered Questions</h3>
        <ul>
          {this.props.unansweredQuestionIds.map((id) => (
            <li key={id}>
              <QuestionUnanswered id={id} />
            </li>
          ))}
        </ul>
        <h3>Answered Questions</h3>
        <ul>
          {this.props.answeredQuestionIds.map((id) => (
            <li key={id}>
              <QuestionAnswered id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions, activeUser }) {

  return {
    answeredQuestionIds: Object.keys(questions)
      .filter(key => (questions[key].optionOne.votes.includes(activeUser) || questions[key].optionTwo.votes.includes(activeUser)))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unansweredQuestionIds: Object.keys(questions)
      .filter(key => (!questions[key].optionOne.votes.includes(activeUser) && !questions[key].optionTwo.votes.includes(activeUser)))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(QuestionList)