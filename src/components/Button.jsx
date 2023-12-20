import s from "./Button.module.css";
import React, { useState } from "react";

export default function Button({ item, setFilter, filter }) {
  const [isActive, setisActive] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setFilter(item);
        }}
        className={isActive ? s.active : s.btn}
      >
        {item}
      </button>
    </>
  );
}
