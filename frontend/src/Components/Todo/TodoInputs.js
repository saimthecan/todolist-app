import React, { useState } from "react";
import { todoInputStyles } from "./TodoListStyles";

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={todoInputStyles.todoInputForm}
        className="todo-input-form"
      >
        <input
          className="input"
          style={todoInputStyles.input}
          placeholder="Add Todo"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoInput;
