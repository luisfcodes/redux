import { createStore, combineReducers } from 'redux'
import { taskList, taskHistory } from './reducers'

const reducer = combineReducers({
  tasks: taskList,
  history: taskHistory
})

export const store = createStore(reducer)