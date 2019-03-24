import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <img src={user.avatarURL} className='avatar' alt={`Avatar of ${user.name}`} /> | {user.name} | {user.questions.length} questions | {Object.keys(user.answers).length} answers
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id]
  return { user }
}

export default connect(mapStateToProps)(UserDetail)