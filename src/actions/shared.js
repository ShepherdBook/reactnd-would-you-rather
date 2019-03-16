import { getInitialData } from '../utils/api'
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setActiveUser } from './activeUser'

const ACTIVE_ID = 'johndoe'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setActiveUser(ACTIVE_ID))
      })
  }
}