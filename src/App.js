import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => {
      return [...currentArray, toDo];
    });
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write To do"
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <h3>할 일 목록</h3>
      <ul>
        {toDos.map((todo, index) => <li>{todo}</li>)}
      </ul>
    </div>
  );
}
export default App;
