import React, { Component, Fragment } from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Dashboard />}
      </Fragment>
    )
  }
}

function mapStateToProps({ activeUser }) {
  return {
    loading: activeUser === null
  }
}

export default connect(mapStateToProps)(App)