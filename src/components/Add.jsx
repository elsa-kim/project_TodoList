import useLocalStorage from "../hooks/useLocalStorage";
import s from "./Add.module.css";
import React, { useState } from "react";

export default function Add({ darkmode, setItemList }) {
  const [inputItem, setInputItem] = useLocalStorage("inputItem", "");
  const handleAdd = (e) => {
    setInputItem(e.target.value);
  };
  const handleListAdd = (e) => {
    setItemList((prev) => [...prev, { todo: inputItem, checked: false }]);
    setInputItem((prev) => "");
  };
  return (
    <div
      className={s.add_containter}
      style={darkmode ? { backgroundColor: "#1f1e4c" } : { backgroundColor: "#e7e7e8" }}
    >
      <input type="text" placeholder="Add Todo" className={s.input} onChange={handleAdd} value={inputItem} />
      <button className={s.add} onClick={handleListAdd}>
        Add
      </button>
    </div>
  );
}
