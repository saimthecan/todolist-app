import React from "react";
import { todoItemStyles } from "./TodoListStyles";

function TodoItem({ todo, isCompleted, onToggleCompletion, onDelete }) {
  return (
    <li style={todoItemStyles.todoItem} className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggleCompletion}
        className="todo-checkbox"
      />
      <div style={todoItemStyles.todoContent} className="todo-content">
        <span
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
          }}
        >
          {todo}
        </span>
      </div>
      <button
        style={todoItemStyles.deleteButton}
        className="delete-button"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
