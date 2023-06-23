import React, { useState, useEffect, useContext, useMemo } from "react";
import { AuthContext } from "../Redux/AuthContext";
import TodoInput from "./TodoInputs";
import TodoItem from "./TodoItem";
import { styles } from "./TodoListStyles";

function FilterInput({ onFilterChange }) {
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="filter-input" style={styles.filterInput}>
      <input
        type="text"
        placeholder="Filter todos..."
        onChange={handleChange}
      />
    </div>
  );
}

const UserTodoList = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);

  

  const handleLogout = () => {
    setAuthToken(null);
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("email");
    window.location = "/login";
  };

  const [filterText, setFilterText] = useState("");
  const handleFilterChange = (value) => {
    setFilterText(value);
  };

  // email'ı localStorage'dan alıyoruz ve todo'lar için bir anahtar olarak kullanıyoruz
  const email = sessionStorage.getItem("email");

  const [todos, setTodos] = useState(() => {
    const savedTodos = sessionStorage.getItem(`todos-${email}`);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [completedTodos, setCompletedTodos] = useState(() => {
    const savedCompletedTodos = sessionStorage.getItem(`completedTodos-${email}`);
    return savedCompletedTodos ? JSON.parse(savedCompletedTodos) : [];
  });

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setCompletedTodos([...completedTodos, false]);
  };

  const toggleTodoCompletion = (index) => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos[index] = !newCompletedTodos[index];
    setCompletedTodos(newCompletedTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    const newCompletedTodos = completedTodos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setCompletedTodos(newCompletedTodos);
  };

  useEffect(() => {
    sessionStorage.setItem(`todos-${email}`, JSON.stringify(todos));
    sessionStorage.setItem(`completedTodos-${email}`, JSON.stringify(completedTodos));
  }, [todos, completedTodos, email]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [todos, filterText]);

  if (!authToken) {
    return <div>Yetkiniz yok</div>;
  }
  
  return (
    <div style={styles.body}>
      <div style={styles.todoAppContainer}>
        <div style={styles.todoApp}>
          <h2>Todo List</h2>
          <TodoInput onAddTodo={addTodo} />
          <FilterInput onFilterChange={handleFilterChange} />
          <ul>
            {filteredTodos.map((todo, index) => {
              const originalIndex = todos.indexOf(todo);
              return (
                <TodoItem
                  key={originalIndex}
                  todo={todo}
                  isCompleted={completedTodos[originalIndex]}
                  onToggleCompletion={() =>
                    toggleTodoCompletion(originalIndex)
                  }
                  onDelete={() => deleteTodo(originalIndex)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserTodoList;
