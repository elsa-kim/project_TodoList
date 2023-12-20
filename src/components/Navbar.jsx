import s from "./Navbar.module.css";
import React, { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import Button from "./Button";

export default function Navbar({ darkmode, handleMode, setFilter, filter }) {
  return (
    <div className={s.nav} style={darkmode ? { backgroundColor: "#1f1e4c" } : { backgroundColor: "#e7e7e8" }}>
      {darkmode ? (
        <BsFillSunFill style={{ color: "white", cursor: "pointer" }} onClick={() => handleMode()} />
      ) : (
        <BsMoonFill style={{ color: "#1f1e4c", cursor: "pointer" }} onClick={() => handleMode()} />
      )}
      <div className={s.btn}>
        <Button setFilter={setFilter} filter={filter} item={"All"} />
        <Button setFilter={setFilter} filter={filter} item={"Active"} />
        <Button setFilter={setFilter} filter={filter} item={"Completed"} />
      </div>
    </div>
  );
}
