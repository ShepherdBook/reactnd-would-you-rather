import { combineReducers } from 'redux'
import activeUser from '../reducers/activeUser'
import users from '../reducers/questions'
import questions from '../reducers/questions'

export default combineReducers({
  activeUser,
  users,
  questions
})