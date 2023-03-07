import React from "react";
import s from "./List.module.css";
import { Task } from "../Task/Task";

export const List = ({
  inputValue,
  setInput,
  todosArray,
  createTodosArray,
  deleteTodo,
  deleteAll,
  toggleDone,
  deleteSelected,
}) => {
  return (
    <>
      <div className={s.container}>
        {/* ФОРМА ДЛЯ ВВОДА ДАННЫХ  */}
        <form
          className={s.add_field}
          onSubmit={(ev) => {
            ev.preventDefault();
            createTodosArray();
          }}
        >
          {/* INPUT_FIELD */}
          <input
            className={s.form__input}
            placeholder="Введите задачу"
            value={inputValue}
            onChange={(ev) => {
              setInput(ev.target.value);
            }}
          />
          {/* ADD_BUTTON */}
          <button className={`${s.form__button} ${s.add}`}>Добавить</button>
        </form>
        {/* БЛОК СО СПИСКОМ ЗАДАЧ  */}
        <ul
          className={`${s.list} ${todosArray.length ? s.display_block : null}`}
        >
          {todosArray.map((el) => (
            <Task
              inputValue={el.text}
              key={el.id}
              id={el.id}
              deleteTodo={deleteTodo}
              toggleDone={toggleDone}
              isDone={el.done}
            />
          ))}
        </ul>
        {/* ПОЛЕ ДЛЯ УДАЛЕНИЯ ДАННЫХ */}
        <div
          className={`${s.delete_field} ${
            todosArray.length ? s.display_flex : null
          }`}
        >
          {/* DELETE_DONE_BUTTON */}
          <label>
            <button
              className={`${s.form__button} ${s.delete_done}`}
              onClick={() => deleteSelected()}
            >
              Удалить завершенные
            </button>
          </label>
          {/* DELETE_ALL_BUTTON  */}
          <label>
            <button
              className={`${s.form__button} ${s.delete_all}`}
              onClick={() => deleteAll()}
            >
              Удалить все
            </button>
          </label>
        </div>
      </div>
    </>
  );
};
