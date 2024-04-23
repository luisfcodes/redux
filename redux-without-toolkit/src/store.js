"use client";
import { combineReducers, createStore } from "redux";
import { taskList, taskHistory } from "./reducers";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

function loadState() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
}

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error(err);
  }
}

const reducer = combineReducers({
  tasks: taskList,
  history: taskHistory,
});

function StoreInitializer({ children }) {
  const [preloadedState, setPreloadedState] = useState(undefined);

  useEffect(() => {
    const initialState = loadState();

    setPreloadedState(initialState);
  }, []);

  const store = createStore(reducer, preloadedState);

  const unsubscribe = store.subscribe(() => {
    saveState(store.getState());
  });

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, [unsubscribe]);

  return <Provider store={store}>{children}</Provider>;
}

export { StoreInitializer };
