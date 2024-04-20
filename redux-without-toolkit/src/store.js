import { createStore } from 'redux'
import * as t from '@/constants'

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case t.INCREMENT:
      return { count: state.count + 1 }
    case t.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const store = createStore(reducer)