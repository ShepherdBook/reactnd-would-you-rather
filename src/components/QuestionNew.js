import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleCreateQuestion } from '../actions/questions'

class QuestionNew extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleOptionOneChange = (e) => {
    const newOptionOne = e.target.value

    this.setState(() => ({
      optionOne: newOptionOne
    }))
  }

  handleOptionTwoChange = (e) => {
    const newOptionTwo = e.target.value

    this.setState(() => ({
      optionTwo: newOptionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleCreateQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }

  render() {

    const { optionOne, optionTwo, toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3>Compose new question</h3>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Option one...' value={optionOne} onChange={this.handleOptionOneChange} />
          <input type='text' placeholder='Option two...' value={optionTwo} onChange={this.handleOptionTwoChange}/>
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(QuestionNew)