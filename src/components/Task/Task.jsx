import React from "react";
import s from "./Task.module.css";

export const Task = ({ inputValue, deleteTodo, id, toggleDone, isDone }) => {
  return (
    <li className={s.list__item}>
      <label className={s.todo}>
        <input
          type="checkbox"
          className={s.todo__done}
          checked={isDone}
          onChange={() => toggleDone(id)}
        />
        <span className={s.todo__name}>{inputValue}</span>
      </label>
      <button onClick={() => deleteTodo(id)} className={s.todo__delete}>
        ❌
      </button>
    </li>
  );
};
