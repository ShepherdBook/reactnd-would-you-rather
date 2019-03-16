import { RECEIVE_QUESTIONS } from '../actions/questions'

// Deals with the "Questions" slice of state
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { // Return the existing questions plus the action's questions
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}