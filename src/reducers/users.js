import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {} , action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        // Add the users from the action to the state
        ...state,
        ...action.users
      }
    default:
      return state
  }
}