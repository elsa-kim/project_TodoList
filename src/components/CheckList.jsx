import React, { useState } from "react";
import s from "./CheckList.module.css";
import { BsTrash3Fill } from "react-icons/bs";

export default function CheckList({ darkmode, item, deleteItem, idx, setItemList, itemList }) {
  const [checked, setChecked] = useState();
  let changeCheckArray = itemList;
  return (
    <div className={s.list}>
      <input
        type="checkbox"
        className={s.checkbox}
        onChange={() => {
          changeCheckArray[idx].checked = !changeCheckArray[idx].checked;
          setItemList(changeCheckArray);
          setChecked(item.checked);
        }}
        checked={checked}
      />
      <p className={checked ? s.check_item : s.item} style={darkmode ? { color: "white" } : { color: "black" }}>
        {item.todo}
      </p>
      <BsTrash3Fill
        style={
          darkmode
            ? { borderRadius: "50px", padding: "2px", backgroundColor: "gray", color: "white" }
            : { borderRadius: "50px", padding: "2px", backgroundColor: "gray" }
        }
        onClick={() => {
          deleteItem(idx);
        }}
      />
    </div>
  );
}
