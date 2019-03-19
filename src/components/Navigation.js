import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import User from './User'

class Navigation extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <User id={this.props.id} />
          </li>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
          </NavLink>
          </li>
          <li>
            <NavLink to='leaderboard' exact activeClassName='active'>
              Leaderboard
          </NavLink>
          </li>
          <li>
            <NavLink to='new' activeClassName='active'>
              New Question
          </NavLink>
          </li>
          <li>
            <NavLink to='login' activeClassName='active'>
              Logout
          </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation