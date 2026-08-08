import { memo, useCallback, useState } from "react";
import TodoItem from "./TodoItem";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Optimize Performance", completed: false },
  { id: 3, text: "Build Awesome Apps", completed: false },
];

const TodoList = () => {
  const [todo, setTodo] = useState(initialTodos);

  const changeState = useCallback((id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  return (
    <div>
      <h2>Optimized Todo</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {todo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={changeState}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(TodoList);