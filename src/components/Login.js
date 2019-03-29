import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Click a user to login</p>
        <ul>
          {this.props.userIds.map((id) => (
            <li key={id}>
              <User id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users)
  return {
    userIds
  }
}

export default connect(mapStateToProps)(Login)