import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./context/TodoContext";
import {
  createTodo,
  allTodos,
  updateTodo,
  deleteTodo,
} from "./context/actions";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [state, dispatch] = useContext(TodoContext);
  const { todos } = state;

  useEffect(() => {
    allTodos(dispatch);
  }, [dispatch]);

  const handleTodoAdded = () => {
    const text = todoText.trim();
    if (text.length) {
      createTodo(dispatch, { text, complate: false });
      setTodoText("");
    }
  };

  const handleTodoUpdate = (e, todo) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    updateTodo(dispatch, { ...todo, complate: value });
  };

  const handleTodoDelete = (todoId) => {
    deleteTodo(dispatch, todoId);
  };

  return (
    <div className="app-container">
      <h1 className="app-header">TO DO LIST</h1>
      <div className="add-task">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          autoComplete="off"
          placeholder="Add New Task"
          className="task-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleTodoAdded();
            }
          }}
        />
        <input
          type="submit"
          value=""
          className="submit-task"
          title="Add Task"
          onClick={() => handleTodoAdded()}
        />
      </div>
      <ul className="task-list">
        {todos.map((todo, index) => (
          <li key={index} className="task-list-item">
            <label className="task-list-item-label">
              <input
                name="complate"
                type="checkbox"
                checked={todo.complate}
                onChange={(event) => handleTodoUpdate(event, todo)}
              />
              <span>{todo.text}</span>
            </label>
            <span
              onClick={() => handleTodoDelete(todo._id)}
              className="delete-btn"
              title="Delete Task"
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
