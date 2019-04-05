import { RECEIVE_USERS, ADD_QUESTION_TO_HISTORY, ADD_VOTE_TO_USER } from '../actions/users'

// Deals with the "Users" slice of state
export default function users(state = {} , action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { // Return the existing users plus the action's users
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TO_HISTORY:
      const { activeUser, questionId } = action
      let author = {}
      author = {
          [activeUser]: { // Find the author
            ...state[activeUser], // Get the existing properties of it
            questions: state[activeUser].questions.concat([questionId]) // Set the questions equal to the old questions plus the new one
          }
        }
      return {
        ...state,
        ...author
      }
    case ADD_VOTE_TO_USER:
      const { qid, answer } = action
      return {
        ...users,
        [action.activeUser]: {
          ...state[action.activeUser],
          answers: {
            ...state[action.activeUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state
  }
}