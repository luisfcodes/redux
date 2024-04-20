import * as t from '@/constants'

export default function taskList(state = [], action) {
  switch (action.type) {
    case t.ADD_TASK:
      return [...state, action.payload]
    case t.REMOVE_TASK:
      return state.filter((_, index) => index !== action.payload)
    case t.CLEAR_TASK_LIST:
      return []
    default:
      return state
  }
}