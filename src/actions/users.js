import { saveAnswer } from "../utils/api";
import { addVoteToQuestion } from "./questions";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_HISTORY = 'ADD_QUESTION_TO_HISTORY'
export const ADD_VOTE_TO_USER = 'ADD_VOTE_TO_USER'

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

function addVoteToUser(qid, activeUser, answer) {
  return {
    type: ADD_VOTE_TO_USER,
    qid,
    activeUser,
    answer
  }
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { activeUser } = getState()

    return saveAnswer({
      authedUser: activeUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(addVoteToQuestion(qid, activeUser, answer))
        dispatch(addVoteToUser(qid, activeUser, answer))
      })
  }
}