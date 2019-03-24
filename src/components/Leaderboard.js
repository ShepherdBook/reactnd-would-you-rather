import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserDetail from './UserDetail'

class Leaderboard extends Component {

  render() {

    function calcScore(user) {
      const questions = user.questions.length
      const answers = Object.keys(user.answers).length
      return questions + answers
    }

    const { users } = this.props

    const userIds = Object.keys(users)
      .sort((a, b) => calcScore(users[b]) - calcScore(users[a]))

    return (
      <div>
        <h3>Leaderboard</h3>
        <ol>
          {userIds.map((id) => (
            <li key={id}>
              <UserDetail id={id} />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }) {
  return {users, questions}
}

export default connect(mapStateToProps)(Leaderboard)