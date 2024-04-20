"use client";
import { connect } from "react-redux";
import { useState } from "react";
import { CheckFat, Trash, Watch } from "@phosphor-icons/react";
import {
  addTask,
  addTaskInHistory,
  removeTask,
  removeTaskFromHistory,
  clearTaskHistory,
  clearTaskList,
} from "@/actions";

import * as S from "./styles";

function Home({
  tasks,
  history,
  addTask,
  removeTask,
  addTaskInHistory,
  removeTaskFromHistory,
  clearTaskList,
  clearTaskHistory,
}) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    const cleanString = task.replace(/[^a-zA-Z0-9À-ž\s]/g, "");

    if (cleanString) {
      addTask(cleanString);
    }

    setTask("");
  };

  const handleRemoveTask = (index) => {
    removeTask(index);
    addTaskInHistory(tasks[index]);
  };

  const handleRemoveTaskFromHistory = (index) => {
    removeTaskFromHistory(index);
  };

  const handleClearTaskList = () => {
    clearTaskList();
  };

  const handleClearTaskHistory = () => {
    clearTaskHistory();
  };

  return (
    <S.Container>
      <h1>Task List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask} disabled={!task}>
          Add
        </button>
      </div>

      {tasks.length > 0 && (
        <ul className="task-list">
          <div className="header">
            <h2>Task List</h2>
            <button onClick={handleClearTaskList}>Clear</button>
          </div>

          {tasks.map((task, index) => (
            <li key={index}>
              <div>
                <Watch size={20} weight="bold" className="pending-icon" />
                <span>{task}</span>
              </div>
              <button onClick={() => handleRemoveTask(index)}>
                <Trash size={22} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {history.length > 0 && (
        <ul className="task-history">
          <div className="header">
            <h2>Task History</h2>
            <button onClick={handleClearTaskHistory}>Clear</button>
          </div>

          {history.map((task, index) => (
            <li key={index}>
              <div>
                <CheckFat size={20} className="check-icon" />
                <span>{task}</span>
              </div>
              <button onClick={() => handleRemoveTaskFromHistory(index)}>
                <Trash size={22} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </S.Container>
  );
}

const mapStateToProps = ({ tasks, history }) => {
  return {
    tasks,
    history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    removeTask: (index) => dispatch(removeTask(index)),
    clearTaskList: () => dispatch(clearTaskList()),
    addTaskInHistory: (task) => dispatch(addTaskInHistory(task)),
    removeTaskFromHistory: (index) => dispatch(removeTaskFromHistory(index)),
    clearTaskHistory: () => dispatch(clearTaskHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
