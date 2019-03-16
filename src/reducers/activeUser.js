import { SET_ACTIVE_USER } from '../actions/activeUser'

export default function activeUser(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return action.id
    default:
      return state
  }
}