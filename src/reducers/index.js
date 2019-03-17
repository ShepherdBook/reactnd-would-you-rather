import { combineReducers } from 'redux'
import activeUser from '../reducers/activeUser'
import users from '../reducers/users'
import questions from '../reducers/questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  activeUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})