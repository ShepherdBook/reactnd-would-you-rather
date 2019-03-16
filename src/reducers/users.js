import { RECEIVE_USERS } from '../actions/users'

// Deals with the "Users" slice of state
export default function users(state = {} , action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { // Return the existing users plus the action's users
        ...state,
        ...action.users
      }
    default:
      return state
  }
}