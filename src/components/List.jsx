import s from "./List.module.css";
import React, { useState } from "react";
import CheckList from "./CheckList";

export default function List({ darkmode, itemList, setItemList, filter }) {
  const deleteItem = (idx) => {
    setItemList((itemList) => itemList.slice(0, idx).concat(itemList.slice(idx + 1)));
    console.log(itemList);
  };
  switch (filter) {
    case "All":
      return (
        <div className={s.listbox}>
          {itemList.map((item, idx) => (
            <div key={idx}>
              <CheckList
                darkmode={darkmode}
                item={item}
                deleteItem={deleteItem}
                idx={idx}
                setItemList={setItemList}
                itemList={itemList}
              />
            </div>
          ))}
        </div>
      );
    case "Active":
      return (
        <div className={s.listbox}>
          {
            itemList.map(
              (item, idx) =>
                item.checked === false && (
                  <div key={idx}>
                    <CheckList
                      darkmode={darkmode}
                      item={item}
                      deleteItem={deleteItem}
                      idx={idx}
                      setItemList={setItemList}
                      itemList={itemList}
                    />
                  </div>
                )
            )
            // .filter((item) => item.checked === false)
          }
        </div>
      );
    case "Completed":
      return (
        <div className={s.listbox}>
          {itemList.map(
            (item, idx) =>
              item.checked === true && (
                <div key={idx}>
                  <CheckList
                    darkmode={darkmode}
                    item={item}
                    deleteItem={deleteItem}
                    idx={idx}
                    setItemList={setItemList}
                    itemList={itemList}
                  />
                </div>
              )
          )}
        </div>
      );
    default:
      return (
        <div className={s.listbox}>
          {
            itemList.map((item, idx) => (
              <div key={idx}>
                <CheckList
                  darkmode={darkmode}
                  item={item}
                  deleteItem={deleteItem}
                  idx={idx}
                  setItemList={setItemList}
                  itemList={itemList}
                />
              </div>
            ))
            // .filter((item) => item.checked === true)
          }
        </div>
      );
  }
}
