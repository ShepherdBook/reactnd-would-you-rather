import React, { Component, Fragment } from 'react'
import QuestionList from './QuestionList'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import User from './User'
import Navigation from './Navigation'

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
                  <Navigation />
                  <Route path='/' exact component={QuestionList} />
                  {/* <Route path='leaderboard' exact component={Leaderboard} />
                  <Route path='new' exact component={NewQuestion} />
                  <Route path='login' exact component={Login} /> */}
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ activeUser }) {
  return {
    loading: activeUser === null
  }
}

export default connect(mapStateToProps)(App)