import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { setActiveUser } from '../actions/activeUser'

class Login extends Component {

  handleClick = (e, id) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(setActiveUser(id))
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Click a user to login</p>
        <ul>
          {this.props.userIds.map((id) => (
            <li key={id}>
              <button onClick={(e) => this.handleClick(e, id)}>
                <User id={id} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users, dispatch }) {
  const userIds = Object.keys(users)
  return {
    userIds,
    dispatch
  }
}

export default connect(mapStateToProps)(Login)