import * as t from '@/constants'

export default function taskHistory(state = [], action) {
  switch (action.type) {
    case t.ADD_TASK_IN_HISTORY:
      return [...state, action.payload]
    case t.REMOVE_TASK_FROM_HISTORY:
      return state.filter((_, index) => index !== action.payload)
    case t.CLEAR_TASK_HISTORY:
      return []
    default:
      return state
  }
}