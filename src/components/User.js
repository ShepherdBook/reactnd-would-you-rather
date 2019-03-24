import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <img src={user.avatarURL} className='avatar' alt={`Avatar of ${user.name}`} /> | {user.name}
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id]
  return { user }
}

export default connect(mapStateToProps)(User)