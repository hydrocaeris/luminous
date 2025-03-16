import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import TodoDetail from "./components/TodoDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/detail/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
