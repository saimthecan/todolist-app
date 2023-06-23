import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/Sign-up";
import UserTodoList from "./Components/Todo/UserTodoList";
import AuthProvider from "./Components/Redux/AuthProvider";
import Welcome from "./Components/Home/Welcome";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/todo" element={<UserTodoList />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
