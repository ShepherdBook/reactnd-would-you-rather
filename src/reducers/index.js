import { combineReducers } from 'redux'
import activeUserReducer from '../reducers/activeUser'
import usersReducer from '../reducers/questions'
import questionsReducer from '../reducers/questions'

export default combineReducers({
  activeUserReducer,
  usersReducer,
  questionsReducer
})