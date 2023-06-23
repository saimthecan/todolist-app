import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./Sign-up";
import UserTodoList from "./UserTodoList";
import AuthProvider from "./AuthProvider";
import Welcome from "./Welcome";

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
