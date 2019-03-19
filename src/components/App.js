import React, { Component, Fragment } from 'react'
import QuestionList from './QuestionList'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import QuestionNew from './QuestionNew'
import Leaderboard from './Leaderboard'
import Login from './Login'
import QuestionDetail from './QuestionDetail'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null
              : <div>
                  <Navigation id={this.props.activeUser} />
                  <Route path='/' exact component={QuestionList} />
                  <Route path='/questions/:id' component={QuestionDetail} />
                  <Route path='/new' component={QuestionNew} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/login' component={Login} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ activeUser }) {
  return {
    activeUser,
    loading: activeUser === null
  }
}

export default connect(mapStateToProps)(App)