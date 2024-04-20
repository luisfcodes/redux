import * as t from '@/constants';

export const addTaskInHistory = (task) => {
  return {
    type: t.ADD_TASK_IN_HISTORY,
    payload: task
  }
}

export const removeTaskFromHistory = (index) => {
  return {
    type: t.REMOVE_TASK_FROM_HISTORY,
    payload: index
  }
}

export const clearTaskHistory = () => {
  return {
    type: t.CLEAR_TASK_HISTORY
  }
}