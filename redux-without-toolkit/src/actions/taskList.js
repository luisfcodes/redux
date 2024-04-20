import * as t from '@/constants';

export const addTask = (task) => {
  return {
    type: t.ADD_TASK,
    payload: task
  }
}

export const removeTask = (index) => {
  return {
    type: t.REMOVE_TASK,
    payload: index
  }
}

export const clearTaskList = () => {
  return {
    type: t.CLEAR_TASK_LIST
  }
}