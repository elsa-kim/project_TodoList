import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import { useState } from "react";
import Add from "./components/Add";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  // const [darkmode, setDarkmode] = useState(false);
  const [darkmode, setDarkmode] = useLocalStorage("darkmode", false);
  const [itemList, setItemList] = useLocalStorage("itemList", [
    { todo: "청소하기", checked: false },
    { todo: "밥먹기", checked: false },
  ]);
  const [filter, setFilter] = useState("all");
  return (
    <div className="App" style={darkmode ? { backgroundColor: "#262b5c" } : { backgroundColor: "white" }}>
      <Navbar
        darkmode={darkmode}
        handleMode={() => setDarkmode((prev) => !prev)}
        className="nav"
        setFilter={setFilter}
        filter={filter}
      />
      <List darkmode={darkmode} className="list" itemList={itemList} setItemList={setItemList} filter={filter} />
      <Add darkmode={darkmode} className="add" setItemList={setItemList} />
    </div>
  );
}
