import axios from "axios";
import { useState } from "react";
import "./styles.css";

import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickRetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        res.data.map((todo) => todo.title);
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickRetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
