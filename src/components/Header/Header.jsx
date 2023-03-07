import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.header__title}>ToDo List</h1>
    </header>
  );
};
