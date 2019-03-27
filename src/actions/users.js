export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_HISTORY = 'ADD_QUESTION_TO_HISTORY'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addQuestionToHistory(activeUser, questionId) {
  return {
    type: ADD_QUESTION_TO_HISTORY,
    activeUser,
    questionId
  }
}